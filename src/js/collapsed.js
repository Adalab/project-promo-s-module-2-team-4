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
    hideItems(arrowFillUp);
    showItems(arrowFillDown);
    hideItems(arrowDesignDown);
    showItems(arrowDesignUp);
    hideItems(arrowShareDown);
    showItems(arrowShareUp);
  } else if (itemShowed === 'share') {
    showItems(buttonShare);
    hideItems(arrowShareUp);
    showItems(arrowShareDown);
    hideItems(arrowDesignDown);
    showItems(arrowDesignUp);
    hideItems(arrowFillDown);
    showItems(arrowFillUp);
  } else {
    showItems(contentDesign);
    hideItems(arrowDesignUp);
    showItems(arrowDesignDown);
    hideItems(arrowFillDown);
    showItems(arrowFillUp);
    hideItems(arrowShareDown);
    showItems(arrowShareUp);
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



