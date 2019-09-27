const getPosition = () => {
  let sliderDiv = document.querySelector(".slider-div");
  let sliderDivWidth = sliderDiv.offsetWidth;
  console.log(sliderDivWidth);

  let offset = sliderDiv.style.translate;
  console.log(offset);

  let position = offset / sliderDivWidth;
  console.log(position);

  return position;
};

export default getPosition;
