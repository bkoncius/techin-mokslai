"use strict";

const greitis = prompt("Koks automobilio greitis?");

const pravaziuosPer = +greitis * 0.264;
const rounded = pravaziuosPer.toFixed(2);

console.log("Automobilis tunelį pravažiuos per " + rounded + " s");
