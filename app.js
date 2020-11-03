// animation text type

var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 1000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};


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

/** scroll to top */
const backToTop = document.querySelector("#topBtn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) {
    if (!backToTop.classList.contains("btnEntrance")) {
      backToTop.classList.add("btnEntrance");
      backToTop.classList.remove("btnExit");
      setTimeout(function () {
        backToTop.style.display = "block";
      }, 250);

    }
  } else {
    if (backToTop.classList.contains("btnEntrance")) {
      backToTop.classList.add("btnExit");
      backToTop.classList.remove("btnEntrance");
      setTimeout(function () {
        backToTop.style.display = "none";
      }, 250);

    }

  }

};

backToTop.addEventListener('click', backTo);

function backTo() {
  window.scrollTo(0, 0);
};



// open menu on phone


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

/*$("#submit-btn").click(function () {
  swal("Hello World")
});*/