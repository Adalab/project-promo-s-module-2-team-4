'use strict';

function handleInputWords(preview, defaultValue, inputValue) {
  if (inputValue === '') {
    preview.innerHTML = defaultValue;
  } else {
    preview.innerHTML = inputValue;
  }
}

function handleInputIcons(preview, prefix, inputValue) {
  preview.href = `${prefix}${inputValue}`;
}

//Función manejadora del evento de la tarjeta
function formContent(event) {
  event.preventDefault();

  switch (event.target.name) {
    case 'palette':
      selectColor('palette' + event.target.value);
      dataCard.palette = event.target.value;
      break;

    case 'name':
      handleInputWords(previewFullName, 'Nombre Apellido', event.target.value);
      dataCard.name = event.target.value;
      break;

    case 'job':
      handleInputWords(previewJob, 'Front-end developer', event.target.value);
      dataCard.job = event.target.value;
      break;

    case 'email':
      handleInputIcons(previewEmail, 'mailto:', event.target.value);
      dataCard.email = event.target.value;
      break;

    case 'phone':
      handleInputIcons(previewPhone, 'tel:', event.target.value);
      dataCard.phone = event.target.value;
      break;

    case 'linkedin':
      handleInputIcons(previewLinkedin, 'https://www.', event.target.value);
      dataCard.linkedin = event.target.value;
      break;

    case 'github':
      handleInputIcons(
        previewGithub,
        'https://github.com/',
        event.target.value.replace('@', '')
      );
      dataCard.github = event.target.value;
      break;
  }
  console.log('datacard', dataCard);
  localStorage.setItem('formData', JSON.stringify(dataCard));
}

function reloadShare() {
  buttonShare.classList.remove('button--share__off');
  shareHiddenTitle.innerHTML = '';
  shareHiddenTitle.classList.remove('margin--title');
  shareHiddenTitle.classList.remove('error--message');
  hideItems(divTwitter);
}

//Evento para todo el contenido de la tarjeta
containerForm.addEventListener('input', formContent);

//Evento para que al cambiar algún input vuelva al botón de share por defecto (naranja)
containerForm.addEventListener('change', reloadShare);
