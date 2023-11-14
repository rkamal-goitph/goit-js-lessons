// ----------------------------PRIMITIVE VS. NONPRIMITIVE ASSIGNMENT-------------------------//

let a = 5;
// Assignment by value, one more cell will be created in memory,
// with the value 5 copied
let b = a;
console.log(a); // 5
console.log(b); // 5

// Change the value of a
a = 10;
console.log(a); // 10
// The value of b has not changed since it is a separate copy
console.log(b); // 5

const array = ['Mango'];
// Since a is an array, a reference to an existing array in memory
// is written to b. Now a and b point to the same array.
const referencedArray = a;
console.log(array); // ["Mango"]
console.log(referencedArray); // ["Mango"]

// Change the array by adding another element, using the pointer from a
array.push('Poly');
console.log(array); // ["Mango", "Poly"]

// b has also changed because b, just like a,
// contains a reference to the same space in memory
console.log(referencedArray); // ["Mango", "Poly"]

// The result is repeated
referencedArray.push('Ajax');
console.log(array); // ["Mango", "Poly", "Ajax"]
console.log(referencedArray); // ["Mango", "Poly", "Ajax"]
