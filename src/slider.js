const slider = () => {

    let element = document.createElement("div");
    element.className = "images";

    let img1 = "<img src=\"https://via.placeholder.com/1280x384/0000FF\">"
    let img2 = "<img src=\"https://via.placeholder.com/1280x384/FF0000\">"
    let img3 = "<img src=\"https://via.placeholder.com/1280x384/FFFF00\">"

    element.innerHTML = img1 + img2 + img3;

    return element;
}

export default slider;