"use strict";

// Pirma užduotis

function celsiusToFahrenheit(temp) {
  const conversion = temp * (9 / 5) + 32;

  console.log(conversion);
}

celsiusToFahrenheit(22);

// Antra užduotis

function compareBMI(markWeight, markHeight, johnWeight, johnHeight) {
  const markBmi = markWeight / (markHeight * markHeight);
  const johnBmi = johnWeight / (johnHeight * johnHeight);

  const markBmiHigher = markBmi > johnBmi;

  console.log(markBmiHigher);
}

compareBMI(70, 1.85, 68, 1.87);

// Trečia užduotis

function calcRectangleArea(width, length) {
  const areaCalculation = width * length;

  console.log(areaCalculation);
}

calcRectangleArea(5, 6);

// Ketvirta užduotis

function findType(input) {
  const type = typeof input;

  console.log(type);
}

findType("Jurgis");

// Penkta užduotis

function remainderOf(x, y) {
  const division = x / y;
  const remainderCalc = x - y * Math.floor(division);

  console.log(remainderCalc);
}

remainderOf(10, 1);
remainderOf(10, 2);
remainderOf(10, 3);
remainderOf(10, 4);
remainderOf(129, 17);

// Šešta užduotis

function callNTimes(times, fn) {
  for (let i = 0; i < times; i++) {
    fn();
  }
}

function hello() {
  console.log("Hello, world!");
}

callNTimes(5, hello);
