'use strict';

function resetPalettesCheck (){
    inputColorOne.checked=true;
    inputColorTwo.checked=false;
    inputColorThree.checked=false;
    inputColorFour.checked=false;
    inputColorFive.checked=false;
}

function handleClickResetBtn() {
    previewFullName.innerHTML = 'Nombre Apellido';
    previewJob.innerHTML = 'Front-end developer';
    previewEmail.href = '';
    previewPhone.href = '';
    previewLinkedin.href = '';
    previewGithub.href = '';
    fullName.value = '';
    job.value = '';
    email.value = '';
    phone.value = '';
    linkedin.value = '';
    github.value = '';
    selectColor('palette1');
    resetPalettesCheck ();
    profileImage.style.backgroundImage = 'url(../assets/images/preview-card-image.jpeg)';
    profilePreview.style.backgroundImage = '';
}

buttonReset.addEventListener('click', handleClickResetBtn);