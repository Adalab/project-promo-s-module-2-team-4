'use strict';
const buttonShare = document.querySelector('.js-button__share');
const buttonTwitter = document.querySelector('.js-button__twitter');

function showItems() {
  buttonTwitter.classList.remove('collapsed');
}
function hideItems() {
  buttonTwitter.classList.add('collapsed');
}

function handleClickItems(event) {
  event.preventDefault();
  if (buttonTwitter.classList.contains('collapsed')) {
    showItems();
  } else {
    hideItems(buttonTwitter);
  }
}
buttonShare.addEventListener('click', handleClickItems);

//
