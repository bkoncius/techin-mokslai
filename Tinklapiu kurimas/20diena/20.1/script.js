"use strict";

document.getElementById("ok").addEventListener("click", header);

function header(e) {
  e.preventDefault();

  let placeHeader = document.createElement("h1");
  let node = document.createTextNode("Pavadinimas");

  placeHeader.appendChild(node);

  let element = document.getElementById("main");
  let child = document.getElementById("p");

  element.insertBefore(placeHeader, child);
}
