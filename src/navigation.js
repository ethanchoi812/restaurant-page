import showSlide from "./showSlide";

const navigation = slidePosition => {
  let navLeft = document.getElementById("nav-btn-left");
  let navRight = document.getElementById("nav-btn-right");
  let pos = slidePosition;

  showSlide(pos);

  navLeft.addEventListener("click", () => {
    if (pos < 4 && pos > 0) {
      pos -= 1;
      showSlide(pos);
    }
    return pos;
  });

  navRight.addEventListener("click", () => {
    if (pos < 3 && pos >= 0) {
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

  setInterval(() => {
    if (pos < 4) {
      showSlide(pos);
      pos++;
    }
    if (pos === 4) {
      pos = 0;
    }

    return pos;
  }, 5000);
};

export default navigation;
