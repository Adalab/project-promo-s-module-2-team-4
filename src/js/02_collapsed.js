'use strict';

function handleClickCollapsible(itemShowed) {
  hideItems(contentShare);
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
    scrollToTop(header)


  } else if (itemShowed === 'share') {
    showItems(buttonShare);
    hideItems(arrowShareUp);
    showItems(arrowShareDown);
    hideItems(arrowDesignDown);
    showItems(arrowDesignUp);
    hideItems(arrowFillDown);
    showItems(arrowFillUp);
    showItems(contentShare);
    scrollToTop(header)

  } else {
    showItems(contentDesign);
    hideItems(arrowDesignUp);
    showItems(arrowDesignDown);
    hideItems(arrowFillDown);
    showItems(arrowFillUp);
    hideItems(arrowShareDown);
    showItems(arrowShareUp);
    scrollToTop(header)

  }
};

function scrollToTop(place) {
  place.scrollIntoView(true); // Top
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



