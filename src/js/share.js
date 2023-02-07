"use strict";
const buttonShare = document.querySelector(".js-button__share");
const buttonTwitter = document.querySelector(".js-button__twitter");

function showItems(item) {
  item.classList.remove("collapsed");
}
function hideItems(item) {
  item.classList.add("collapsed");
}

function handleClickItems(event) {
  event.preventDefault();
  if (buttonTwitter.classList.contains("collapsed")) {
    showItems(buttonTwitter);
  } else {
    hideItems(buttonTwitter);
  }
}
buttonShare.addEventListener("click", handleClickItems);
