// Example 8 - if...else and logical operators

// Write a script that will output a string to the browser console depending on hours variable values.

// If the value of the variable hours:
// 1. less than 17, output the string "Pending"
// 2. greater than or equal to 17 and less than or equal to 24, output the string "Expires"
// 3. greater than 24 , output the string "Overdue"

const hours = 24;

if (hours < 17) {
  console.log('Pending')
} else if (hours >= 17 && hours <= 24) {
  console.log('Expires')
} else {
  console.log('Overdue')
}