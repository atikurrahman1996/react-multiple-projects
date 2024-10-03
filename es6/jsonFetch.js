// conversion between js and json
//Syntax:
//JSON.stringify(value);
//JSON.stringify(value, replacer);
//JSON.stringify(value, replacer, space);

const user = {
  id: 112,
  firstName: "Atik",
  age: 27,
  favMovies: ["Shashank Redemption", "Thor"],
};
const convertObjToJSON = JSON.stringify(user);
console.log(convertObjToJSON);

const people = {
  name: "John",
  age: 30,
  city: "New York",
  profession: "Engineer",
};
const myPeople = JSON.stringify(people);
console.log(myPeople);

const objArray = ["Atik", "Israt", "John", "Peter", "Sally", "Jane"];
const myJSON = JSON.stringify(objArray);

console.log(objArray);

//Use the JavaScript function JSON.parse() to convert json text into a JavaScript object:

//JSON.parse():

const peoples = [
  { name: "John", age: 30, city: "New York" },
  { name: "John2", age: 35, city: "London" },
  { name: "John3", age: 37, city: "Hong Kong" },
];

// Convert to JSON string and then parse it back to an object (for demonstration)
const jsonString = JSON.stringify(peoples);
const jsonToObj = JSON.parse(jsonString);

console.log(jsonToObj);

// For the cars array (already in JSON string format), you can directly parse it
const cars = '["Ford", "BMW", "Audi", "Fiat"]';
const myArr = JSON.parse(cars);
console.log(myArr);

const jsonToObj2 = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
console.log(json);

//Calling API ->Fetch syntax

fetch("url")
  .then((res) => res.json()) // Parse response as JSON
  .then((data) => console.log(data)) // Log the parsed data
  .catch((error) => console.error("Error:", error)); // Catch and log any errors

// Array add & remove

const products = [
  { name: "laptop", price: 30000, brand: "lenovo" },
  { name: "Desktop", price: 30000, brand: "HP" },
  { name: "PC", price: 50000, brand: "Dell" },
  { name: "Ipad", price: 130000, brand: "MacBook" },
  { name: "Notebook", price: 31000, brand: "Accer" },
];

const addingProduct = { name: "Ipod", price: 40000, brand: "Apple" };
const newProducts = [...products, addingProduct];
console.log(newProducts);

//remove

const remainingProducts = products.filter(
  (product) => product.name !== "laptop"
);
console.log(remainingProducts);
