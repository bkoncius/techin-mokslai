"use strict";

const reikiaSupakuoti = prompt("Kiek reikia supakuoti puodelių?");

const pilnosDezutesApskaiciavimas = +reikiaSupakuoti / 3;
const pilnosDezutes = Math.trunc(pilnosDezutesApskaiciavimas);
const nesupakuotosDezutes = +reikiaSupakuoti - pilnosDezutes * 3;

console.log("Pilnų dežučių skaičius: " + pilnosDezutes);

console.log("Nesupakuotų puodelių skaičius: " + nesupakuotosDezutes);
