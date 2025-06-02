"use strict";

const ilgPagrindoIlgis = prompt(
  "Koks yra trapecijos ilgesniojo pagrindo ilgis?"
);
const trumpPagrindoIlgis = prompt(
  "Koks yra trapecijos trumpesniojo pagrindo ilgis?"
);
const aukstinesIlgis = prompt("Koks yra aukštinės ilgis?");

const trapecijosPlotas =
  (+ilgPagrindoIlgis * +aukstinesIlgis) / 2 +
  (+trumpPagrindoIlgis * +aukstinesIlgis) / 2;

console.log("Trapecijos plotas: " + trapecijosPlotas);
