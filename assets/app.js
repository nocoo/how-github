const root = document.documentElement;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const motionToggle = document.querySelector("#motion-toggle");
const replayButtons = [...document.querySelectorAll("[data-replay]")];
let motionPaused = reducedMotion.matches;

function setMotion(paused) {
  motionPaused = paused;
  root.dataset.motion = paused ? "off" : "on";
  root.classList.toggle("js-motion", !paused);
  if (paused) document.getAnimations().forEach((animation) => animation.cancel());
  motionToggle.setAttribute("aria-pressed", String(paused));
  motionToggle.disabled = reducedMotion.matches;
  motionToggle.querySelector(".motion-icon").textContent = paused ? "▷" : "Ⅱ";
  motionToggle.querySelector(".motion-label").textContent = reducedMotion.matches
    ? "已减少动效"
    : paused ? "开启动效" : "暂停动效";
  replayButtons.forEach((button) => { button.disabled = paused; });
}

motionToggle.hidden = false;
motionToggle.addEventListener("click", () => setMotion(!motionPaused));
reducedMotion.addEventListener("change", () => setMotion(reducedMotion.matches));
setMotion(motionPaused);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("is-visible");
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0, rootMargin: "0px 0px -32px 0px" });
document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

replayButtons.forEach((button) => {
  button.hidden = false;
  button.addEventListener("click", () => {
    if (motionPaused) return;
    const container = button.dataset.replay === "network"
      ? button.closest(".network-figure")
      : button.closest(".delivery-board");
    container.classList.add("is-visible");
    container.getAnimations({ subtree: true }).forEach((animation) => {
      animation.currentTime = 0;
      animation.play();
    });
  });
});

document.querySelectorAll("[data-tabs]").forEach((group) => {
  const tabs = [...group.querySelectorAll('[role="tab"]')];
  const panels = tabs.map((tab) => document.getElementById(tab.getAttribute("aria-controls")));

  function selectTab(selected, moveFocus = false) {
    tabs.forEach((tab, index) => {
      const active = tab === selected;
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
      panels[index].hidden = !active;
      panels[index].classList.toggle("panel-enter", active);
    });
    if (moveFocus) selected.focus({ preventScroll: true });
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => selectTab(tab));
    tab.addEventListener("keydown", (event) => {
      let next;
      if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
      if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = tabs.length - 1;
      if (next === undefined) return;
      event.preventDefault();
      selectTab(tabs[next], true);
    });
  });
  selectTab(tabs.find((tab) => tab.getAttribute("aria-selected") === "true") || tabs[0]);
});

const filters = document.querySelector("#product-filters");
const productCards = [...document.querySelectorAll(".product-card")];
const productCount = document.querySelector("#product-count");
filters.hidden = false;
filters.addEventListener("click", (event) => {
  const selected = event.target.closest("button[data-filter]");
  if (!selected) return;
  filters.querySelectorAll("button").forEach((button) => {
    button.setAttribute("aria-pressed", String(button === selected));
  });
  let count = 0;
  productCards.forEach((card) => {
    const visible = selected.dataset.filter === "all" || card.dataset.category === selected.dataset.filter;
    card.hidden = !visible;
    if (visible) {
      count += 1;
      if (!motionPaused) {
        card.animate([{ opacity: 0, transform: "translateY(8px)" }, { opacity: 1, transform: "none" }], {
          duration: 360,
          easing: "cubic-bezier(.22, 1, .36, 1)",
        });
      }
    }
  });
  productCount.textContent = `${count} 项核心能力`;
});

const chapters = [...document.querySelectorAll(".chapter")];
const navigation = document.querySelector(".chapter-rail");
const chapterLinks = [...navigation.querySelectorAll("nav a")];
const progress = document.querySelector("#reading-progress");
let framePending = false;
let activeChapter = "";

function updateReadingPosition() {
  framePending = false;
  const scrollable = root.scrollHeight - window.innerHeight;
  const fraction = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
  progress.style.transform = `scaleX(${fraction})`;
  const headerHeight = parseFloat(getComputedStyle(root).getPropertyValue("--header-height"));
  const horizontalNav = window.matchMedia("(max-width: 1000px)").matches;
  const offset = headerHeight + (horizontalNav ? 96 : 64);
  let current = chapters[0];
  for (const chapter of chapters) {
    if (chapter.getBoundingClientRect().top <= offset) current = chapter;
  }
  if (fraction >= 0.995) current = chapters.at(-1);
  if (current.id === activeChapter) return;
  activeChapter = current.id;
  chapterLinks.forEach((link) => {
    const active = link.hash === `#${current.id}`;
    if (active) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
    if (active && horizontalNav) {
      const linkRect = link.getBoundingClientRect();
      const railRect = navigation.getBoundingClientRect();
      if (linkRect.left < railRect.left || linkRect.right > railRect.right) {
        navigation.scrollTo({ left: link.offsetLeft - navigation.clientWidth / 2 + link.clientWidth / 2, behavior: "instant" });
      }
    }
  });
}

function queueReadingUpdate() {
  if (framePending) return;
  framePending = true;
  window.requestAnimationFrame(updateReadingPosition);
}

window.addEventListener("scroll", queueReadingUpdate, { passive: true });
window.addEventListener("resize", queueReadingUpdate, { passive: true });
new ResizeObserver(queueReadingUpdate).observe(document.querySelector("main"));
updateReadingPosition();
