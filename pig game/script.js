"use strict";

// selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");
const diceEl = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
let isGameActive, currentScore, activePlayer, scores;

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

const init = function () {
  scores = [0, 0];
  isGameActive = true;
  currentScore = 0;
  activePlayer = 0;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
  diceEl.classList.add("hidden");
};

//starting consitions
init();

//rolling dice fuctionality
btnRoll.addEventListener("click", function () {
  if (isGameActive) {
    // 1.random roll generate
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2.Display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;
    // 3. check for rolled 1; if true, switch player
    if (dice !== 1) {
      //add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
    if (dice === 1) {
      //switch to other player
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (isGameActive) {
    //1. add current score to active player score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2. check if players score is >= 100
    if (scores[activePlayer] >= 100) {
      isGameActive = false;
      //finish game
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--active");
    }
    if (scores[activePlayer] < 100) {
      switchPlayer();
    }
  }
});

// reinitializes game
btnNew.addEventListener("click", init);
