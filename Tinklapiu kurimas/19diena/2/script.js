"use strict";

let image = document.getElementById("image");

let increase = document.getElementById("increase");

function increaseFn() {
  image.style.height = "600px";
}

increase.onclick = increaseFn;

let decrease = document.getElementById("decrease");

function decreaseFn() {
  image.style.height = "200px";
}

decrease.onclick = decreaseFn;
