// Example 7 - forEach method

// Make the code refactoring using forEach method and arrow functions.

// function logItems(items) {
//   console.log(items);
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// Expected result
const logItems = items =>
  items.forEach((item, idx) => console.log(`${idx + 1} - ${item}`));
console.log(items);
items.forEach((item, idx, arr) => console.log(`${idx + 1} - ${item}`));
for (let i = 0; i < items.length; i += 1) {
  console.log(`${i + 1} - ${items[i]}`);
}

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
