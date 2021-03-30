"use strict";

/**
 * Handle mobile menu functionality to hide/reveal sidebar on mobile layouts
 */
const body = document.querySelector("body");
let headerBtnClicked = false;

document.querySelector("#menu-icon").addEventListener("click", (e) => {
  !headerBtnClicked
    ? (body.style.transform = "translateX(300px)")
    : (body.style.transform = "translateX(0px)");
  return (headerBtnClicked = !headerBtnClicked);
});

// select about link
const aboutLink = document.querySelector("#about-link");

// hide about link if in about page, else display
if (document.querySelector(".portfolio-about")) {
  aboutLink.style.display = "none";
} else {
  aboutLink.style.display = "";
}
