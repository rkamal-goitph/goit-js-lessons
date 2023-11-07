// Example 10 - The % Operator and String Methods
// Write a script that will convert the value of totalMinutes (number of minutes) to string in hour and minute format HH:MM.

// 70 will show 01:10
// 450 will show 07:30
// 1441 will show 24:01

const totalMinutes = 70;

const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(hours);
console.log(minutes);

const doubleDigitHours = String(hours).padStart(2, 0);
const doubleDigitMinutes = String(minutes).padStart(2, 0);
console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);