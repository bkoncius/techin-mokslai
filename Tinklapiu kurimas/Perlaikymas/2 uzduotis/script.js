"use strict";

let numberA = Number(prompt("Įveskite pirmą sveiką skaičių:"));
const numberB = Number(prompt("Įveskite antrą sveiką skaičių:"));

while (numberA <= numberB) {
  if (numberA % 3 === 0) {
    console.log(numberA + " - dalijasi iš 3, kvadratas: " + numberA * numberA);
  } else if (numberA % 2 === 0) {
    console.log(numberA + " - porinis, pusė: " + numberA / 2);
  } else console.log(numberA + " - neatitinka sąlygų");

  numberA++;
}

while (numberA >= numberB) {
  if (numberA % 3 === 0) {
    console.log(numberA + " - dalijasi iš 3, kvadratas: " + numberA * numberA);
  } else if (numberA % 2 === 0) {
    console.log(numberA + " - porinis, pusė: " + numberA / 2);
  } else console.log(numberA + " - neatitinka sąlygų");

  numberA--;
}
