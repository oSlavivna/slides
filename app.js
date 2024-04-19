// todo: add logic
let slides = document.querySelectorAll(".slide");

slides.forEach(function (slide) {
  slide.addEventListener("click", function () {
    let isActive = this.classList.contains("active");

    if (!isActive) {
      let activeSlide = document.querySelector(".slide.active");
      if (activeSlide) {
        activeSlide.classList.remove("active");
      }

      this.classList.add("active");
    }
  });
});
