// Example 8 - Search for an element
// Write a script to find the smallest number in an array. The code should work for any array of numbers. Use a loop to solve problems.

const numbers = [2, 17, 94, 1, 23, 37];
let min = numbers[0];
let count = 0;

// MATH METHODS APPROACH
// This can be achieved using the Math.min method from Math class
// const numbers = [2, 17, 94, 1, 23, 37];
// let min = Math.min(2, 17, 94, 1, 23, 37);
// console.log(min); // 1

// FOR LOOP ITERATION APPROACH
for (const number of numbers) {
  if (min > number) {
    min = number;
  }
}

for (let i = 1; i < numbers.length; i += 1) {
  if (min > numbers[i]) {
    min = numbers[i];
  }
}

console.log(min); // 1
