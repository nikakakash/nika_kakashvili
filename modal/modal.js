'use strict';


const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnColse = document.querySelector('.close-modal')
const btnsOpen = document.querySelectorAll('.show-modal')


function closeModal() {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

function openModel() {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

btnsOpen.forEach((button) => {
    button.addEventListener('click', openModel)
})

btnColse.addEventListener('click', closeModal)

overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal()
    }
})