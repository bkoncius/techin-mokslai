"use strict";

const intervaloPradzia = prompt("Įveskite intervalo pradžią");
const intervaloPabaiga = prompt("Įveskite intervalo pabaigą");
let count = 0;

for (let i = +intervaloPradzia; i <= +intervaloPabaiga; i++) {
  if (i % 6 == 0) {
    count++;
  }
}

console.log(count);
