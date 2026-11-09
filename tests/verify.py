from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import re

ROOT = Path(__file__).resolve().parents[1]


class PageParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = []
        self.references = []
        self.controls = []
        self.headings = 0
        self.chapters = 0
        self.products = 0

    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        if "id" in attrs:
            self.ids.append(attrs["id"])
        for attribute in ("href", "src"):
            if attribute in attrs:
                self.references.append(attrs[attribute])
        for attribute in ("aria-controls", "aria-labelledby"):
            self.controls.extend(attrs.get(attribute, "").split())
        self.headings += tag == "h1"
        classes = attrs.get("class", "").split()
        self.chapters += "chapter" in classes
        self.products += "product-card" in classes
        if tag == "a" and attrs.get("target") == "_blank":
            assert "noopener" in attrs.get("rel", ""), attrs


page = PageParser()
page.feed((ROOT / "index.html").read_text())
assert page.headings == 1
assert page.chapters == 10
assert page.products == 12
assert all(count == 1 for count in Counter(page.ids).values()), "Duplicate HTML IDs"
assert set(page.controls) <= set(page.ids), "Broken ARIA relationship"

for reference in page.references:
    url = urlsplit(reference)
    if url.scheme or url.netloc:
        assert url.scheme == "https", reference
        continue
    if url.path:
        assert (ROOT / unquote(url.path)).is_file(), reference
    elif url.fragment:
        assert unquote(url.fragment) in page.ids, reference

research_files = ["README.md", "sources.md"] + [
    "01-公司概况与历史.md", "02-产品与功能矩阵.md", "03-付费服务与定价.md",
    "04-营收与盈利公开信息.md", "05-商业模式与生态布局.md", "06-AI战略与Copilot.md",
    "07-AI时代的挑战与竞争.md", "08-风险与展望.md",
]
for name in research_files:
    path = ROOT / "docs" / name
    assert path.is_file(), path
    assert f"docs/{name}" in page.references, f"Unlinked research: {name}"
    for link in re.findall(r"\]\(([^)]+)\)", path.read_text()):
        url = urlsplit(link)
        if not url.scheme and not url.netloc and url.path:
            assert (path.parent / unquote(url.path)).is_file(), (name, link)

assert {path.name for path in ROOT.glob("*.md")} <= {"README.md", "AGENTS.md", "Retrospective.md"}, "Research belongs in docs/"
for path in [ROOT / "README.md", ROOT / "docs/README.en.md", ROOT / "docs/site-guide.md", ROOT / "docs/deployment.md"]:
    for link in re.findall(r'(?:\]\(|(?:href|src)=")([^\s)"\n]+)', path.read_text()):
        url = urlsplit(link)
        if not url.scheme and not url.netloc and url.path:
            assert (path.parent / unquote(url.path)).is_file(), (path.name, link)
assert "fetch(" not in (ROOT / "assets/app.js").read_text(), "Keep file:// support"
print("通过：10 个章节、12 项产品、10 份原始资料、全部本地链接、锚点与 ARIA 关系。")
