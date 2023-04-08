// for humburger

hamburger = document.querySelector(".hamburger");
nav = document.querySelector("nav");
hamburger.onclick = function () {
  nav.classList.toggle("active");
};

// for humburger design

(function () {
  var toggle = document.querySelector(".nav-toggle");

  toggle.addEventListener("click", function (e) {
    this.classList.toggle("opened");
  });
})();
