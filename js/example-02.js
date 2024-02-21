// Example 2 - Smaller of numbers
// Write a function min(a,b) that returns the smaller of the numbers a and b.

const min = function (a, b) {
  if (a < b) return a;
  else return b;

  // return a < b ? a : b

  // return Math.min(a, b)
};

console.log(min(2, 5)); // 2
console.log(min(3, -1)); // -1
console.log(min(1, 1)); // 1
