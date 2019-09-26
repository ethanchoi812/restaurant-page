import showSlide from "./showSlide";

const navigation = () => {
  let navLeft = document.getElementById("nav-btn-left");
  let navRight = document.getElementById("nav-btn-right");
  let pos = 0;

  showSlide(pos);

  navLeft.addEventListener("click", () => {
    if (pos < 4 && pos > 0) {
      pos -= 1;
      showSlide(pos);
    }
    return pos;
  });

  navRight.addEventListener("click", () => {
    if (pos < 3 && pos > -1) {
      pos += 1;
      showSlide(pos);
    }
    return pos;
  });

  let markers = document.querySelectorAll(".slide-marker span");

  markers.forEach(marker => {
    marker.addEventListener("click", () => {
      pos = Number(marker.dataset.slideIndex);
      showSlide(pos);
    });
  });
};

export default navigation;
