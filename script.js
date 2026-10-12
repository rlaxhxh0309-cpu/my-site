// 스크롤하여 섹션이 화면에 보이면 .visible 클래스를 추가
// 헤더 한 줄 소개를 한 글자씩 타이핑하는 효과
function typeText(el) {
  const text = el.textContent;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  el.textContent = "";
  el.classList.add("typing");

  let i = 0;
  const timer = setInterval(() => {
    el.textContent += text.charAt(i);
    i++;
    if (i >= text.length) {
      clearInterval(timer);
      // 타이핑이 끝나면 커서를 잠시 후 제거
      setTimeout(() => el.classList.remove("typing"), 1500);
    }
  }, 60);
}

document.addEventListener("DOMContentLoaded", () => {
  const tagline = document.getElementById("tagline");
  if (tagline) typeText(tagline);

  const fadeElements = document.querySelectorAll(".fade-in");

  // IntersectionObserver를 지원하지 않는 브라우저에서는 바로 표시
  if (!("IntersectionObserver" in window)) {
    fadeElements.forEach((el) => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  fadeElements.forEach((el) => observer.observe(el));
});
