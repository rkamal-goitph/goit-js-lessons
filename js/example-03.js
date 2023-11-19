// Example 3 - Array iteration
// Write a script to iterate over the fruits array with a for loop. For each array element print a string in the format element_number: element_value to the console. Element numbering must start from 1.

const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// 1. Determine the variables for initialization in the for loop
// 2. Determine the exit condition for the for loop
// 3. Determine the post-expression for the for loop
// 4. Print a string in the format element_number: element_value for each array element

// for (let i = 0, num = 1; i < fruits.length; i += 1, num += 1) {
//   // console.log(`Number ${i + 1}`, fruits[i]);
//   console.log(`Number ${num}`, fruits[i]);
// }

for (let i = 0; i < fruits.length; i += 1) {
  console.log(`Number ${i + 1}`, fruits[i]);
  // console.log(`Number ${num}`, fruits[i]);
}
