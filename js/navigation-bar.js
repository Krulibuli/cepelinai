"use strict";

let btn = document.getElementById("lang-sel");

btn.addEventListener("click", () => {
    const div = document.getElementById("language-selector")
    div.style.display = (div.style.display === "none" || div.style.display === "") ? "block" : "none";
})