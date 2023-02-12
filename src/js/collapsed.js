'use strict';

const contentDesign = document.querySelector(".js-content__design");

const contentFill = document.querySelector(".js-content__fill");

const legendDesign = document.querySelector(".js-legend__design");

const legendFill = document.querySelector(".js-legend__fill");

const legendShare = document.querySelector(".js-legend__share");


function handleClickCollapsible(itemShowed) {
  hideItems(buttonShare);
  hideItems(contentFill);
  hideItems(contentDesign);

  if (itemShowed === 'fill') {
    showItems(contentFill);
  } else if (itemShowed === 'share') {
    showItems(buttonShare);
  } else {
    showItems(contentDesign);
  }
}

legendDesign.addEventListener('click', () => {
  handleClickCollapsible('design');
});
legendFill.addEventListener('click', () => {
  handleClickCollapsible('fill');
});
legendShare.addEventListener('click', () => {
  handleClickCollapsible('share');
});



