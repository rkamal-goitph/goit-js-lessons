// Example 6 - Arrays and Strings
// Write a script that "unwraps" a string (reverse letter order) and prints it to the console.

const string = 'Welcome to the future';

// 1. Convert the string to array
// 2. Reverse the order of the array using the reverse method
// 3. Convert the reversed array back to a string

const result = string.split('').reverse().join('');
console.log(result);
