// JavaScript for ImageSlider
const images = ["img/first.webp", "img/third.jpg", "img/second.webp", "img/fourth.webp", "img/fifth.jpg", "img/sixth.jpg"];

let index = 0;
const slide = document.getElementById('slide');

function next() {
    if (index < images.length - 1) {
        index++;
    }
    else {
        index = 0;
    }
    slide.src = images[index];
}

function previous() {
    if (index > 0) {
        index--;
    }
    else {
        index = images.length - 1;
    }
    slide.src = images[index];
}

setInterval(next, 4000);

// JavaScript for Dialoguebox
function openModel(){
    const overlayElement = document.getElementById('overlay');
    overlayElement.style.display = 'flex';
}

function closeModel(){
    const overlayElement = document.getElementById('overlay');
    overlayElement.style.display = 'none';
}

