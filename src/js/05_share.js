'use strict';

function handleClickItems(event) {
  event.preventDefault();
  const dataCardToSend = {
    ...dataCard,
    github: dataCard.github.replace('@', ''),
    linkedin: dataCard.linkedin.substr(dataCard.linkedin.lastIndexOf('/')+1)
  };
  console.log(dataCardToSend);
  fetch('https://dev.adalab.es/api/card', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }, //lo que estoy enviando es un contenido json
    body: JSON.stringify(dataCardToSend), //quiero enviar lo que tienen todos los inputs. con json convertimos el objeto a string
  })
    .then((response) => response.json())
    .then((data) => {
      if (!data.success) {
        showItems(shareHiddenTitle);
        shareHiddenTitle.innerHTML = "*Debes completar todos los campos";
        shareHiddenTitle.classList.add('error--message');
        console.log('data false', data)

      } else {
        showItems(divTwitter);
        buttonShare.classList.add('button--share__off');
        shareHiddenTitle.innerHTML = 'La tarjeta ha sido creada:';
        shareHiddenTitle.classList.add('margin--title');
        shareHiddenLink.innerHTML = data.cardURL;
        shareHiddenLink.href = data.cardURL;
        console.log('data true', data);
        buttonTwitter.href = `https://twitter.com/intent/tweet?text=Esta%20es%20mi%20tarjeta%20virtual:&url=${data.cardURL}`;

      }
    })

}

buttonShare.addEventListener('click', handleClickItems);
