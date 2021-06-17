const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const container = document.querySelector(".container");
const slidesCount = mainSlide.querySelectorAll("div").length;
let activeSlideIdx = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener("click", () => {
  changeSlide("up");
});

downBtn.addEventListener("click", () => {
  changeSlide("down");
});

function changeSlide(direction) {
  if (direction === "up") {
    activeSlideIdx += 1;
    if (activeSlideIdx === slidesCount) {
      activeSlideIdx = 0;
    }
  } else if (direction === "down") {
    activeSlideIdx -= 1;
    if (activeSlideIdx < 0) {
      activeSlideIdx = slidesCount - 1;
    }
  }

  const height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${activeSlideIdx * height}px)`;
  sidebar.style.transform = `translateY(${activeSlideIdx * height}px)`;
}
