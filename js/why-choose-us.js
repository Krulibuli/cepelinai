"use strict";

let teamBar = document.querySelector(".team-bar");
let communicationBar = document.querySelector(".communication-bar");
let solutionBar = document.querySelector(".solution-bar");
let qualityBar = document.querySelector(".quality-bar");

let teamName = document.querySelector(".team-name");
let communicationName = document.querySelector(".communication-name");
let solutionName = document.querySelector(".solution-name");
let qualityName = document.querySelector(".quality-name");

let teamText = document.querySelector(".team-text");
let communicationText = document.querySelector(".communication-text");
let solutionText = document.querySelector(".solution-text");
let qualityText = document.querySelector(".quality-text");





teamName.addEventListener("click", () => {
    if (innerWidth <= 1080) {
        teamName.style.borderTop = "2.5px solid #2E2BD0";
    
        communicationName.style.borderTop = "2.5px solid transparent";
        solutionName.style.borderTop = "2.5px solid transparent";
        qualityName.style.borderTop = "2.5px solid transparent";
    } else {
        teamName.style.borderTop = "2.5px solid transparent";

        communicationName.style.borderTop = "2.5px solid transparent";
        solutionName.style.borderTop = "2.5px solid transparent";
        qualityName.style.borderTop = "2.5px solid transparent";
    }

    teamBar.style.display = "block";
    teamText.style.display = "block";
    teamName.style.color = "#2E2BD0";

    communicationBar.style.display = "none";
    communicationText.style.display = "none";
    communicationName.style.color = "lightgray";

    solutionBar.style.display = "none";
    solutionText.style.display = "none";
    solutionName.style.color = "lightgray";

    qualityBar.style.display = "none";
    qualityText.style.display = "none";
    qualityName.style.color = "lightgray";
})


communicationName.addEventListener("click", () => {
    if (innerWidth <= 1080) {
        communicationName.style.borderTop = "2.5px solid #2E2BD0";

        teamName.style.borderTop = "2.5px solid transparent";
        solutionName.style.borderTop = "2.5px solid transparent";
        qualityName.style.borderTop = "2.5px solid transparent";
    } else {
        communicationName.style.borderTop = "2.5px solid transparent";

        teamName.style.borderTop = "2.5px solid transparent";
        solutionName.style.borderTop = "2.5px solid transparent";
        qualityName.style.borderTop = "2.5px solid transparent";
    }

    communicationBar.style.display = "block";
    communicationText.style.display = "block";
    communicationName.style.color = "#2E2BD0";

    teamBar.style.display = "none";
    teamText.style.display = "none";
    teamName.style.color = "lightgray";

    solutionBar.style.display = "none";
    solutionText.style.display = "none";
    solutionName.style.color = "lightgray";

    qualityBar.style.display = "none";
    qualityText.style.display = "none";
    qualityName.style.color = "lightgray";
})


solutionName.addEventListener("click", () => {
    if (innerWidth <= 1080) {
        solutionName.style.borderTop = "2.5px solid #2E2BD0";

        teamName.style.borderTop = "2.5px solid transparent";
        communicationName.style.borderTop = "2.5px solid transparent";
        qualityName.style.borderTop = "2.5px solid transparent";
    } else {
        solutionName.style.borderTop = "2.5px solid transparent";

        teamName.style.borderTop = "2.5px solid transparent";
        communicationName.style.borderTop = "2.5px solid transparent";
        qualityName.style.borderTop = "2.5px solid transparent";
    }

    solutionBar.style.display = "block";
    solutionText.style.display = "block";
    solutionName.style.color = "#2E2BD0";

    teamBar.style.display = "none";
    teamText.style.display = "none";
    teamName.style.color = "lightgray";

    communicationBar.style.display = "none";
    communicationText.style.display = "none";
    communicationName.style.color = "lightgray";

    qualityBar.style.display = "none";
    qualityText.style.display = "none";
    qualityName.style.color = "lightgray";
})


qualityName.addEventListener("click", () => {
    if (innerWidth <= 1080) {
        qualityName.style.borderTop = "2.5px solid #2E2BD0";

        teamName.style.borderTop = "2.5px solid transparent";
        communicationName.style.borderTop = "2.5px solid transparent";
        solutionName.style.borderTop = "2.5px solid transparent";
    } else {
        qualityName.style.borderTop = "2.5px solid transparent";

        teamName.style.borderTop = "2.5px solid transparent";
        communicationName.style.borderTop = "2.5px solid transparent";
        solutionName.style.borderTop = "2.5px solid transparent";
    }

    qualityBar.style.display = "block";
    qualityText.style.display = "block";
    qualityName.style.color = "#2E2BD0";

    teamBar.style.display = "none";
    teamText.style.display = "none";
    teamName.style.color = "lightgray";

    solutionBar.style.display = "none";
    solutionText.style.display = "none";
    solutionName.style.color = "lightgray";

    communicationBar.style.display = "none";
    communicationText.style.display = "none";
    communicationName.style.color = "lightgray";
})








