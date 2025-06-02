"use strict";

const penkiCentai = prompt("Kiek yra monetų po 5 ct?");
const dvidesimtCentu = prompt("Kiek yra monetų po 20 ct?");
const duLitai = prompt("Kiek yra monetų po 2 Lt?");

const isViso = +penkiCentai * 0.05 + +dvidesimtCentu * 0.2 + +duLitai * 2;

console.log("Taupyklėje yra " + isViso + " Lt.");
