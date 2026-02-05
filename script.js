const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const sum1 = document.querySelector('.sum1')
const sum2 = document.querySelector('.sum2')

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');

let currentScore
let activePlayer
let playing;
let count = 5
let sumi1 = 0
let sumi2 = 0

  function init () {
  currentScore = 0;
  activePlayer = 0;
  playing = true;
};

init();

function switchPlayer () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  if(activePlayer === 0) {
    activePlayer =1
  } else {
    activePlayer = 0
  }


};

btnRoll.addEventListener('click', function () {

  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.src = `dice-${dice}.png`;

    if (count > 0) {

      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
      count--
      console.log(count);
      
    } else {
        count = 5
      switchPlayer();
    }
  }
});


