// 스크롤하여 섹션이 화면에 보이면 .visible 클래스를 추가
document.addEventListener("DOMContentLoaded", () => {
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
