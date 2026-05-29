"use strict";

// show & hide language selector 
let btn = document.getElementById("lang-sel");

btn.addEventListener("click", () => {
    const div = document.getElementById("language-selector");
    div.style.display = (div.style.display === "none" || div.style.display === "") ? "block" : "none";
})


// swap languages 
let mainLanguage = document.querySelector(".main-lang");

let englishSelector = document.getElementById("enl");
let lithuaniaSelector = document.getElementById("ltl");

englishSelector.addEventListener("click", () => {
    mainLanguage.textContent = 'EN';
})

lithuaniaSelector.addEventListener("click", () => {
    mainLanguage.textContent = 'LT';
})


// menu bar show for mobile

let menuBar = document.getElementById("menu-bar");
let navBarSpace = document.querySelector(".nav-bar-space");

menuBar.addEventListener("click", () => {
    const isOpen = navBarSpace.style.display === "flex";
    navBarSpace.style.display = isOpen ? "none" : "flex";
})


