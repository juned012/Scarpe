// JavaScript for ImageSlider
const images = [
    "img/Home-imgs/first.webp", "img/Home-imgs/third.jpg",
    "img/Home-imgs/second.webp", "img/Home-imgs/fourth.webp",
    "img/Home-imgs/fifth.jpg", "img/Home-imgs/sixth.jpg"
];

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

//Subscription added Notification.
function newsletter(){
    alert("Scarpe's NewsLetter Subscription Added ✅ ");
}