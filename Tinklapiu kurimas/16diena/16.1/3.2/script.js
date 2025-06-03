"use strict";

const stepCount = prompt("Įveskite žingsnių kiekį iki mokyklos");
let clapCount = 0;
let clickCount = 0;

for (let i = 6; i <= +stepCount; i++) {
  if (i % 10 === 5) {
    clapCount++;
  }
}

for (let i = 0; i <= +stepCount; i++) {
  if (i % 10 === 0) {
    clickCount++;
  }
}

console.log(clapCount);
console.log(clickCount);
