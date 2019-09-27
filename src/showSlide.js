import getPosition from "./getPosition";

const showSlide = pos => {
  let sliderDiv = document.querySelector(".slider-div");
  let offset = sliderDiv.offsetWidth;
  let imgContainer = document.getElementById("image-container");

  imgContainer.style.transform = `translate(-${pos * offset}px)`;

  let markers = document.querySelectorAll(".slide-marker span");
  let slideMark = document.getElementById(`slide-marker-${pos}`);

  markers.forEach(marker => {
    marker.style.background = "#ccc";
  });

  slideMark.style.background = "#fff";

  getPosition();
};

export default showSlide;
