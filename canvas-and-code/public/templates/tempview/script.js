document.addEventListener("DOMContentLoaded", () => {
  const fadeInElements = document.querySelectorAll(".fade-in, .fade-in-1, .fade-in-2, .fade-in-3, .fade-in-4");

  const observer = new IntersectionObserver((pictures) => {
    pictures.forEach(picture => {
      if (picture.isIntersecting) {
        picture.target.classList.add("visible");
      } else {
        picture.target.classList.remove("visible");
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  });

  fadeInElements.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
  const pillContainer = document.querySelector(
    ".challenges-section .d-flex.flex-wrap.justify-content-center.gap-3"
  );

  if (pillContainer) {
    const pills = pillContainer.querySelectorAll(".challenge-pill");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            pills.forEach((pill, index) => {
              setTimeout(() => {
                pill.classList.add("visible");
              }, index * 150); // stagger timing per pill
            });
          } else {
            pills.forEach((pill) => pill.classList.remove("visible"));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(pillContainer);
  }
});


