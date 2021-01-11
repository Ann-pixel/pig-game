"use strict";

let dice;
let currentScore1;
let currentScore2;
let isHolding = false;

document.querySelector(".btn--roll").addEventListener("click", rollDice);
document.querySelector(".btn--hold").addEventListener("click", function () {
  isHolding = !isHolding;
});

function startGame() {
  document.querySelector(".dice").style();
}

function rollDice() {
  dice = Math.trunc(Math.random() * 6) + 1;
  document.querySelector(".dice").setAttribute("src", `dice-${dice}.png`);
}
// rollDice();
