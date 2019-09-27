import showSlide from "./showSlide";
//import getPosition from "./getPosition";

const autoplay = () => {
  setInterval(() => {
    let pos = 0;

    if (pos < 4) {
      showSlide(pos);
      pos++;
    }
    if (pos === 4) {
      pos = 0;
    }
  }, 5000);
};

export default autoplay;
