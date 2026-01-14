const links = document.querySelectorAll(".scroll-link");
const headerHeight = document.querySelector(".header").offsetHeight;

links.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();

    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (!targetSection) return;

    const sectionPosition =
      targetSection.getBoundingClientRect().top + window.pageYOffset;

    const offsetPosition = sectionPosition - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  });
});
