
const navigation = () => {
    
    let sliderDiv = document.querySelector(".slider-div");
    let imgContainer = document.getElementById("image-container");   
    let navLeft = document.getElementById("nav-btn-left");
    let navRight = document.getElementById("nav-btn-right");
    
    let offset = sliderDiv.offsetWidth;
    let pos;

    navLeft.addEventListener("click", () => {
        pos = imgContainer.offsetLeft;
        console.log(pos);

        if ( pos < 0) {
            imgContainer.style.left = `${pos + offset}px`;
        }
        return pos;
    });

    navRight.addEventListener("click", () => {
        pos = imgContainer.offsetLeft;
        console.log(pos);
        console.log(imgContainer.offsetWidth);

        if ( Math.abs(pos) < (imgContainer.offsetWidth * 3/4) ) {
            imgContainer.style.left = `${pos - offset}px`;
        }
        return pos;
    });

}

export default navigation;