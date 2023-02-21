'use strict';

function handleInputWords (preview, defaultValue, inputValue){
    if(inputValue === ''){
        preview.innerHTML = defaultValue;
    } else {
        preview.innerHTML = inputValue;
    }
};

function handleInputIcons (preview, prefix, inputValue){
    preview.href = `${prefix}${inputValue}`;
};


//Función manejadora del evento de la tarjeta
function formContent(event) {
  event.preventDefault();
  // const value = event.target.value;

  switch (event.target.name) {
    case 'palette':
      selectColor('palette' + event.target.value);
      renderCard('palette', 'event');
      break;
      
    case 'name':
      handleInputWords(previewFullName, 'Nombre Apellido', event.target.value);
      renderCard('name', 'event');
      break;

    case 'job':
      handleInputWords(previewJob, 'Front-end developer', event.target.value);
      renderCard('job', 'event');
      break;

    case 'email':
      handleInputIcons(previewEmail, 'mailto:', event.target.value);
      renderCard('email', 'event');
      break;

    case 'phone':
        handleInputIcons(previewPhone,'tel:', event.target.value);
        renderCard('phone', 'event');
      break;

    case 'linkedin':
      handleInputIcons(previewLinkedin,'https://www.',event.target.value);
      renderCard('linkedin', 'event');
      break;

    case 'github':
      handleInputIcons(previewGithub,'https://github.com/',event.target.value.replace('@',''));
      renderCard('github', 'event');
      break;
  }
  console.log('datacard', dataCard);
  localStorage.setItem('formData', JSON.stringify(dataCard));
}

function renderCard (item, event) {
  dataCard.item = event.target.value;
}

//Evento para todo el contenido de la tarjeta
containerForm.addEventListener('input', formContent);