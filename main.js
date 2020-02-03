//menu function
let bar1 = document.getElementsByClassName("bar1")[0];
let bar2 = document.getElementsByClassName("bar2")[0];
let bar3 = document.getElementsByClassName("bar3")[0];

let body = document.querySelector("body");

let hamburger = document.getElementsByClassName("menu-icon")[0];

let header = document.getElementById("header");
let headerLogo = document.getElementsByClassName("logo")[0];

let menu = document.getElementsByClassName("menu")[0];

hamburger.addEventListener("click", () => {
  if (bar1.classList.contains("bar1")) {
    setTimeout(() => {
      headerLogo.style.display = "none";
    }, 500);
    menu.classList.remove("menu");
    menu.classList.add("menu-open");
    body.style.overflowY = "hidden";
    header.style.backgroundColor = "transparent";
    headerLogo.style.opacity = "0";
    bar1.classList.remove("bar1");
    bar2.classList.remove("bar2");
    bar3.classList.remove("bar3");
    bar1.classList.add("bar1-open");
    bar2.classList.add("bar2-open");
    bar3.classList.add("bar3-open");
  } else if (bar1.classList.contains("bar1-open")) {
    setTimeout(() => {
      headerLogo.style.opacity = "1";
    }, 250);
    body.removeAttribute("style");
    header.style.backgroundColor = "white";
    headerLogo.style.display = "flex";
    bar1.classList.add("bar1");
    bar2.classList.add("bar2");
    bar3.classList.add("bar3");
    menu.classList.add("menu");
    menu.classList.remove("menu-open");
    bar1.classList.remove("bar1-open");
    bar2.classList.remove("bar2-open");
    bar3.classList.remove("bar3-open");
  }
});

//show skills

let skillsBtn = document.getElementsByClassName("view-my-tech-btn")[0];
let skillsBtnText = document.getElementsByClassName("skills-btn-text")[0];
let arrowDown = document.getElementsByClassName("down")[0];

let skills = document.getElementsByClassName("skills-container")[0];

skillsBtn.addEventListener("click", () => {
  if (arrowDown.classList.contains("down")) {
    skillsBtnText.innerHTML = "Hide skills";
    skills.style.display = "flex";
    arrowDown.classList.remove("down");
    arrowDown.classList.add("down-open");
    setTimeout(() => {
      skills.style.opacity = "1";
    }, 300);
  } else if (arrowDown.classList.contains("down-open")) {
    skillsBtnText.innerHTML = "View my skills";
    arrowDown.classList.add("down");
    arrowDown.classList.remove("down-open");
    skills.style.display = "none";
    skills.style.opacity = "0";
  }
});

//make navbar shorter when scrolling away from top of screen

window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 100) {
    headerLogo.style.width = "0";
    header.style.height = "65px";
  } else if (currentScrollPos < 100) {
    headerLogo.style.width = "40px";
    header.style.height = "100px";
  }
};

//close nav menu when link is selected
let navLinks = [
  document.getElementById("homeLink"),
  document.getElementById("aboutLink"),
  document.getElementById("projectsLink"),
  document.getElementById("contactLink")
];

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    setTimeout(() => {
      headerLogo.style.opacity = "1";
    }, 250);
    body.removeAttribute("style");
    header.style.backgroundColor = "white";
    headerLogo.style.display = "flex";
    bar1.classList.add("bar1");
    bar2.classList.add("bar2");
    bar3.classList.add("bar3");
    menu.classList.add("menu");
    menu.classList.remove("menu-open");
    bar1.classList.remove("bar1-open");
    bar2.classList.remove("bar2-open");
    bar3.classList.remove("bar3-open");
  });
});
