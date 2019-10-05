import image1 from "./city1.jpg";
import image2 from "./city2.jpg";
import image3 from "./city3.jpg";
import image4 from "./city4.jpg";

const addImage = link => {
  let image = new Image();
  image.src = link;

  return image;
};

const slider = () => {
  const img1 = addImage(image1);
  const img2 = addImage(image2);
  const img3 = addImage(image3);
  const img4 = addImage(image4);

  let imageContainer = document.createElement("div");
  imageContainer.setAttribute("id", "image-container");

  imageContainer.innerHTML =
    img1.outerHTML + img2.outerHTML + img3.outerHTML + img4.outerHTML;

  let element = document.createElement("div");
  element.className = "slider-div";

  let buttons =
    '<span class="nav-btn" id="nav-btn-left">&lt;</span><span class="nav-btn" id="nav-btn-right">&gt;</span>';

  element.innerHTML += buttons;

  element.appendChild(imageContainer);

  let marker =
    '<div class="slide-marker">' +
    '<span id="slide-marker-0" data-slide-index="0"></span>' +
    '<span id="slide-marker-1" data-slide-index="1"></span>' +
    '<span id="slide-marker-2" data-slide-index="2"></span>' +
    '<span id="slide-marker-3" data-slide-index="3"></span>' +
    "</div>";

  element.innerHTML += marker;

  return element;
};

export default slider;
