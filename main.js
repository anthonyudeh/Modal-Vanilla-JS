'use strict'


const modal = document.querySelector('.hidden');
const modalOverlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.cancel-btn');
const btnsOpenModal = document.querySelectorAll('.first-btn');
console.log(btnsOpenModal)


const displayMessage = function (message) {
    document.querySelector('.text-header').textContent = message
}

const isOpened = function () {
    modal.classList.remove('hidden');
    modalOverlay.classList.remove('hidden');
    displayMessage('This is the first Modal');
}

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', isOpened);
}

/*
function isClosed(){
    modal.classList.add('hidden');
    modalOverlay.classList.add('hidden');s
}// function declaration || function statement

*/   
//function expression

const isClosed = function () {
    modal.classList.add('hidden');
    modalOverlay.classList.add('hidden');
}


closeModal.addEventListener('click', isClosed);
modalOverlay.addEventListener('click', isClosed);

