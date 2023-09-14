"use strict";

const sliderButtonLeft = document.querySelector(
  ".slider-main__slider-button-left"
);
const sliderButtonRight = document.querySelector(
  ".slider-main__slider-button-right"
);
const slider = document.querySelector(".slider-main__slider");
const slides = document.querySelectorAll(".slide-slider-main");
const slidesImage = document.querySelector(".slide-slider-main__image");
let currentSlidePosition = 0;
let maxSlides = slides.length - 1;

const slideToRight = () => {
  currentSlidePosition = currentSlidePosition + slidesImage.width;
  if (currentSlidePosition === slidesImage.width * maxSlides)
    sliderButtonRight.disabled = true;
  slider.style = `transform: translateX(${-currentSlidePosition}px)`;
  if (currentSlidePosition > 0) {
    sliderButtonLeft.disabled = false;
  }
};

const slideToLeft = () => {
  if (currentSlidePosition > 0) {
    currentSlidePosition = currentSlidePosition - slidesImage.width;
    slider.style = `transform: translateX(${-currentSlidePosition}px)`;
  }
  if (currentSlidePosition === 0) sliderButtonLeft.disabled = true;
  if (currentSlidePosition !== slidesImage.width * maxSlides)
    sliderButtonRight.disabled = false;
};

sliderButtonRight.addEventListener("click", slideToRight);
sliderButtonLeft.addEventListener("click", slideToLeft);

window.addEventListener("resize", function () {
  if (this.window.innerWidth > 425) {
    slider.style = `transform: translateX(0px)`;
  } else if (this.window.innerWidth <= 425 && currentSlidePosition > 0) {
    slider.style = `transform: translateX(${-currentSlidePosition}px)`;
  }
});

let headerButton = document.querySelector(".header__button");
window.addEventListener("scroll", function () {
  if (window.pageYOffset >= 360 && !headerButton.classList.contains("fixed")) {
    headerButton.classList.add("fixed");
  } else if (
    window.pageYOffset <= 360 &&
    headerButton.classList.contains("fixed")
  ) {
    headerButton.classList.remove("fixed");
  }
});
