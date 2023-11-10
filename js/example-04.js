// Example 4 - Math class
// Write a script that prints to the console rounded up/down, etc. values of variable value. Use the methods Math.floor(), Math.ceil() and Math.round(). Check what happens in the console for the values "27.3" and "27.9".

const value1 = 27.3;
const value2 = 27.5;
const value3 = 27.9;

// It always rounds up
// console.log(Math.ceil(value1));
// console.log(Math.ceil(value2));
// console.log(Math.ceil(value3));

// Similar to the mathematics aspect of rounding numbers
// Decimal is between 0-4, it rounds down
// Decimal is between 5-9, it rounds up
// console.log(Math.round(value1));
// console.log(Math.round(value2));
// console.log(Math.round(value3));

// It always rounds down
// console.log(Math.floor(value1));
// console.log(Math.floor(value2));
// console.log(Math.floor(value3));

console.log(Math.round(27.253029));