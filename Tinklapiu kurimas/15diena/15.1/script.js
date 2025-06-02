"use strict";

const pirmadienis = prompt("Kiek pamokų yra pirmadienį?");
const antradienis = prompt("Kiek pamokų yra antradienį?");
const treciadienis = prompt("Kiek pamokų yra trečiadienį?");
const ketvirtadienis = prompt("Kiek pamokų yra ketvirtadienį?");
const penktadienis = prompt("Kiek pamokų yra penktadienį?");

const pamokuSkaicius =
  +pirmadienis + +antradienis + +treciadienis + +ketvirtadienis + +penktadienis;

console.log("Pamokų skaičius: " + pamokuSkaicius);

console.log("Tai sudaro minučių: " + pamokuSkaicius * 45);
