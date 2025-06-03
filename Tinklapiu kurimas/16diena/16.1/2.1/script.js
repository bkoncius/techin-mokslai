"use strict";

const jumpHeight = prompt("Iš kokio aukščio šoka parašiutininkas?");
const parachuteDeployTime = prompt(
  "Per kiek laiko išsiskleidžia jo parašiutas?"
);

const fallTime = Math.sqrt((2 * jumpHeight) / 9.8);

if (parachuteDeployTime < fallTime) {
  console.log("Parašiutas išsiskleis");
} else {
  console.log("Parašiutas neišsikleis");
}
