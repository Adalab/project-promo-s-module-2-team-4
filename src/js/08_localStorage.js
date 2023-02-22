'use strict';

const localStorageData = JSON.parse(localStorage.getItem ('formData')); 

if (localStorageData){
    dataCard = localStorageData;
    switch(dataCard.palette){
        case '1':
            inputColorOne.checked = true;
            previewColor.classList.add('palette1');
        break;
        case '2':
            inputColorTwo.checked = true;
            previewColor.classList.add('palette2');
        break;
        case '3':
            inputColorThree.checked = true;
            previewColor.classList.add('palette3');
        break;
        case '4':
            inputColorFour.checked = true;
            previewColor.classList.add('palette4');
        break;
        case '5':
            inputColorFive.checked = true;
            previewColor.classList.add('palette5');
        break;
    }
    fullName.value = dataCard.name;
    previewFullName.innerHTML = dataCard.name;

    job.value = dataCard.job;
    previewJob.innerHTML = dataCard.job;

    profileImage.style.backgroundImage = `url(${dataCard.photo})`;
    profilePreview.style.backgroundImage = `url(${dataCard.photo})`;

    email.value = dataCard.email;
    handleInputIcons(previewEmail, 'mailto:', dataCard.email);

    phone.value = dataCard.phone;
    handleInputIcons(previewPhone,'tel:', dataCard.phone);

    github.value = dataCard.github;
    handleInputIcons(previewGithub,'https://github.com/',dataCard.github.replace('@',''));
    
    linkedin.value = dataCard.linkedin;
    handleInputIcons(previewLinkedin,'https://www.',dataCard.linkedin);
}