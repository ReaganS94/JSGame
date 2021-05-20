"use strict";

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let counter = 0;
const changeText = function (message) {
  document.querySelector(".guess").textContent = message;
};
const changeScore = function (currentScore) {
  document.querySelector(".score").textContent = currentScore;
};
changeScore(score);

document.querySelector(".check").addEventListener("click", function () {
  let number = Number(document.querySelector(".inpNum").value);

  if (!number) {
    document.querySelector(
      ".guess"
    ).textContent = `This ain't no number. You think I'm stoopid?`;
  } else if (number === secretNumber) {
    changeText("Winner winner chicken dinner");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#009900";
    counter++;
    document.querySelector(".counter").textContent = counter;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (number !== secretNumber) {
    if (score > 1) {
      changeText(number > secretNumber ? "NEIN! Too high." : "NEIN! Too low.");
      score--;
      changeScore(score);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").textContent = "Start Guessing...";
  changeScore(20);
  document.querySelector(".inpNum").value = "";
});
