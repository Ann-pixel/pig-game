"use strict";

//selecting elements
const player0E = document.querySelector(".player--0");
const player1E = document.querySelector(".player--1");
const diceE = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
//cumulative score
const score0E = document.getElementById("score--0");
const score1E = document.getElementById("score--1");
//current score
const current0E = document.getElementById("current--0");
const current1E = document.getElementById("current--1");
let playing, activePlayer, currentScore, scores;

//starting conditions
init();

function init() {
  playing = true; //state of the game.
  activePlayer = 0;
  scores = [0, 0];
  currentScore = 0;

  score0E.textContent = 0;
  score1E.textContent = 0;
  diceE.classList.add("hidden");

  player0E.classList.remove("player--winner");
  player1E.classList.remove("player--winner");
  player0E.classList.add("player--active");
  player1E.classList.remove("player--active");
}
function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0E.classList.toggle("player--active");
  player1E.classList.toggle("player--active");
}
//dice roll

btnRoll.addEventListener("click", function () {
  if (playing) {
    const randomNum = Math.trunc(Math.random() * 6) + 1;
    diceE.classList.remove("hidden");
    diceE.setAttribute("src", `dice-${randomNum}.png`);
    if (randomNum !== 1) {
      currentScore += randomNum;

      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});
btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      diceE.classList.add("hidden");
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);
