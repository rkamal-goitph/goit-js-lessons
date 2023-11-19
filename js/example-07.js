// Example 7 - Sorting an array with a loop
// Write a script to sort an array of strings alphabetically by the first letter of an element.

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

// let numbers = [5, 2, 8, 1, 4];

// Using the sort() method to sort the array in ascending order
// numbers.sort(function (a, b) {
//   return a - b;
// });

// console.log(numbers); // Output: [1, 2, 4, 5, 8]

// 1. Create an outer for loop to represent the iteration of complete round of comparisons to be done in all elements
// 2. Create an inner for loop to represent the count of iteration it takes to move the current item to the right most side
//    Bubble sort aims to move the greater value to the right most side
// 3. Assign value of the current element to variable left and succeeding element to variable right
// 4. If left is less than right, swap their values
// 5. Create a state variable to track whether any swaps was made during the comparison
//    As long as swaps happen, it means array is still not sorted
// 6. Add a condition to handle the case where no swaps was made, before completing the max number of passes
//    Then it means the array is already sorted

const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

for (let i = 1; i < langs.length; i += 1) {
  let wasChanged = false;

  for (let j = 0; j < langs.length - i; j += 1) {
    const left = langs[j]; // langs[0] -> "python"
    const right = langs[j + 1]; // langs[1] -> "javascript"

    if (left[0] > right[0]) {
      wasChanged = true;
      langs[j] = right;
      langs[j + 1] = left;
    }
  }

  if (!wasChanged) break;
}

console.log(langs);
