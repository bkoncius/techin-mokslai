"use strict";

const sienosIlgis = prompt("Koks sienos ilgis?");
const sienosAukstis = prompt("Koks sienos aukštis?");
const plytosKaina = prompt("Kokia plytos kaina?");

const plytuKiekis = (+sienosIlgis * +sienosAukstis) / 0.02;

const plytosKainuos = +plytuKiekis * +plytosKaina;
const apvalintaPlytuKaina = plytosKainuos.toFixed(2);

console.log("Plytų kiekis: " + plytuKiekis);
console.log("Plytos kainuos: " + apvalintaPlytuKaina + " Lt");
