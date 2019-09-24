const slider = () => {
  let element = document.createElement("div");
  element.className = "slider-div";

  let buttons =
    '<span class="nav-btn" id="nav-btn-left">&lt;</span><span class="nav-btn" id="nav-btn-right">&gt;</span>';

  let img1 = '<img src="https://via.placeholder.com/1280x384/0000FF">';
  let img2 = '<img src="https://via.placeholder.com/1280x384/FF0000">';
  let img3 = '<img src="https://via.placeholder.com/1280x384/FFFF00">';
  let img4 = '<img src="https://via.placeholder.com/1280x384/00FF00">';

  let marker =
    '<div class="slide-marker">' +
    '<span id="slide-marker-0" data-slide-index="0"></span>' +
    '<span id="slide-marker-1" data-slide-index="1"></span>' +
    '<span id="slide-marker-2" data-slide-index="2"></span>' +
    '<span id="slide-marker-3" data-slide-index="3"></span>' +
    "</div>";

  element.innerHTML =
    buttons +
    '<div id="image-container">' +
    img1 +
    img2 +
    img3 +
    img4 +
    "</div>" +
    marker;

  return element;
};

export default slider;
