const body = document.getElementsByTagName("body")[0];
const nav = document.getElementById("nav");
const hm_menu = document.getElementById("hm-menu");
const header = document.getElementById("header");
const links = document.querySelectorAll("#nav a");
const bars = document.querySelectorAll("#hm-menu span");

hm_menu.addEventListener("click", () => {
  if (hm_menu.classList.contains("active")) {
    nav.classList.remove("nav-active");
    hm_menu.classList.remove("active");
  } else {
    nav.classList.add("nav-active");
    hm_menu.classList.add("active");
  }
});

window.onscroll = () => {
  if (window.pageYOffset > 50) {
    header.classList.add("header-on-scroll");
    links.forEach((link) => (link.style.color = "black"));
    bars.forEach((bar) => (bar.style.backgroundColor = "black"));
    nav.classList.add("nav-on-scroll");
  } else {
    header.classList.remove("header-on-scroll");
    links.forEach((link) => (link.style.color = "white"));
    bars.forEach((bar) => (bar.style.backgroundColor = "white"));
    nav.classList.remove("nav-on-scroll");
  }
};

// nav_a.addEventListener("click", () => {
//   console.log("a is clcked");
// });
