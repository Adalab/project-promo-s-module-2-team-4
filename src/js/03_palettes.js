'use strict';

function selectColor(palette) {
  previewColor.classList.remove('palette1');
  previewColor.classList.remove('palette2');
  previewColor.classList.remove('palette3');
  previewColor.classList.remove('palette4');
  previewColor.classList.remove('palette5');
  previewColor.classList.add(palette);
}
