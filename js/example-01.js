// Example 1 - Object Basics
// Write a script that, for the user object, successively:

// 1. adds a mood field with value 'happy'
// 2. replaces the value hobby to 'skydiving'
// 3. replaces premium to false
// 4. prints the contents of the user object in key:value format using Object.keys() and for...of

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

// Pseudocode for the answers
// 1. Add mood property for the user object
user.mood = 'happy';
console.log(user);
// 2. Update the hobby property for the user object
user.hobby = 'skydiving';
console.log(user);
// 3. Update the premium property for the user object
user.premium = false;
console.log(user);
// 4. Extract an array from the keys of the user object properties
const array = Object.keys(user);
console.log(array);
// 4. Iterate over the keys of the user object
for (const key of array) {
  console.log(`${key} - ${user[key]}`);
}
// 5. Print each property of the user object in key: value format
