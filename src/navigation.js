import showSlide from "./showSlide";

const navigation = slidePosition => {
  let navLeft = document.getElementById("nav-btn-left");
  let navRight = document.getElementById("nav-btn-right");
  let pos = slidePosition;
  let intervalID;

  const autoplay = () => {
    intervalID = setInterval(() => {
      if (pos < 4) {
        showSlide(pos);
        pos++;
      }
      if (pos === 4) {
        pos = 0;
      }

      return pos;
    }, 4000);
  };

  const stopAutoplay = () => {
    clearInterval(intervalID);
  };

  showSlide(pos);
  autoplay();

  navLeft.addEventListener("click", () => {
    stopAutoplay();
    if (pos < 4 && pos > 0) {
      pos -= 1;
      showSlide(pos);
    }

    autoplay();
    return pos;
  });

  navRight.addEventListener("click", () => {
    stopAutoplay();
    if (pos < 3 && pos >= 0) {
      pos += 1;
      showSlide(pos);
    }

    autoplay();
    return pos;
  });

  let markers = document.querySelectorAll(".slide-marker span");

  markers.forEach(marker => {
    marker.addEventListener("click", () => {
      stopAutoplay();
      pos = Number(marker.dataset.slideIndex);
      showSlide(pos);

      autoplay();
    });
  });
};

export default navigation;
