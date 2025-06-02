"use strict";

const gyvenaZuvu = prompt("Kiek žuvų gyvena akvariume?");
const idedamaZuvu = prompt("Kiek žuvų įdedama kiekvieną dieną?");
const praejoDienu = prompt("Kiek dienų praėjo?");

const gyvensZuvu = +gyvenaZuvu + +idedamaZuvu * +praejoDienu;

console.log(
  "Po " + praejoDienu + " dienų akvariume gyvens " + gyvensZuvu + " žuvų."
);
