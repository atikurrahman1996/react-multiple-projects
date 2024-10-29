// 6 things we must need to know

//1. How to declare Variables

const myName = "Jami";
let season = "rainy";

//2. Conditions: >, <, ===, !==, <=, >=, &&, ||

if (myName === "Jami" || season === "rainy") {
  console.log("Yes, correct!");
} else {
  console.log("You are wrong");
}

if (myName === "Jami" && season === "rainy") {
  console.log("Yes, correct!");
} else if (myName === "Jami") {
  console.log("You should learn React fast");
} else {
  console.log("You are wrong");
}

//3. Array ( index, length, push)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers[0] = 11; // array index start from 0

console.log(numbers);

//4. Loop

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
}

// 5. function

function multiply(num1, num2) {
  const result = num1 * num2;
  return result;
}

const finalResult = multiply(5, 9);

console.log(finalResult);

// 6. Object

const student = {
  name: "Atik",
  age: 28,
  occupation: "engineer",
  hobby: "traveling",
  interest: {
    language: "html",
    style: "css",
    script: "javascript",
  },
  movies: ["avatar", "shashank redumption", "avengers"],
};
console.log(student);
console.log(student.age);
