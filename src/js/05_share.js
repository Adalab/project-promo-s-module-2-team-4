'use strict';

function handleClickItems(event) {
  event.preventDefault();
  fetch('https://dev.adalab.es/api/card', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }, //lo que estoy enviando es un contenido json
    body: JSON.stringify(dataCard), //quiero enviar lo que tienen todos los inputs. con json convertimos el objeto a string
  })
    .then((response) => response.json())
    .then((data) => {
      if (!data.success) {
        showItems(shareHiddenTitle);
        shareHiddenTitle.innerHTML = "Debes completar todos los campos";
        console.log('data false', data)

      } else {
        showItems(divTwitter);
        buttonShare.classList.add('button--share__off');
        shareHiddenTitle.innerHTML = 'La tarjeta ha sido creada:';
        shareHiddenLink.innerHTML = data.cardURL;
        shareHiddenLink.href = data.cardURL;
        console.log('data true', data);
        buttonTwitter.href = `https://twitter.com/intent/tweet?text=This%20is%20mi%20target:&url=${data.cardURL}`;

      }
    })

}

buttonShare.addEventListener('click', handleClickItems);
