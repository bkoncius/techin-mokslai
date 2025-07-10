"use strict";

// 1 uzduotis

function calcSum(n) {
  let sum = 0;

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  console.log(sum);
}

calcSum(20);

// 2 uzduotis

const positives = (array) => array.filter((value) => value > 0);

console.log(positives([1, -3, 5, -3, 0]));

// 3 uzduotis

function positiveSum() {
  let sum = 0;
  let input = Number(prompt("Įveskite skaičių"));

  while (input >= 0) {
    sum += input;
    input = Number(prompt("Įveskite skaičių"));
  }
  console.log(sum);
}

positiveSum();

// 4 uzduotis


