// Example 8 - Time Formatting
// Write a function formatTime(minutes) that will translate the value of minutes (number of minutes) to a string in hour and minute format HH:MM.

// Step 1: Start
// Step 2: Define function `formatTime` with parameter `minutes`
// Step 3: Calculate hours by dividing `minutes` by 60 and rounding down to the nearest whole number
// Step 4: Calculate remaining minutes using the modulus operator with 60
// Step 5: Convert `hours` to string and pad with leading zeros to ensure two digits
// Step 6: Convert `minutes` (remainder) to string and pad with leading zeros to ensure two digits
// Step 7: Concatenate `hours` and `minutes` with a colon (:) separator to form HH:MM format
// Step 8: Return the formatted time string
// Step 9: End


const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(hours);
console.log(minutes);

const doubleDigitHours = String(hours).padStart(2, 0);
const doubleDigitMinutes = String(minutes).padStart(2, 0);
console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

// function formatTime(minutes) {
//   const hours = Math.floor(minutes / 60)
//     .toString()
//     .padStart(2, 0);
//   const min = (minutes % 60).toString().padStart(2, 0);

//   return `${hours}:${min}`;
// }

console.log(formatTime(70)); // "01:10"
console.log(formatTime(450)); // "07:30"
console.log(formatTime(1441)); // "24:01"
