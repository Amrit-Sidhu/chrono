console.log("javascript file");
function changeNavColor() {
  let links = document.querySelectorAll(".links> li>a");
  links.forEach(function (element) {
    element.addEventListener("click", function () {
      links.forEach(function (a) {
        a.classList.remove("active-nav");
      });
      element.classList.toggle("active-nav");
    });
  });
}
changeNavColor();

// swiper slider settings

// init Swiper:
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
