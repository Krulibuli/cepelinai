"use strict";

const timelineItems = document.querySelectorAll(".timeline-item");

timelineItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove active from all items
    timelineItems.forEach((el) => el.classList.remove("active"));

    // Set clicked item as active
    item.classList.add("active");
  });
});
