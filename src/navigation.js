
const navigation = () => {
    
    const images = document.getElementById("image-container");
    
    let navLeft = document.getElementById("nav-btn-left");
    let navRight = document.getElementById("nav-btn-right");
    
    navLeft.addEventListener("click", () => {
        images.style.left = -100 + "%";
    });
}

export default navigation;