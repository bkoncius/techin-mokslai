"use strict";

let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");

document.getElementById("button").addEventListener("click", calculation);

function calculation() {
  event.preventDefault();

  let sum = +firstNumber.value + +secondNumber.value;
  document.getElementById("sum").innerHTML = sum;
}
