"use strict";

function calculate(num1, num2, operation) {
  try {
    if (operation === "/" && num2 === 0) {
      throw new Error("Cannot divide by zero");
    }

    if (
      operation !== "+" &&
      operation !== "-" &&
      operation !== "/" &&
      operation !== "*"
    ) {
      throw new Error("Invalid operation");
    }

    let calculation;

    if (operation === "+") {
      calculation = num1 + num2;
    } else if (operation === "-") {
      calculation = num1 - num2;
    } else if (operation === "*") {
      calculation = num1 * num2;
    } else if (operation === "/") {
      calculation = num1 / num2;
    }

    console.log(calculation);
  } catch (error) {
    console.error(error);
  }
}

console.log(calculate(10, 2, "+"));
console.log(calculate(10, 2, "/"));
console.log(calculate(10, 0, "/"));
console.log(calculate(10, 2, "&"));
