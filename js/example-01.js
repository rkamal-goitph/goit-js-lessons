// Example 1 - Body mass index
// Write a function calcBMI(weight, height) that calculates and returns the body mass index of a person. To do this, divide the weight in kilograms by square of a person's height in meters.

// The weight and height will be specially passed as strings. Non-integer numbers can be specified as 24.7 or 24.7, i.e. a comma can be used as a decimal separator.

// Body mass index must be rounded to one decimal place;

const bmi = calcBMI('88,3', '1.75');
console.log(bmi); // 28.8