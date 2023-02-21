'use strict';

const localStorageData = JSON.parse(localStorage.getItem ('formData')); 

if (localStorageData){
    formData = localStorageData;
renderCard('palette','event');
renderCard('name','event')

}else{

}