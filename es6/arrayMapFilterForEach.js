//Map - The map method is used to create a new array with the result of a callback function.
//The callback function takes one argument, the current element, and returns the new value for that element.

//For example, the following code will return an array of each element multiplied by 2:

let myArray = [1, 2, 3, 4, 5];
let multipliedArray = myArray.map((element) => {
  return element * 2;
});
console.log(multipliedArray); // [2, 4, 6, 8, 10]

const yourArray = [2, 3, 4, 5, 6, 7, 8, 9];

const additionArray = yourArray.map((ele) => {
  return ele + 2;
});
console.log(additionArray);

let officersDetails = [
  { id: 101, name: "atik" },
  { id: 102, name: "atik2" },
  { id: 103, name: "atik3" },
  { id: 104, name: "atik4" },
];

let officerIds = officersDetails.map((officer) => {
  return officer.id;
});
console.log(officerIds);

let officerNames = officersDetails.map((officer) => officer.name);
console.log(officerNames);

//The filter method is used to filter an array based on a certain condition.

//EvenNumber

const evenNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const findEvenNum = evenNum.filter((x) => {
  return x % 2 === 0;
});

console.log("The even number is: " + findEvenNum);

//Odd Number

const oddNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const oddNumbers = oddNum.filter((y) => {
  return y % 2 !== 0;
});

console.log("The odd number is " + oddNumbers);

// filter numbers gater than 500
let numbers2 = [100, 200, 300, 400, 500, 600, 700, 800, 1000, 2000, 3000];

let result = numbers2.filter((number) => {
  return number > 500;
});

console.log(result);

//filter with specific characters

const products = [
  { name: "laptop", price: 30000, brand: "lenovo" },
  { name: "Desktop", price: 30000, brand: "HP" },
  { name: "PC", price: 50000, brand: "Dell" },
  { name: "Ipad", price: 130000, brand: "MacBook" },
  { name: "Notebook", price: 31000, brand: "Accer" },
];

const product = products.filter((prod) => prod.name.includes("a"));
console.log(product);

const product2 = products.filter((prod) => prod.brand.includes("e"));
console.log(product2);

// Find a specific officer by id
let officersDetails2 = [
  { id: 101, name: "atik" },
  { id: 102, name: "atik2" },
  { id: 103, name: "atik3" },
  { id: 104, name: "atik4" },
];

let officer = officersDetails2.find((officer) => {
  return officer.id === 102;
});
console.log(officer); // { id: 102, name: "atik2" }

//forEach(): The forEach() method does not return a new array. Instead, it executes the callback function
//once for each element of the original array.
//When to use forEach(): You should use forEach() when you need to perform an action on each element of an
//array, but you do not need to create a new array

// Example of using map()
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers);

// Example of using forEach()
numbers.forEach((number) => console.log(number));

const students = [
  { id: 101, name: "atik" },
  { id: 102, name: "Israt" },
  { id: 103, name: "Jahan" },
  { id: 104, name: "Srity" },
];

students.forEach((student) => {
  console.log(student);
});

//students.forEach((student) => console.log(student));
students.forEach((student) => console.log(student.id));
students.forEach((student) => console.log(student.name));
