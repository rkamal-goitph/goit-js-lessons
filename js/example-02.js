// Example 2 - Arrays and Strings
// Write a script to calculate the area of a rectangle with sides, whichvalues values are stored in the values variable as a string. Values guaranteed separated by a space.

// 1. Convert the string to an array to retrieve the values of the length and width
const values = '8 11';
const array = values.split(' ');
console.log(array);

// 2. Retrieve the first value and assign this as the width of the rectangle
const width = array[0];
console.log(width);

// 3. Retrieve the last value and assign this as the length of the rectangle
const length = array[1];
console.log(length);

// 4. Convert the string value as a Number for us to apply calculation

const convertedWidth = Number(width);
const convertedLength = Number(length);
console.log(convertedWidth);
console.log(convertedLength);

// 5. Calculate the area = length * width;
const area = convertedLength * convertedWidth;
console.log(area);
