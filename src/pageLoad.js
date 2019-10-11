import slider from "./slider/slider";
import menuContent from "./menuContent";
import contact from "./contact";

const pageLoad = () => {
  let element = document.createElement("div");
  element.classList.add("main");

  let title = `<h1>The City Restaurant</h1>`;
  let nav = `<div>
    <ul id="nav">
    <li id="menu">Menu</li>
    <li id="contact-form">Contact</li>
    </ul>
    </div>`;

  element.innerHTML = title + nav;

  element.appendChild(slider());
  element.appendChild(menuContent());
  element.appendChild(contact());

  return element;
};

export default pageLoad;
