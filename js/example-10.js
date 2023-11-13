// Example 10 - The % Operator and String Methods
// Write a script that will convert the value of totalMinutes (number of minutes) to string in hour and minute format HH:MM.

// 70 will show 01:10
// 450 will show 07:30
// 1441 will show 24:01

const totalMinutes = 70;


// GET THE HOUR VALUE
// 1. Convert the totalMinutes to hours
// 2. Retrieve the whole number out of the hours variable

const hours = Math.floor(totalMinutes / 60);
console.log(hours);

// GET THE MINUTES
// 1. Retrieve the remaining values out of the divided whole number in the variable

const minutes = totalMinutes % 60;
console.log(minutes);

// GENERATE THE HH:MM VALUE
// 1. Evaluate the numeric values of hour and minutes to String

const doubleDigitHours = String(hours).padStart(2, 0);
const doubleDigitMinutes = String(minutes).padStart(2, 0);
console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);