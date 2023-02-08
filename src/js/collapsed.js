'use strict';

const contentDesign = document.querySelector(".js-content__design");

const legendDesign = document.querySelector(".js-legend__design");

function handleClickDesign(event) {
  event.preventDefault();
  if (contentDesign.classList.contains("collapsed")) {
    showItems(contentDesign);
  } else {
    hideItems(contentDesign);
  }
}

legendDesign.addEventListener("click", handleClickDesign);