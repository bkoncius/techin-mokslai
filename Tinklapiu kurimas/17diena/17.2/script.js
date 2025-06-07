"use strict";

// Pirma užduotis

function hoursMinutes(days) {
  const hours = days * 24;
  const minutes = hours * 60;

  return (
    days + " dienos yra " + hours + " valandos, arba " + minutes + " minučių"
  );
}

const result = hoursMinutes(5);
console.log(result);

// Antra užduotis

function mathCalc(x) {
  const y = 16 * Math.pow(x, 4) + 2 * x;

  console.log(y);
}

mathCalc(3);

// Trečia užduotis

function OddEven(x) {
  if (x == 2) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

OddEven(2);

// Ketvirta užduotis

function biggerNumber(x, y) {
  if (x > y) {
    console.log(x + " yra didžiausias skaičius.");
  } else {
    console.log(y + " yra didžiausias skaičius.");
  }
}

biggerNumber(3, 4);

function biggerNumberTernary(x, y) {
  return x > y
    ? console.log(x + " yra didziausias skaicius,")
    : console.log(y + " yra didziausias sakaicius");
}

biggerNumberTernary(5, 8);

// Penkta uzduotis

function gradeSystem(x) {
  if (x <= 29) {
    console.log("failed");
  } else if (x <= 34) {
    console.log(1);
  } else if (x <= 39) {
    console.log(2);
  } else if (x <= 44) {
    console.log(3);
  } else if (x <= 49) {
    console.log(4);
  } else if (x <= 60) {
    console.log(5);
  }
}

gradeSystem(45);

//  Sesta uzduotis

function calcBMI(Weight, Height) {
  const calculation = Weight / (Height * Height);

  console.log(calculation.toFixed(2));
}

calcBMI(70, 1.85);

// Septinta uzduotis

function weather(input) {
  switch (input) {
    case 1:
      console.log("Sauleta");
      break;
    case 2:
      console.log("lietinga");
      break;
    case 3:
      console.log("vejuota");
      break;
    case 4:
      console.log("sniegas");
      break;
  }
}

weather(2);

// Astunta uzduotis

function season(month) {
  switch (month) {
    case 12:
    case 1:
    case 2:
      console.log("Ziema");
      break;
    case 3:
    case 4:
    case 5:
      console.log("Pavasaris");
      break;
    case 6:
    case 7:
    case 8:
      console.log("Vasara");
      break;
    case 9:
    case 10:
    case 11:
      console.log("Ruduo");
      break;
  }
}

season(7);

// Devinta uzduotis

for (let i = 100; i < 1000; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}

// Desimta uzduotis

for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}

// Vienuolikta uzduotis

for (let i = -5; i <= 5; i++) {
  if (i === 0) {
    continue;
  } else {
    console.log(1 / i);
  }
}

// Dvylikta uzduotis

let sum = 0;

for (let i = 1; i <= 5; i++) {
  sum += i;
}

console.log(sum);
