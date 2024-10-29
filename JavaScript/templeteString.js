const a = 10;
const b = 20;
const c = 30;

// normal way
// const sum = "The sum of " + a + " and " + b + " is " + (a + b);
// console.log(sum);

//using template string

const sum = `The sum of ${a} and ${b} is: ${a + b}`;
console.log(sum);
