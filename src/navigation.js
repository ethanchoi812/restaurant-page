
const navigation = () => {
    
    let sliderDiv = document.querySelector(".slider-div");
    let imgContainer = document.getElementById("image-container");   
    let navLeft = document.getElementById("nav-btn-left");
    let navRight = document.getElementById("nav-btn-right");
    
    let offset = sliderDiv.offsetWidth;
    let pos;

    navLeft.addEventListener("click", () => {
        pos = imgContainer.offsetLeft;
        imgContainer.style.left = `${pos - offset}px`;

        return pos;
    });

    navRight.addEventListener("click", () => {
        pos = imgContainer.offsetLeft;
        imgContainer.style.left = `${pos + offset}px`;

        return pos;
    });

}

export default navigation;