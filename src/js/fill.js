'use strict';

function handleInputName() {
    const fullNameValue = fullName.value;

    if (fullNameValue === '') {
        previewFullName.innerHTML = 'Nombre Apellido';
    } else {
        previewFullName.innerHTML = fullNameValue;
    }
};
fullName.addEventListener('input', handleInputName);

function handleInputJob() {
    const jobValue = job.value;

    if (jobValue === '') {
        previewJob.innerHTML = 'Front-end developer';
    } else {
        previewJob.innerHTML = jobValue;
    }
};
job.addEventListener('input', handleInputJob);

function handleInputEmail() {
    const emailValue = email.value;
    previewEmail.href = `mailto:${emailValue}`;
};
email.addEventListener('input', handleInputEmail);

function handleInputPhone() {
    const phoneValue = phone.value;
    previewPhone.href = `tel:${phoneValue}`;
}

phone.addEventListener('input', handleInputPhone);

function handleInputLinkedin() {
    const linkedinValue = linkedin.value;
    previewLinkedin.href = `https://www.${linkedinValue}`;
}

linkedin.addEventListener('input', handleInputLinkedin);


