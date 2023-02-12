'use strict';



function showItems(item) {
  item.classList.remove('collapsed');
}
function hideItems(item) {
  item.classList.add('collapsed');
}

function handleClickItems(event) {
  event.preventDefault();
  showItems(divTwitter);
  buttonShare.classList.add('button--share__off');
}


buttonShare.addEventListener('click', handleClickItems);

const buttonTwitter = document.querySelector('.js-button-twitter');


