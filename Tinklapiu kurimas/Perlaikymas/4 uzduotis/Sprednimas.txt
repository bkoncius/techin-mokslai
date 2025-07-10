"use strict";

const birthYear = Number(prompt("Įveskite savo gimimo metus"));
const birthMonth = Number(prompt("Įveskite savo gimimo mėnesį"));
const birthDay = Number(prompt("Įveskite savo gimimo dieną"));

function skaiciu_suma(num) {
  let digitArray = [...(num + "")].map((n) => Number(n));
  let sum = 0;
  for (let i = 0; i < digitArray.length; i++) {
    sum += digitArray[i];
  }

  return sum;
}

const yearSum = skaiciu_suma(birthYear);
const monthSum = skaiciu_suma(birthMonth);
const daySum = skaiciu_suma(birthDay);

const totalSum = yearSum + monthSum + daySum;

let finalNumber = skaiciu_suma(totalSum);

console.log("Įvestas:");
console.log("Metai: " + birthYear);
console.log("Mėnuo: " + birthMonth);
console.log("Diena: " + birthDay);

if (finalNumber == 1) {
  console.log(
    "1 - Lyderystės skaičius. Jūs esate iniciatyvus, nerpiklausomas ir kupinas idėjų."
  );
} else if (finalNumber == 2) {
  console.log(
    "2 - Partnerystės skaičius. Jūs vertinate bendradarbiavimą, taiką ir jautrumą."
  );
} else if (finalNumber == 3) {
  console.log(
    "3 - Kūrybiškumo skaičius. Jūs esate išraiškingas, linksmas ir komunikabilus."
  );
} else if (finalNumber == 4) {
  console.log(
    "4 - Stabilumo skai2ius. Jūs atsakingas, tvarkingas ir vertinate struktūrą."
  );
} else if (finalNumber == 5) {
  console.log(
    "5 - Laisvės skaičius. Jūs mėgstate pokyčius, nuotykius ir esate prisitaikantis."
  );
} else if (finalNumber == 6) {
  console.log(
    "6 - Rūpesčio skaičius. Jūs esate Šeimyniškas, atsakingas ir empatiškas."
  );
} else if (finalNumber == 7) {
  console.log(
    "7 - Dvasinio augimo skaičius. Jums būdingas gilus mąstymas, intuicija ir vidinis žinojimas."
  );
} else if (finalNumber == 8) {
  console.log(
    "8 - Materialios sėkmės skaičius. Jūs siekiate tikslų, valdote ir prisiimate atsakomybę."
  );
} else if (finalNumber == 9) {
  console.log(
    "9 - Tarnystės ir užbaigimo skaičius. Jūs dosnus, išmintingas ir linkęs padėti kitiems."
  );
}
