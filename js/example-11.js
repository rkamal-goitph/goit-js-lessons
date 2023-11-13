// Example 11 - The for loop
// Write a for loop that prints numbers in ascending order to the browser console from min to max, but only if the number is a multiple of 5.

const max = 100;
const min = 20;

for (let i = 0; i <= 1000; i += 1) {
  if (i % 5 === 0) {
    console.log("%5:", i);
  }
}