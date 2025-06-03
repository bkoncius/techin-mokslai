"use strict";

const firstGrade = prompt("Pirmas pažymys");
const secondGrade = prompt("Antras pažymys");
const thirdGrade = prompt("Trečias pažymys");
const fourthGrade = prompt("Ketvirtas pažymys");
const fifthGrade = prompt("Penktas pažymys");

const averageGrade =
  (+firstGrade + +secondGrade + +thirdGrade + +fourthGrade + +fifthGrade) / 5;

if (averageGrade >= 7 && averageGrade <= 9) {
  console.log("Petriukas gaus du saldainius");
} else if (averageGrade > 9) {
  console.log("Petriukas gaus tris saldainius");
} else {
  console.log("Petriukas gaus vieną saldainį");
}
