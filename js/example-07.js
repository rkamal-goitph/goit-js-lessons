// Example 7 - Sorting an array with a loop
// Write a script to sort an array of strings alphabetically by the first letter of an element.

const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

let numbers = [5, 2, 8, 1, 4];

// Using the sort() method to sort the array in ascending order
numbers.sort(function (a, b) {
  return a - b;
});

console.log(numbers); // Output: [1, 2, 4, 5, 8]
