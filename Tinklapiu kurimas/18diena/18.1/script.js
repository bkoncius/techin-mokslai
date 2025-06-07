"use strict";

// Pirma uzduotis

const people = [
  "Lebron",
  "Aaliyah",
  "Diamond",
  "Dominique",
  "Aliyah",
  "Jazmin",
  "Darnell",
  "Hawkins",
  "Hayden",
  "Hayes",
  "Haynes",
  "Hays",
  "Head",
  "Heath",
  "Hebert",
  "Henderson",
  "Hendricks",
  "Hendrix",
  "Henry",
  "Hensley",
  "Henson",
  "Herman",
  "Hernandez",
  "Herrera",
  "Herring",
  "Hess",
  "Hester",
  "Hewitt",
  "Hickman",
  "Hicks",
  "Higgins",
  "Hill",
  "Hines",
  "Hinton",
  "Hobbs",
  "Hodge",
  "Hodges",
  "Hoffman",
  "Hogan",
  "Holcomb",
  "Holden",
  "Holder",
  "Holland",
  "Holloway",
  "Holman",
  "Holmes",
  "Holt",
  "Hood",
  "Hooper",
  "Hoover",
  "Hopkins",
  "Hopper",
  "Horn",
  "Horne",
  "Horton",
  "House",
  "Houston",
  "Howard",
  "Howe",
  "Howell",
  "Hubbard",
  "Huber",
  "Hudson",
  "Huff",
  "Waldo",
  "Hughes",
  "Hull",
  "Humphrey",
  "Hunt",
  "Hunter",
  "Hurley",
  "Hurst",
  "Hutchinson",
  "Hyde",
  "Ingram",
  "Irwin",
  "Jackson",
  "Jacobs",
  "Jacobson",
  "James",
  "Jarvis",
  "Jefferson",
  "Jenkins",
  "Jennings",
  "Jensen",
  "Jimenez",
  "Johns",
  "Johnson",
  "Johnston",
  "Jones",
  "Jordan",
  "Joseph",
  "Joyce",
  "Joyner",
  "Juarez",
  "Justice",
  "Kane",
  "Kaufman",
  "Keith",
  "Keller",
  "Kelley",
  "Kelly",
  "Kemp",
  "Kennedy",
  "Kent",
  "Kerr",
  "Key",
  "Kidd",
  "Kim",
  "King",
  "Kinney",
  "Kirby",
  "Kirk",
  "Kirkland",
  "Klein",
  "Kline",
  "Knapp",
  "Knight",
  "Knowles",
  "Knox",
  "Koch",
  "Kramer",
  "Lamb",
  "Lambert",
  "Lancaster",
  "Landry",
  "Lane",
  "Lang",
  "Langley",
  "Lara",
  "Larsen",
  "Larson",
  "Lawrence",
  "Lawson",
  "Le",
  "Leach",
  "Leblanc",
  "Lee",
  "Leon",
  "Leonard",
  "Lester",
  "Levine",
  "Levy",
  "Lewis",
  "Lindsay",
  "Lindsey",
  "Little",
  "Livingston",
  "Lloyd",
  "Logan",
  "Long",
  "Lopez",
  "Lott",
  "Love",
  "Lowe",
  "Lowery",
  "Lucas",
  "Luna",
  "Lynch",
  "Lynn",
  "Lyons",
  "Macdonald",
  "Macias",
  "Mack",
  "Madden",
  "Maddox",
  "Maldonado",
  "Malone",
  "Mann",
  "Manning",
  "Marks",
  "Marquez",
  "Marsh",
  "Marshall",
  "Martin",
  "Martinez",
  "Mason",
  "Massey",
  "Mathews",
  "Mathis",
  "Matthews",
  "Maxwell",
  "May",
  "Mayer",
  "Maynard",
  "Mayo",
  "Mays",
  "Mcbride",
  "Mccall",
  "Mccarthy",
  "Mccarty",
  "Mcclain",
  "Mcclure",
  "Mcconnell",
  "Mccormick",
  "Mccoy",
  "Mccray",
  "Waldo",
  "Mcdaniel",
  "Mcdonald",
  "Mcdowell",
  "Mcfadden",
  "Mcfarland",
  "Mcgee",
  "Mcgowan",
  "Mcguire",
  "Mcintosh",
  "Mcintyre",
  "Mckay",
  "Mckee",
  "Mckenzie",
  "Mckinney",
  "Mcknight",
  "Mclaughlin",
  "Mclean",
  "Mcleod",
  "Mcmahon",
  "Mcmillan",
  "Mcneil",
  "Mcpherson",
  "Meadows",
  "Medina",
  "Mejia",
  "Melendez",
  "Melton",
  "Mendez",
  "Mendoza",
  "Mercado",
  "Mercer",
  "Merrill",
  "Merritt",
  "Meyer",
  "Meyers",
  "Michael",
  "Middleton",
  "Miles",
  "Miller",
  "Mills",
  "Miranda",
  "Mitchell",
  "Molina",
  "Monroe",
  "Lucas",
  "Jake",
  "Scott",
  "Amy",
  "Molly",
  "Hannah",
  "Lucas",
];

let count = 0;

for (let i = 0; i < people.length; i++) {
  if (people[i] === "Waldo") {
    count++;
  }
}

console.log(count);

// Antra uzduotis

let myArray = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

console.log(myArray[2]);

myArray.splice(4, 1, null);

console.log(myArray[4]);

// Trecia uzduotis

const numbers = [1, 5, 10, 9, 4, 1];

function max(x) {
  let maxNum = Math.max(...x);
  console.log(maxNum);
}

max(numbers);

// Ketvirta uzduotis

function sumNumbers(x) {
  return x.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  }, 0);
}

sumNumbers([1, 4, 8]);

// Penkta uzduotis

function allPositive(x) {
  for (let i = 0; i < x.length; i++) {
    if (x[i] < 0) {
      console.log(false);
      return;
    }
  }
  console.log(true);
}

allPositive([1, 2, 3, 4, 5]);
allPositive([1, 2, -3, 4, 5]);
allPositive([0, 0, 1]);
