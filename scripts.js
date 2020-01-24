//menu dropdown effect
let dropdownBar = document.getElementById("menu-dropdown-bar");
let menuContent = document.getElementById("menu-content");
let menuArrow = document.getElementById("menu-arrow");

dropdownBar.addEventListener("click", () => {
  if (dropdownBar.classList.contains("closed-position")) {
    dropdownBar.classList.remove("closed-position");
    dropdownBar.classList.add("open-position");
    dropdownBar.removeAttribute("style");
    menuContent.classList.remove("hide-content");
    menuContent.classList.add("show-content");
    menuArrow.classList.remove("fa-chevron-down");
    menuArrow.classList.add("fa-chevron-up");
  } else if (dropdownBar.classList.contains("open-position")) {
    dropdownBar.classList.add("closed-position");
    dropdownBar.classList.remove("open-position");
    menuContent.classList.add("hide-content");
    menuContent.classList.remove("show-content");
    menuArrow.classList.add("fa-chevron-down");
    menuArrow.classList.remove("fa-chevron-up");
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
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
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
