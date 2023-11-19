// Example 5 - Arrays and Strings
// Write a script that prints to the console all the words of a string except the first and the last one.The resulting string must not start or end whitespace character.The script should work for any line.

const string = 'Welcome to the future';
// 1. Retrieve an array of strings from the string variable and name the array words
const words = string.split(' ');

// 2. Remove the first element from the words array
words.shift();

// 3. Remove the last element from the words array
words.pop();

// 4. Convert the words array to a string to return the substring without the first and last words
const str = words.join(' ');
console.log(str);

// Using the Slice Method
// const string = 'Welcome to the future';
// const words = string.split(' ');
// console.log(words);
// console.log(words.slice(1, 3));
// console.log(words);

// Using the Splice Method
// const string = 'Welcome to the future';
// const words = string.split(' ');
// console.log(words);
// words.splice(0, 1);
// console.log(words);
// words.splice(words.length - 1, 1); // console.log(words.splice(-1,1));
// console.log(words);
