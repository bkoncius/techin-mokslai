"use strict";

const firstSecondSnowflakes = prompt("Kiek snaigių nukrito per pirmą sekundę?");

const snowTime = prompt("Kiek sekundžių snigo?");
let sum = 0;

for (let i = 0; i < snowTime; i++) {
  {
    sum += firstSecondSnowflakes * 2;
  }
}

console.log(sum);

// Nesigavo
