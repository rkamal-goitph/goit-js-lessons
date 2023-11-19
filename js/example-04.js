// Example 4 -Arrays and Loops
// Write a script that prints the user's name and phone number to the console. The names and phones variables store strings of names and phone numbers, separated by commas. The sequence number of names and phone numbers in the lines indicates a match.
// The number of names and phone numbers is guaranteed to be the same.

const names = 'Jacob,William,Solomon,Artemis';
const phones = '89001234567,89001112233,890055566377,890055566300';

// 1. Retrieve an array of strings from the names variable
const arrNames = names.split(',');

// 2. Retrieve an array of numbers from the phones variable
const arrPhones = phones.split(',');

// 3. Determine the variables for initialization in the for loop
// 4. Determine the exit condition for the for loop
// 5. Determine the post-expression for the for loop
// 6. Write a script that prints the user's name and phone number to the console.

for (let i = 0; i < arrNames.length, i < arrPhones.length; i += 1) {
  console.log(`Name: ${arrNames[i]}, Phone: ${arrPhones[i]}`);
}
