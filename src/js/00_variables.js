'use strict';

const buttonShare = document.querySelector('.js-button__share');

const divTwitter = document.querySelector('.js-div__twitter');

const previewColor = document.querySelector('.js-palette');

const inputColorOne = document.querySelector('.js-color1');

const inputColorTwo = document.querySelector('.js-color2');

const inputColorThree = document.querySelector('.js-color3');

const inputColorFour = document.querySelector('.js-color4');

const inputColorFive = document.querySelector('.js-color5');

const fullName = document.querySelector('.js-full-name');

const previewFullName = document.querySelector('.js-preview-full-name');

const job = document.querySelector('.js-job');

const previewJob = document.querySelector('.js-preview-job');

const email = document.querySelector('.js-email');

const previewEmail = document.querySelector('.js-preview-email');

const phone = document.querySelector('.js-phone');

const previewPhone = document.querySelector('.js-preview-phone');

const linkedin = document.querySelector('.js-linkedin');

const previewLinkedin = document.querySelector('.js-preview-linkedin');

const github = document.querySelector('.js-github');

const previewGithub = document.querySelector('.js-preview-github');

const buttonReset = document.querySelector('.button-reset');

const arrowShareDown = document.querySelector('.js-arrow-share-down');

const arrowShareUp = document.querySelector('.js-arrow-share-up');

const arrowDesignDown = document.querySelector('.js-arrow-design-down');

const arrowDesignUp = document.querySelector('.js-arrow-design-up');

const arrowFillDown = document.querySelector('.js-arrow-fill-down');

const arrowFillUp = document.querySelector('.js-arrow-fill-up');

const contentDesign = document.querySelector(".js-content__design");

const contentShare = document.querySelector(".js-content__share");

const contentFill = document.querySelector(".js-content__fill");

const legendDesign = document.querySelector(".js-legend__design");

const legendFill = document.querySelector(".js-legend__fill");

const legendShare = document.querySelector(".js-legend__share");

const buttonTwitter = document.querySelector('.js-button-twitter');

const containerForm = document.querySelector('.js-container-form');

const shareHiddenTitle = document.querySelector('.js--share__hidden_title');

const shareHiddenLink = document.querySelector('.js--share__link');

let dataCard = {
  palette: '1',
  name: '',
  job: '',
  photo: '',
  email: '',
  phone: '',
  github: '',
  linkedin: '',
};