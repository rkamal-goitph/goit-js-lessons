// Example 2 - Arrays and Strings
// Write a script to calculate the area of a rectangle with sides, whichvalues values are stored in the values variable as a string. Values guaranteed separated by a space.

const values = '8 11';
const arr = values.split(' ');
const firstValue = Number(arr[0]);
const lastValue = Number(arr[arr.length - 1]);
const total = firstValue * lastValue;

console.log(total);
