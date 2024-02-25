// Example 4 - Element logging
// Write a function logItems(items) that takes an array and uses a for loop that for each element of the array will print a message to the console in the format <item number> - <item value>. The numbering of elements shoold start with 1.

// For example, for the first element of the array ['Mango', 'Poly', 'Ajax'] with index 0 will print 1 - Mango and for index 2 will print 3 - Ajax.

// Step 1: Start
// Step 2: Define function `logItems` with parameter `items`
// Step 3: Initialize a for loop that starts from index 0 to the length of `items` array
// For each iteration, print the item number (index + 1) and item value in the format "<index + 1> - <item value>"
// Step 4: End

const logItems = function (items = []) {
  for (let i = 0; i < items.length; i += 1) {
    console.log(`${i + 1}: ${items[i]}`);
  }
};

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
