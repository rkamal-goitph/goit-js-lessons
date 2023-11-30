// =================ARROW FUNCTIONS
// Definition: Shorter, more concise syntax of declaring functions, which reduces the amount of code, especially when the function is small or used as a callback.

// Syntax:
// function () {} ====== REGULAR FUNCTION DECLARATION AND APPLICATIONS

// Applications:
// 1. Object Oriented Programming approach
const person = {
  name: 'Alice',
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
    console.log(this);
  },
};

person.greet();

// 2. Hoisted Functions - you can use them before they are declared in your code.

hoistedFunction(); // This works
function hoistedFunction() {
  console.log('Hello!');
}

// 3. Named Functions
const result = add(2, 3); // Debugging will show "add" in stack trace
function add(a, b) {
  return a + b;
}

console.log(add);

// () => {} =========== ARROW FUNCTION DECLARATION AND APPLICATIONS

// Applications:
// 1. Functional Programming approach
// Implemented mostly in callback functions

// 2. Non Hoisted Functions
const arrowFunction = () => {
  console.log('Hello from arrowFunction!');
};
arrowFunction();

// 3. Variable Assignment - delivers concise syntax
const double = x => x * 2;

//

// =========== ARROW FUNCTION BEHAVIORS

// 1. The keyword function is not used; instead, you should immediately declare parameters, followed by the => symbol and the function body.
const add = (a, b, c) => {
  return a + b + c;
};

console.log(add(1, 2, 3));

// 2. If there is only one parameter, it can be declared without parentheses.
const add = a => {
  return a + 5;
};

console.log(add(1));

// 3. If there are no parameters, then there must be empty parentheses.
const greet = () => {
  console.log('Hello!');
};

greet();

// 4. Supports both explicit and implicit returns

// =========== EXPLICIT RETURNS

// Utilizes a return statement and function body enclosed in braces

const add = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};

// =========== IMPLICIT RETURNS

// Utilizes no return statement and function body is not enclosed in braces

const addWithReturn = (a, b, c) => a + b + c;

const addWithLog = (a, b, c) => console.log(a, b, c);
addWithLog(1, 2, 3);
addWithReturn(1, 2, 3);

// =========== ARROW FUNCTION CONVERSION
// Steps to Convert:
// 1. Remove the function keyword
// 2. Assign the function to a variable
// 3. Declare the function body after the => symbol

// Before
function classicAdd(a, b, c) {
  return a + b + c;
}

// After
const arrowAdd = (a, b, c) => a + b + c;

console.log(classicAdd(1, 2, 3));
console.log(arrowAdd(1, 2, 3));

// Before
function boilWater() {
  console.log('Boiling water...');
  console.log('Water is boiled.');
  return soakTea();
}

function soakTea() {
  console.log('Soaking tea leaves...');
  console.log('Tea is soaked.');
  return mixMilkTea();
}

function mixMilkTea() {
  console.log('Mixing milk and tea to create milk tea.');
  console.log('Enjoy your milk tea!');
}

boilWater();

// Before
const boilWater = () => {
  console.log('Boiling water...');
  console.log('Water is boiled.');
  return soakTea();
};

const soakTea = () => {
  console.log('Soaking tea leaves...');
  console.log('Tea is soaked.');
  return mixMilkTea();
};

const mixMilkTea = () => {
  console.log('Mixing milk and tea to create milk tea.');
  console.log('Enjoy your milk tea!');
};

boilWater();

// =========== CONVERTING ARROW FUNCTION ARGUMENTS TO ARRAY
// Definition: Arrow functions do not have local variable argument

// function regularFunction() {
//   console.log(arguments); // Access the arguments variable of regularFunction
// }

// const arrowFunction = () => {s
//   console.log(arguments); // Error: 'arguments' is not defined
// };

// regularFunction(1, 2, 3); // Prints the arguments object
// arrowFunction(4, 5, 6); // Throws an error

const add = (...args) => {
  console.log(args);
};

add(1, 2, 3); // [1, 2, 3]

// =========== CALLBACK FUNCTION APPLICATIONS: ANONYMOUS FUNCTIONS
// Anonymous arrow functions are great as callbacks for array iteration methods because of the shorter declaration syntax, especially if you do not need the function body.

const numbers = [5, 10, 15, 20, 25];

// Function declaration
numbers.forEach(function (number, index) {
  console.log(`Index ${index}, value ${number}`);
});

// Anonymous arrow function
numbers.forEach((number, index) => {
  console.log(`Index ${index}, value ${number}`);
});

const milkTeaOptions = [
  'Classic Milk Tea',
  'Taro Milk Tea',
  'Honeydew Milk Tea',
  'Thai Milk Tea',
  'Matcha Milk Tea',
];

milkTeaOptions.forEach((milkTea, index) => {
  console.log(`Index ${index}: ${milkTea}`);
});
