'use strict';

function selectColor(palette) {
  previewColor.classList.remove('palette1');
  previewColor.classList.remove('palette2');
  previewColor.classList.remove('palette3');
  previewColor.classList.remove('palette4');
  previewColor.classList.remove('palette5');
  previewColor.classList.add(palette);
}

inputColorOne.addEventListener('click', () => {
  selectColor('palette1');
});

inputColorTwo.addEventListener('click', () => {
  selectColor('palette2');
});

inputColorThree.addEventListener('click', () => {
  selectColor('palette3');
});

inputColorFour.addEventListener('click', () => {
  selectColor('palette4');
});

inputColorFive.addEventListener('click', () => {
  selectColor('palette5');
});
