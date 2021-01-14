"use strict";

//selecting elements
//cumulative score
const score0E = document.querySelector("#score--0");
const score1E = document.querySelector("#score--1");
//current score
const current0E = document.getElementById("current--0");
const current1E = document.getElementById("current--1");

const diceE = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let currentScore = 0;
//starting conditions
score0E.textContent = 0;
score1E.textContent = 0;
diceE.classList.add("hidden");

//dice roll

btnRoll.addEventListener("click", function () {
  const randomNum = Math.trunc(Math.random() * 6) + 1;
  diceE.classList.remove("hidden");
  diceE.setAttribute("src", `dice-${randomNum}.png`);
  if (randomNum !== 1) {
    currentScore += randomNum;
    current0E.textContent = currentScore;
  } else {
  }
});
