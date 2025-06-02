"use strict";

const automobiliuSkaicius = prompt("Kiek automobilių?");
const iKeltaTelpa = prompt("Kiek į keltą telpą automobilių?");

const kelimoKartuApskaiciavimas = +automobiliuSkaicius / +iKeltaTelpa;
const kelimoKartai = Math.trunc(kelimoKartuApskaiciavimas);

const liksNeperkelta = +automobiliuSkaicius - +iKeltaTelpa * +kelimoKartai;

console.log("Perkels per kartų: " + kelimoKartai);
console.log("Liks neperkelta: " + liksNeperkelta);
