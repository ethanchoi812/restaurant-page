import showSlide from "./showSlide";

const navigation = pos => {
  let navLeft = document.getElementById("nav-btn-left");
  let navRight = document.getElementById("nav-btn-right");

  navLeft.addEventListener("click", () => {
    if (pos < 4 && pos > 0) {
      pos -= 1;
      showSlide(pos);
    }
    return pos;
  });

  navRight.addEventListener("click", () => {
    if (pos < 3) {
      pos += 1;
      showSlide(pos);
    }
    return pos;
  });
};

export default navigation;
