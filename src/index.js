import pageLoad from "./pageLoad";
import getPosition from "./getPosition";
import navigation from "./navigation";
import showContent from "./showContent";
import autoplay from "./autoplay";

document.body.appendChild(pageLoad());

let slidePosition = 0;
navigation(slidePosition);
getPosition();
autoplay();
showContent();
