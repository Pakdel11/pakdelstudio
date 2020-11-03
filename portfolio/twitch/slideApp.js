const images = [
    'img/img/header/revamp.png',
    'img/img/header/panel.png',
    'img/img/header/overlay.png',
    'img/img/header/stream.png'
];
var bgd = document.getElementsByClassName("container-f")[0];
var slider = document.getElementById("slider");
var counter = 0;

var Cont = document.getElementsByClassName("imageCont-f");
const RightBtn = document.getElementById("btn-l");
const LeftBtn = document.getElementById("btn-g");


RightBtn.addEventListener("click", Pause);
LeftBtn.addEventListener("click", Start);

var toggleImg = false;


slider.addEventListener('click', () => {

    if (toggleImg == false) {
        slider.style.cssText = "width: 70%; height: auto; transform: scale(1); border-radius: 0px;";
        document.querySelector(".img-f").style.cssText = "width: 90%;";
        document.querySelector(".imageCont-f").style.cssText = "width: 90%; height: auto;";
        document.querySelector(".introduction-f").style.cssText = "width: 100%; height: 100vh;position: absolute;";
        document.querySelector(".background-f").style.cssText = " width: 100%; height: 100%; position: absolute;";
        document.getElementById("btn-g").style.cssText = "position: absolute; z-index: 1; left: 10px;";
        document.getElementById("btn-l").style.cssText = "position: absolute; z-index: 1; right: 10px;";
        toggleImg = true
        document.getElementById("header").style.display = "none";
    } else if (toggleImg == true) {
        document.getElementById("btn-g").style.cssText = "position: relative; left: 0px;";
        document.getElementById("btn-l").style.cssText = "position: relative; right: 0px;";
        slider.style.cssText = "width: auto; height: 300px; transform: scale(1.1); border-radius: 5px;";
        document.querySelector(".img-f").style.cssText = "width: 600px;";
        document.querySelector(".imageCont-f").style.cssText = "width: 90%";
        document.querySelector(".introduction-f").style.cssText = "width: 80%;";
        document.querySelector(".background-f").style.cssText = "width: 100%; height: 400px;";
        toggleImg = false
        document.getElementById("header").style.display = "flex";

    }
})

// media query 
var x = window.matchMedia("(max-width: 600px)")
myFunction(x)
x.addListener(myFunction)

function myFunction(x) {
    if (x.matches) {

        slider.style.cssText = "width: auto; height: 120px; transform: scale(1.1); border-radius: 0px;";
        document.querySelector(".img-f").style.cssText = "width: 100%; height: auto;";
        document.querySelector(".img-f").style.cssText = "width: 100%; height: auto;";
        document.querySelector(".imageCont-f").style.cssText = "width: 90%;";
        document.querySelector(".introduction-f").style.cssText = "width: 100%; height: 100vh;position: absolute;";
        document.querySelector(".background-f").style.cssText = " width: 100%; height: 100%; position: absolute;";
        document.getElementById("btn-g").style.cssText = "position: absolute; z-index: 1; left: 0px;";
        document.getElementById("btn-l").style.cssText = "position: absolute; z-index: 1; right: 0px;";
    }
}


function Pause() {
    counter++;
    if (counter > images.length - 1) counter = 0;
    slider.src = images[counter];
    bgd.style.backgroundImage = 'url(' + images[counter] + ')';

}

function Start() {
    counter--;
    if (counter < 0) counter = images.length - 1;
    slider.src = images[counter];
    bgd.style.backgroundImage = 'url(' + images[counter] + ')';

}


// menu toggle 

const hamburger = document.getElementById("btn-tg");
const menu = document.querySelector(".toggleNav");
const links = document.querySelectorAll(".link");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
        link.addEventListener('click', toggleNav => {
            toggleNav.style.display = "none";

        })
    });
});