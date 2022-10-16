// Create multiply, division, subtraction function with arrow function/fat arrow
const multi = (num1, num2) => num1 * num2;
const div = (num1, num2) => num1 / num2;
const substract = (num1, num2) => num1 - num2;

console.log(multi(2, 3));

// Create a employee object and display its data in console (for...in).

const employee = {
  name: "Eunice",
  age: "18",
  gender: "female",
};

for (const property in employee) {
  console.log(`${property}: ${employee[property]}`);
}

// Use Array helper functions
// Check if all the property values(firstName) in an array of object is same or not
// array of object
// [{
// firstName: 'alina',
// id: 1,
// age: 14
// }, {
// firstName: 'harry',
// id: 2,
// age: 15
// }, {
// firstName: 'alex',
// id: 3,
// age: 16
// }]
const friends = [
  {
    firstName: "alina",
    id: 1,
    age: 14,
  },
  {
    firstName: "harry",
    id: 2,
    age: 15,
  },
  {
    firstName: "alex",
    id: 3,
    age: 16,
  },
];

const haveFirstName = friends.map((obj) => {
  console.log(obj.firstName);
  return obj;
});

// Get the value of the first element in an array that has value greater than 20

const arr1 = [1, 6, 15, 23, 54, 70];
const findVal = arr1.find((e) => {
  return e > 20;
});
console.log(findVal);

// Get the value of the first element in an array that has value less than 20
const arr2 = [1, 6, 15, 23, 54, 70];
const findVal1 = arr1.find((e) => {
  return e < 20;
});
console.log(findVal1);

// Filter data based on a id(property) in an array of objects: pick any random id value
//using friends array
const result = friends.filter(function (ele) {
  return ele.id == 3;
});
console.log(result);
// Round off all the decimal numbers in an array and sum all the values [9.8, 9.7, 4.5, 3.4]
var arr3 = [9.8, 9.7, 4.5, 3.4];

var sumVal = 0;

for (var i = 0; i < arr3.length; i++) {
  sumVal += arr3[i];
}
console.log(Math.round(sumVal));

// Get all the person name based on age greater than and equal to 18, eligible to vote
// [{
// firstName: 'joe',
// age: 24
// }, {
// firstName: 'alina',
// age: 12
// },
// {
// firstName: 'alex',
// age: 20
// }]

const citizens = [
  {
    firstName: "joe",
    age: 24,
  },
  {
    firstName: "alina",
    age: 12,
  },
  {
    firstName: "alex",
    age: 20,
  },
];
const eligibleVote = citizens.filter(function (ele) {
  return ele.age >= 18;
});
console.log(eligibleVote);

// Sum all the elements of an array [90, 89, 56, 45]
const arr4 = [90, 89, 56, 45];

let sumArr = 0;

for (var i = 0; i < arr4.length; i++) {
  sumArr += arr4[i];
}
console.log(sumArr);

// Check element is odd or even in an array [90, 89, 56, 45]

const numbers = [90, 89, 56, 45];
const evenNum = numbers.filter((num) => num % 2 == 0);
console.log(evenNum);
const oddNum = numbers.filter((num) => num % 2 == 1);
console.log(oddNum);

// Sum of all the salaries and display final sum value
// [{
// salary: 56000,
// },
// {
// salary: 90000
// }]

const salaryAll = [
  {
    salary: 56000,
  },
  {
    salary: 90000,
  },
];

let sumSal = 0;

for (let j = 0; j < salaryAll.length; j++) {
  sumSal += salaryAll[j].salary;
}
console.log(sumSal);

// Concat all array elements ['red', 'pink', 'orange', 'red']: 'redpinkorangered'

const colors = ["red", "pink", "orange", "red"];
let text = colors.join("");
console.log(text);
