"use strict";

// Pirma uzduotis

function product(numbers) {
  const calc = numbers.reduce(function (previousValue, currentValue) {
    return previousValue * currentValue;
  }, 1);

  console.log(calc);
}

product([2, 4, 6]); // 48
product([-10, 10]); //-100

// Antra uzduotis

function anyPositive(x) {
  for (let i = 0; i < x.length; i++) {
    if (x[i] > 0) {
      console.log(true);
      return;
    }
  }
  console.log(false);
}

anyPositive([1, 2, 3, 4, 5]); // true
anyPositive([1, 2, -3, 4, 5]); // true
anyPositive([0, 0, 1]); // true
anyPositive([-10, -10, -10]); // false
anyPositive([-10, -10, 1]); // true

// Trecia uzduotis

function positives(x) {
  let positiveNums = x.filter(function (num) {
    return num > 0;
  });
  console.log(positiveNums);
}

positives([1, -3, 5, -3, 0]); // [1, 5]
positives([1, 2, 3]); // [1, 2, 3]
positives([-1, -2, -3]); // []

// Ketvirta uzduotis

function mean(x) {
  let sum = 0;

  for (let i = 0; i < x.length; i++) {
    sum += x[i];
  }

  let meanCalc = sum / x.length;
  console.log(meanCalc);
}

mean([30, 10, 20]); // 20)
mean([-10, 10]); // 0

// Penkta uzduotis

function evens(x) {
  let evenNums = x.filter(function (num) {
    return num % 2 === 0;
  });
  console.log(evenNums);
}

evens([1, 2, 4, 3, 8]); // [2, 4, 8]

// Sesta uzduotis

function odds(x) {
  let oddNums = x.filter(function (num) {
    return num % 2 !== 0;
  });
  console.log(oddNums);
}

odds([1, 2, 4, 3, 8]); // [1, 3]

// Septinta uzduotis

function integers(x) {
  let integers = x.filter(function (num) {
    return Number.isInteger(num);
  });
  console.log(integers);
}

integers([3.14, 2.4, 7, 8.1, 2]); // [7, 2]

// Astunta uzduotis

function countEvens(x) {
  let evenNums = x.filter(function (num) {
    return num % 2 === 0;
  });

  console.log(evenNums.length);
}

countEvens([1, 2, 3, 4, 5]); // 2
countEvens([10, 10, 10]); // 3
countEvens([1, 1, 1, 2]); // 2

// Devinta uzduotis

function countLessThan(array, threshold) {
  let count = array.filter(function (num) {
    return num < threshold;
  });

  console.log(count.length);
}

countLessThan([1, 2, 3, 4, 5], 2); // 1
countLessThan([1, 2, 3, 4, 5], 17); // 5
countLessThan([1, 2, 1, 2, 3, 4, 1, 2, 1], 1); // 0
countLessThan([10, 10, 10, -10, 15, 7], 10); // 2

// Desimta uzduotis

function squareDance(x) {
  let squareNumbers = x.map(callbackFn);

  function callbackFn(value, index, array) {
    return Math.pow(value, 2);
  }
  console.log(squareNumbers);
}

squareDance([1, 2, 3]); // [1, 4, 9]

// Vienuolikta uzduotis

function glueArrays(firstArr, secondArr) {
  console.log(firstArr.concat(secondArr));
}

glueArrays([1, 2, 3], [4, 5, 6]); // [1, 2, 3, 4, 5, 6]
glueArrays([-10, undefined], [true, "waffles"]); // [-10, undefined,
glueArrays([], []); // []
glueArrays([20, 104], []); // [20, 104]
glueArrays([], ["hello", "world"]); // ['hello', 'world']

// Dvylikta uzduotis

function countValue(firstInput, secondInput) {
  let count = firstInput.filter(function (num) {
    return num === secondInput;
  });

  console.log(count.length);
}

countValue([1, 2, 3, 4, 5], 2); // 1
countValue([1, 2, 3, 4, 5], 17); // 0
countValue([1, 2, 1, 2, 3, 4, 1, 2, 1], 1); // 4
countValue([10, 10, 10, -10], 10); // 3

// Trylikta uzduotis

function findInHaystack(haystack, needle) {
  let search = haystack.find(function (num) {
    return num === needle;
  });
  console.log(!!search);
}

Example: findInHaystack([1, 2, 30, -10], 480); // false
findInHaystack([1, 2, 30, -10], 30); // true
findInHaystack(["waffle", "giraffe", "banana"], "giraffe"); // true
findInHaystack(["waffle", "giraffe", "banana"], "lemons"); // false

// Keturiolikta uzduotis

function firstIndexOf(array, value) {
  let index = array.indexOf(value);
  console.log(index);
}

firstIndexOf([10, 20, 30, 20], 20); // 1
firstIndexOf([10, 20, 30, 20], 17); //-1
//  firstIndexOf(['giraffe', "giraffe', 'banana'], 'giraffe');
//  firstIndexOf(['giraffe', "giraffe', 'banana'], 'banana'); // 2
