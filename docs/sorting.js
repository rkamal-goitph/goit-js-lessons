// ================================Sort Method implementation

let numbers = [5, 2, 8, 1, 4];

// Using the sort() method to sort the array in ascending order
numbers.sort(function (a, b) {
  return a - b;
});

console.log(numbers); // Output: [1, 2, 4, 5, 8]

// ================================ Bubble Sort Algorithm under the hood
let numbersForSorting = [5, 2, 8, 1, 4];

// Bubble Sort algorithm using a for loop
for (let i = 0; i < numbersForSorting.length - 1; i++) {
  for (let j = 0; j < numbersForSorting.length - 1 - i; j++) {
    // Compare adjacent elements
    if (numbersForSorting[j] > numbersForSorting[j + 1]) {
      // Swap them if they are in the wrong order
      let temp = numbersForSorting[j];
      numbersForSorting[j] = numbersForSorting[j + 1];
      numbersForSorting[j + 1] = temp;
    }
  }
}

console.log(numbersForSorting); // Output: [1, 2, 4, 5, 8]
