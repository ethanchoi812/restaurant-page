import "./style.css";
import pageLoad from "./pageLoad";
import showContent from "./showContent";
import navigation from "./navigation";
import validateRequired from "./validateRequired";

document.body.appendChild(pageLoad());

let slidePosition = 0;
navigation(slidePosition);
validateRequired();
showContent();
