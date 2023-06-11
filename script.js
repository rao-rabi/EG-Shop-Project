// let productSlide = document.getElementById("productsslide-item");
// // console.log(productSlide);
// let item = productSlide.querySelectorAll(".row");
// // console.log(item);
// let currentIndex = 0;
// item[currentIndex].style.opacity = '1';
// function showNext() {
//     item[currentIndex].style.opacity = '0';
//     currentIndex = (currentIndex + 1) % item.length;
//     item[currentIndex].style.opacity = '1';
// }
// setInterval(showNext ,3000)

let prSlide = document.getElementById("pr");
let images = prSlide.querySelectorAll(".img-pr");
// console.log(item);
let currentIndex = 0;
images[currentIndex].style.opacity = '1';

function showNext() {
    images[currentIndex].style.opacity = '0';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.opacity = '1';
}

setInterval(showNext ,3000)