"use strict";

let btn = document.getElementById("lang-sel");

btn.addEventListener("click", () => {
    const div = document.getElementById("language-selector");
    div.style.display = (div.style.display === "none" || div.style.display === "") ? "block" : "none";
})

let mainLanguage = document.querySelector(".main-lang");

let englishSelector = document.getElementById("enl");
let lithuaniaSelector = document.getElementById("ltl");

englishSelector.addEventListener("click", () => {
    mainLanguage.textContent = 'EN' 
})

lithuaniaSelector.addEventListener("click", () => {
    mainLanguage.textContent = 'LT'
})
