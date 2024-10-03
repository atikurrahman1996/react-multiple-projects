//array destructuring
let numbers = [10, 20, 30, 40, 50];
let [num1, num2, num3, num4, num5] = numbers;
console.log(numbers);
console.log(num1);
console.log(num2);

// Using spread operator
let [x, y, ...z] = numbers;
console.log(z);

//object destructuring

const user = {
  id: 112,
  firstName: "Atik",
  age: 27,
  favMovies: ["Shashank Redemption", "Thor"],
};

const { firstName } = user;
console.log(firstName);

const movies = user.favMovies;
console.log(movies);

//object destructuring
const students = {
  id: 101,
  fullName: "Atikur Rahman",
  cgpa: 3.72,
  profession: "Engineer",
};

//we can also set default values of an object that does not exist
let { id, fullName, cgpa, profession, country = "Bangladesh" } = students;

console.log(students);
console.log(fullName);
console.log(country);
