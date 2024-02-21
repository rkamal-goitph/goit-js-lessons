// Example 4 - Element logging
// Write a function logItems(items) that takes an array and uses a for loop that for each element of the array will print a message to the console in the format <item number> - <item value>. The numbering of elements should start with 1.

// For example, for the first element of the array ['Mango', 'Poly', 'Ajax'] with index 0 will print 1 - Mango and for index 2 will print 3 - Ajax.

const logItems = function (items = []) {
  for (let i = 0; i < items.length; i += 1) {
    console.log(`${i + 1}: ${items[i]}`);
  }
};

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
