"use strict";

let count = 0;
let generatedNumber;

function loadNumber() {
  generatedNumber = Math.floor(Math.random() * 11);
}

loadNumber();

document.getElementById("btn").addEventListener("click", check);

function check() {
  event.preventDefault();

  count++;

  let input = document.getElementById("number").value;

  document.getElementById("resultCount").innerHTML =
    count + " guesses were done";

  if (input > generatedNumber) {
    document.getElementById("resultText").innerHTML =
      "The guessed number is bigger";
  } else if (input < generatedNumber) {
    document.getElementById("resultText").innerHTML =
      "The guessed number is lower";
  } else {
    document.getElementById("resultText").innerHTML = "You are correct!";
  }
}
