"use strict";

const items = document.querySelectorAll('.timeline-item');
const timelineItems = document.querySelector('.timeline-items'); // add this
const iconBox = document.createElement('div');
iconBox.className = 'icon-box';
iconBox.innerHTML = '<img src="img/jscript.png" alt="JS" />';

items.forEach((item) => {
  item.addEventListener('click', () => {
    items.forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    timelineItems.classList.add('expanded'); // add this

    if (iconBox.parentElement) {
      iconBox.parentElement.removeChild(iconBox);
    }
    item.appendChild(iconBox);
  });
});