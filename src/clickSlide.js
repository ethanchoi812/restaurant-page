import showSlide from "./showSlide";

const clickSlide = pos => {
  let markers = document.querySelectorAll(".slide-marker span");

  markers.forEach(marker => {
    marker.addEventListener("click", () => {
      pos = marker.dataset.slideIndex;
      showSlide(pos);
      return pos;
    });
  });
};

export default clickSlide;
