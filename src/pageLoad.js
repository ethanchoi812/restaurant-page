import slider from "./slider/slider";

const pageLoad = () => {
  let element = document.createElement("div");
  element.classList.add("main");

  let title = "<h1>The City Restaurant</h1>";
  let nav =
    '<div><ul id="nav"><li id="menu">Menu</li><li id="contact">Contact</li></ul></div>';

  let pageContent = '<div id="pageContent"></div>';

  element.innerHTML = title + nav;
  element.appendChild(slider());

  element.innerHTML += pageContent;

  return element;
};

export default pageLoad;
