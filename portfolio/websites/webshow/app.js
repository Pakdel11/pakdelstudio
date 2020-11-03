/** header animation */

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollpos) {
        document.getElementById("header").style.height = "10vh";
        document.getElementById("logo").style.fontSize = "20px";
        document.getElementById("logoImg").style.width = "none";
        // document.getElementById("nav").style.opacity = "1";
        this.document.getElementById("nav").style.marginRight = "0";
        this.document.getElementById("link").style.borderBottom = "none";
        this.document.getElementById("logoImg").style.height = "50px";

    } else {
        this.document.getElementById("logoImg").style.height = "40px";
        document.getElementById("header").style.height = "5vh";
        document.getElementById("logo").style.fontSize = "0";
        this.document.getElementById("link").style.borderBottom = "1px solid #333";



    }
    prevScrollpos = currentScrollpos;
};

// more code here....


const image = document.getElementsByClassName("imgs");
const margin = document.getElementsByClassName("bx");
const hd = document.querySelector("#header");
var opener = true;
for (let i = 0; i < image.length; i++) {
    image[i].addEventListener('click', function () {
        if (opener == true) {
            hd.style.display = "none";
            margin[i].style.cssText = "margin: 0;";
            image[i].style.cssText = "width: 70%; position: absolute; top: 200px; left: 0; right: 0; margin: auto;";
            document.querySelector(".intro").style.cssText = "width: 100%;";
            opener = false
        } else {
            margin[i].style.cssText = "margin: 20px; ";
            image[i].style.cssText = "width: 100%; position: unset; margin: 10px;";
            hd.style.display = "flex";
            document.querySelector(".intro").style.cssText = "width: 60%;";
            opener = true
        }

    });
}