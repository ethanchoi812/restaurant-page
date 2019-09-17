import slider from "./slider";
import navigation from "./navigation";


function pageLoad() {

    let element = document.createElement('div');
        
    let title = "<h1>The City Restaurant</h1>";
    let nav ="<div><ul><li id=\"menu\">Menu</li><li id=\"contact\">Contact</li></ul></div>";

    element.innerHTML = title + nav;
    element.appendChild(slider());
    navigation();

    return element;
}


export default pageLoad;