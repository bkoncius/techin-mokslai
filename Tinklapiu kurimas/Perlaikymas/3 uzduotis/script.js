"use strict";

const a = Number(prompt("Įveskite pirmos krašinės ilgį: "));
const b = Number(prompt("Įveskite antros kraštinės ilgį: "));
const c = Number(prompt("Įveskite trečios kraštinės ilgį: "));
let p = (a + b + c) / 2;
let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));

if (a + b > c && a + c > b && b + c > a) {
  console.log("Trikampis galimas."), triangleCalc();
} else console.log("Trikampis negalimas.");

function triangleCalc() {
  console.log("Pusperimetris: " + p);
  console.log("Plotas: " + s);
}
