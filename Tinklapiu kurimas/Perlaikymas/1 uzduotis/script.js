"use strict";

const licenceNumber = prompt(
  "Įveskite elektromobilio valstybinį numerį (ABC123)"
);
const parkedTime = prompt("Kiek valandų elektromobilis stovėjo aikštelėje?");
const usedKwh = prompt("Kiek kWh jis sunaudojo per stovėjimą?");
const wasConnected = prompt(
  "Ar buvo prijungtas prie įkrovimo stotelės? (taip arba ne)"
);

const avgKwhUsed = usedKwh / parkedTime;

console.log("Automobilio numeris: " + licenceNumber);
console.log("Stovėjimo trukmė: " + parkedTime + " val.");
console.log("Sunaudota energija: " + usedKwh + " kWh");
console.log("Vidutinis energijos sunaudojimas: " + avgKwhUsed + " kWh/val.");
console.log("Automobilis buvo įkrautas: " + wasConnected);

if (wasConnected === "ne") {
  console.log((1.5 * +parkedTime).toFixed(2) + " €");
} else {
  console.log("0.00 €");
}
