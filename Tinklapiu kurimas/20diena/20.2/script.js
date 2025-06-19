"use strict";

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
