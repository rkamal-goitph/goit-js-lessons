/*
╔════════════════════════════════════════╗
║              REST OPERATOR             ║
╚════════════════════════════════════════╝
*/

// Rest Syntax
// Definition: Allows multiple arguments to be passed in a function call
// The parameter name can be arbitrary. Most often it is called args, restArgs or otherArgs, short for arguments.
// Applications:
// 1. Functions that can take unlimited arguments
// 2. Collecting function arguments into an array

// ====================================Example 1====================================

function multiply(...args) {
  console.log(args); // array of all arguments
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);

// ====================================Example 2====================================

function multiply(firstNumber, secondNumber, ...otherArgs) {
  console.log(firstNumber); // First argument value
  console.log(secondNumber); // Second argument value
  console.log(otherArgs); // Array of other arguments
}

console.log(multiply(1, 2));
console.log(multiply(1, 2, 3));
console.log(multiply(1, 2, 3, 4));
