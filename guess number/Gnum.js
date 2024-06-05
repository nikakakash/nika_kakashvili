'use strict';

const playAgain = document.querySelector('.again')
let number = document.querySelector('.number')
const userGuess = document.querySelector('.guess')
const check = document.querySelector('.check')
const messege = document.querySelector('.message')
const score = document.querySelector('.score')
const highscore = document.querySelector('.highscore')
let target = Math.floor(Math.random() * 20) + 1
const body = document.querySelector('body')
let scoreCount = 20
let Hscore = 0
check.addEventListener('click', () => {
    if (Number(userGuess.value) == target) {
        messege.textContent = '✅ Correct Guess'
        number.textContent = target


        body.style.backgroundColor = 'green'
        number.style.width = '270px'
        if (scoreCount > Hscore) {
            Hscore = scoreCount
            highscore.textContent = Hscore
        }



    }
    else if (Number(userGuess.value) !== target) {
        if (scoreCount > 1) {
            if (Number(userGuess.value) > target) {
                messege.textContent = '📈 Too High!'
            }
            else {
                messege.textContent = '📉 Too Low!'
            }
            scoreCount--
            score.textContent = scoreCount
            userGuess.value = ''
        }
        else {
            messege.textContent = 'You Have Run Out Of Guesses,You Loose 💔'
            score.textContent = 0
        }
    }

})

playAgain.addEventListener('click', () => {
    body.style.backgroundColor = '#222'
    scoreCount = 20
    number.style.width = '15rem'
    messege.textContent = "Start guessing..."
    score.textContent = scoreCount

    number.textContent = '?'
    userGuess.value = ""
    target = Math.floor(Math.random() * 20) + 1

})
