// Example 6 - Finding the largest element
// Write a function findLargestNumber(numbers) that looks for the largest number in array.

function findLargestNumber(numbers) {
  return Math.max(...numbers);
}

console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83
