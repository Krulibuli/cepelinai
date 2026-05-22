"use strict";
const rVSlide = document.querySelectorAll('.reviews');
const rVBtn = document.querySelector('#rVInd');
let count = 0;
hideslide(count);
function hideslide(count) {
    rVSlide.forEach(item => {
        item.style.display = 'none';
    });
    rVSlide[count % 5].style.display = 'block';
};
function next() {
    count = (count + 1) % 5;
    hideslide(count);
    rVBtn.textContent = count + 1 + '/5';
}
function prev() {
    count = (count - 1 + 5) % 5;
    hideslide(count);
    rVBtn.textContent = count + 1 + '/5';
}

document.querySelector('.rVSlct2').addEventListener('click', next)
document.querySelector('.rVSlct1').addEventListener('click', prev);