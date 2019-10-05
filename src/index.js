import "./style.css";
import pageLoad from "./pageLoad";
import navigation from "./navigation";
import showContent from "./showContent";

document.body.appendChild(pageLoad());

let slidePosition = 0;
navigation(slidePosition);
showContent();
