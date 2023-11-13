// Example 8 - Logical operators
// What will be the result of the expressions?

console.log(true && 3); // 3

console.log(false && 3); // false

console.log(true && 4 && 'kiwi'); // kiwi

console.log(true && 0 && 'kiwi'); // 0

console.log(true || 3); // true

console.log(true || 3 || 4); // true

console.log(true || false || 7); // true

console.log(null || 2 || undefined); // 2

console.log((1 && null && 2) > 0); // false
//  1 && null && 2 returns null
// null > 0 returns false

console.log(null || (2 && 3) || 4); // 3
// (2 && 3) returns 3
// null || 3 | 4 returns 3