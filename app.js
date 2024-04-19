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
//////////////////////////
//щоб по кліку фото закривалось/відкривалось
//але чомусь Презединт не закривається прикліку на наступне фото, якщо його спеціально не закрити ⬇️
// let prev = null;

// slides.forEach(function (slide) {
//   slide.addEventListener("click", function () {
//     let isActive = this.classList.contains("active");

//     if (!isActive) {
//       if (prev !== null) {
//         prev.classList.remove("active");
//       }
//       this.classList.add("active");
//       prev = this;
//     } else {
//       this.classList.remove("active");
//       prev = null;
//     }
//   });
// });
