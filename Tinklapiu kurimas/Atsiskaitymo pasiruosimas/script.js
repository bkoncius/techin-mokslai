"use strict";

// 1 uzduotis

function average() {
  let sum = 0;
  let count = 0;
  let averageNumber;

  for (let i = 0; i < 50; i++) {
    if (i % 2 === 0) {
      sum += i;
      count++;

      averageNumber = sum / count;
    }
  }
  console.log(averageNumber);
}

average();

// 2 uzduotis

const words = ["Javascript", "kodas", "kompiuteris", "programa", "duomenys"];
let result = "";

function randomWords(n) {
  for (let i = 0; i < n; i++) {
    result += words[Math.floor(Math.random() * words.length)] + " ";
  }
  return result;
}

console.log(randomWords(3));

// 3 uzduotis

function digitGame() {
  let randomNumber = Math.floor(Math.random() * 10);

  let wannaPlay = prompt("Ar norite spėti skaičių?");
  let answer;

  if (wannaPlay === "Ne") {
    return;
  }

  while (answer !== randomNumber) {
    answer = Number(prompt("Įveskite skaičių"));

    if (answer === randomNumber) {
      console.log("Atspėjote teisingai!");
    } else {
      wannaPlay;
    }
  }
}

digitGame();

// 4 uzduotis

const names = ["Jonas", "Domas", "Tomas", "Rasa", "Gintarė"];

function addKarolis() {
  names.unshift("Karolis");

  console.log(names);
}

addKarolis();

function removeDomas() {
  names.splice(names.indexOf("Domas"), 1);

  console.log(names);
}

removeDomas();

function addCo() {
  const newNames = names.map((x) => x + "&Co");

  console.log(newNames);
}

addCo();

function sortNames() {
  names.sort();

  console.log(names);
}

sortNames();

// 5 uzduotis

const form = document.getElementById("form-one");
const height = form.elements["height"];
const weight = form.elements["weight"];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const compareBMI = weight.value / ((height.value * height.value) / 10000);
  const bmiNode = document.createTextNode(
    "Jūsų KMI yra " + compareBMI.toFixed(2)
  );

  if (height.value < 1) {
    alert("Ūgis negali būti neigiamas");
    return;
  } else if (weight.value < 1) {
    alert("Svoris negali būti negiamas");
    return;
  }

  document.getElementById("kmi").appendChild(bmiNode);
});
