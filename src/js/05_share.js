'use strict';

function handleClickItems(event) {
  event.preventDefault();
  showItems(divTwitter);
  buttonShare.classList.add('button--share__off');
}

buttonShare.addEventListener('click', handleClickItems);
