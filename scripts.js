//menu dropdown effect
let dropdownBar = document.getElementById("menu-dropdown-bar");
let menuContent = document.getElementById("menu-content");
let menuArrow = document.getElementById("menu-arrow");
let body = document.getElementsByTagName("BODY")[0];

dropdownBar.addEventListener("click", () => {
  if (dropdownBar.classList.contains("closed-position")) {
    dropdownBar.classList.remove("closed-position");
    dropdownBar.classList.add("open-position");
    dropdownBar.removeAttribute("style");
    menuContent.classList.remove("hide-content");
    menuContent.classList.add("show-content");
    menuArrow.classList.remove("fa-chevron-down");
    menuArrow.classList.add("fa-chevron-up");
    body.style.overflow = "hidden";
  } else if (dropdownBar.classList.contains("open-position")) {
    dropdownBar.classList.add("closed-position");
    dropdownBar.classList.remove("open-position");
    menuContent.classList.add("hide-content");
    menuContent.classList.remove("show-content");
    menuArrow.classList.add("fa-chevron-down");
    menuArrow.classList.remove("fa-chevron-up");
    body.style.overflow = "visible";
  }
});

//hello typewriter effect
let helloMessage = document.getElementById("hello");
let viewWorkBtn = document.getElementById("view-work-button");
let message = "Hello! I'm AJ Esamann. Front-End Developer.";
let i = 0;
let speed = 125;

function typeOutMessage() {
  if (i < message.length) {
    helloMessage.innerHTML += message.charAt(i);
    i++;
    setTimeout(typeOutMessage, speed);
  } else if (i === message.length) {
    viewWorkBtn.style.opacity = 1;
  }
}

typeOutMessage();

//hide menu-bar on scroll down
function hideMenuBar() {
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (dropdownBar.classList.contains("closed-position")) {
      if (prevScrollpos > currentScrollPos) {
        dropdownBar.style.top = "0";
      } else {
        dropdownBar.style.top = "-100px";
      }
      prevScrollpos = currentScrollPos;
    }
  };
}

hideMenuBar();

//reset menu-bar after clicking a nav option
let navLinks = [
  document.getElementById("homeLink"),
  document.getElementById("aboutLink"),
  document.getElementById("projectsLink"),
  document.getElementById("contactLink")
];

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    dropdownBar.classList.add("closed-position");
    dropdownBar.classList.remove("open-position");
    menuContent.classList.add("hide-content");
    menuContent.classList.remove("show-content");
    menuArrow.classList.add("fa-chevron-down");
    menuArrow.classList.remove("fa-chevron-up");
  });
});

//running animation on elements when they come into view
(function() {
  let elements;
  let windowHeight;

  function init() {
    elements = document.querySelectorAll(".hidden");
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      let positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add("slide-in-element");
        element.classList.remove("hidden");
      }
    }
  }

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", init);

  init();
  checkPosition();
})();
