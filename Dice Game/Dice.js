'use strict'
const player0El=document.querySelector('.player--0')
const player1El=document.querySelector('.player--1')

const score0=document.getElementById('score--0')
const score1=document.getElementById('score--1') 
const diceEl=document.querySelector('.dice')
const p0Current=document.querySelector('#current--0')
const p1Current=document.getElementById('current--1')
const btnNew=document.querySelector('.btn--new')
const btnRoll=document.querySelector('.btn--roll')
const btnHold=document.querySelector('.btn--hold')

let scores,currentScore,activePlayer,playing

function init(){
     scores = [0,0]
     currentScore = 0
     activePlayer=0
    diceEl.classList.add('hidden')
     playing = true

    score0.textContent=0
    score1.textContent=0
    p0Current.textContent=0
    p1Current.textContent=0
    player0El.classList.remove('player--winner')
    player1El.classList.remove('player--winner')
    player0El.classList.add('player--active')
    player1El.classList.remove('player--active')
}

function switchPlayer(){
    document.getElementById(`current--${activePlayer}`).textContent=0
        activePlayer = activePlayer===0 ? 1: 0;
        currentScore=0
        player0El.classList.toggle('player--active')
        player1El.classList.toggle('player--active')
}

init()

btnRoll.addEventListener('click',()=>{
   if(playing){
    const dice = Math.trunc(Math.random()*6)+1

    diceEl.classList.remove('hidden')
    diceEl.src = `dice-${dice}.png`;
    

    if (dice!==1){
        currentScore+=dice
        document.getElementById(`current--${activePlayer}`).textContent=currentScore
    }
    else{
        switchPlayer()
    }
   }
})

btnHold.addEventListener('click',()=>{
    if(playing){
   scores[activePlayer] += currentScore
   document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer]
    
   if (scores[activePlayer]>=20){
    playing=false

    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    diceEl.classList.add('hidden')

   }
   else{
    switchPlayer()

   }
} 
})

btnNew.addEventListener('click',init)