from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import json
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
        self.chapter_ids = []
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
        if "chapter" in classes:
            self.chapter_ids.append(attrs["id"])
        self.products += "product-card" in classes
        if tag == "a" and attrs.get("target") == "_blank":
            assert "noopener" in attrs.get("rel", ""), attrs


html = (ROOT / "index.html").read_text()
page = PageParser()
page.feed(html)
version = json.loads((ROOT / "package.json").read_text())["version"]
assert re.fullmatch(r"\d+\.\d+\.\d+", version)
assert re.findall(r"data-version>([^<]+)</span>", html) == [f"v{version}"]
assert f"## v{version} " in (ROOT / "CHANGELOG.md").read_text()
rail = re.search(r'<aside class="chapter-rail".*?</aside>', html, re.S).group()
assert re.findall(r'<a href="#([^"]+)"', rail) == page.chapter_ids, "Chapter order must match navigation"
assert page.headings == 1
assert page.chapters == 15
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

chapters = sorted((ROOT / "docs").glob("[0-9][0-9]-*.md"))
assert [int(path.name[:2]) for path in chapters] == list(range(1, 16))
research_files = ["README.md", "sources.md"] + [path.name for path in chapters]
assert len(research_files) == 17
for name in research_files:
    path = ROOT / "docs" / name
    assert path.is_file(), path
    assert f"docs/{name}" in page.references, f"Unlinked research: {name}"
    for link in re.findall(r"\]\(([^)]+)\)", path.read_text()):
        url = urlsplit(link)
        if not url.scheme and not url.netloc and url.path:
            assert (path.parent / unquote(url.path)).is_file(), (name, link)

assert {path.name for path in ROOT.glob("*.md")} <= {"README.md", "AGENTS.md", "Retrospective.md", "CHANGELOG.md"}, "Research belongs in docs/"
for path in [ROOT / "README.md", ROOT / "docs/README.en.md", ROOT / "docs/site-guide.md", ROOT / "docs/deployment.md"]:
    for link in re.findall(r'(?:\]\(|(?:href|src)=")([^\s)"\n]+)', path.read_text()):
        url = urlsplit(link)
        if not url.scheme and not url.netloc and url.path:
            assert (path.parent / unquote(url.path)).is_file(), (path.name, link)
assert "fetch(" not in (ROOT / "assets/app.js").read_text(), "Keep file:// support"
print(f"通过：v{version}、15 个章节、12 项产品、17 份研究资料、目录顺序、链接、锚点与 ARIA 关系。")
