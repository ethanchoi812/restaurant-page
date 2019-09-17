
const slider = () => {

    let element = document.createElement("div");
    element.className = "slider-div";

    let buttons = "<span class=\"nav-btn\" id=\"nav-btn-left\">&lt;</span><span class=\"nav-btn\" id=\"nav-btn-right\">&gt;</span>";
    
    let img1 = "<img src=\"https://via.placeholder.com/1280x384/0000FF\">";
    let img2 = "<img src=\"https://via.placeholder.com/1280x384/FF0000\">";
    let img3 = "<img src=\"https://via.placeholder.com/1280x384/FFFF00\">";

    element.innerHTML = buttons + "<div id=\"image-container\">" + img1 + img2 + img3 + "</div>";


    return element;
}

export default slider;