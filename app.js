const sideMenu = document.querySelector(".side-additional")
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
if (width <= 1000){
    sideMenu.classList.add("hidden")
} else {
    sideMenu.classList.remove("hidden")
}