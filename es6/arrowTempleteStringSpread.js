//Template literal or template string

const firstName = "Alice";
const greeting = `Hello, ${firstName}`; // "Hello, Alice!"
console.log(greeting);

const fullName = "atikur rahman";
const message = `I am ${fullName}, learning javascript`;
console.log(message);

let students = {
  name: "atik",
  age: 28,
  favMovie: "shawshank redemption",
};

let about = `My name is: ${students.name} and age is: ${students.age}`;
console.log(about);

//Arrow function

const fiftyFive = () => 95;
console.log(fiftyFive()); // This will print 95

const doMath = (sum1, sum2) => {
  const sum = sum1 + sum2;
  return sum;
};
console.log(doMath(50, 90));

//spread operator

const numbers = [10, 20, 49, 69, 89, 59, 77];
const newNumber = [...numbers, 99];
console.log(numbers);
console.log(newNumber);

const number = [1, 2, 3, 4];
const fruits = ["apple", "banana", "orange", "mango"];

// Combining arrays using spread operator
const combinedArray = [...number, ...fruits];
console.log(combinedArray); // Output: [1, 2, 3, "apple", "banana", "orange","mango"]
