"use strict";

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let counter = 0;
document.querySelector(".score").textContent = score;

document.querySelector(".check").addEventListener("click", function () {
  let number = Number(document.querySelector(".inpNum").value);

  if (!number) {
    document.querySelector(
      ".guess"
    ).textContent = `This ain't no number. You think I'm stoopid?`;
  } else if (number === secretNumber) {
    document.querySelector(".guess").textContent =
      "Winner winner chicken dinner";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#009900";
    counter++;
    document.querySelector(".counter").textContent = counter;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (number > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".guess").textContent = "NEIN! Too high.";
    } else {
      document.querySelector(".guess").textContent = "Ugh. Just... just go.";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#990000";
      document.querySelector(".counter").textContent = 0;
    }
  } else if (number < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".guess").textContent = "NEIN! Too low.";
    } else {
      document.querySelector(".guess").textContent = "Ugh. Just... just go.";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#990000";
      document.querySelector(".counter").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").textContent = "Start Guessing...";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".inpNum").value = "";
});