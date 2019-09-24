import pageLoad from "./pageLoad";
import navigation from "./navigation";
import clickSlide from "./clickSlide";

document.body.appendChild(pageLoad());

const tabDiv = document.createElement("div");

let menu = document.getElementById("menu");
let contact = document.getElementById("contact");

menu.onclick = function(e) {
  showContent("menu");
};
contact.onclick = function(e) {
  showContent("contact");
};

function showContent(tab) {
  let tabContent;

  if (tab === "menu") {
    tabContent = "This is my menu";
  } else if (tab === "contact") {
    tabContent = "Contact here";
  } else {
    tabContent = "";
  }

  tabDiv.innerHTML = tabContent;
  return tabDiv;
}

document.body.appendChild(tabDiv);

let slidePosition = 0;

navigation(slidePosition);
clickSlide(slidePosition);
