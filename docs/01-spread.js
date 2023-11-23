/*
╔════════════════════════════════════════╗
║            SPREAD OPERATOR             ║
╚════════════════════════════════════════╝
*/

// Spread Syntax
// Definition: Creates a copy of elements in an array or properties in an object, flattens it and combines it with other elements or properties
// Applications:
// 1. Comparing integer values in an array
// 2. Copying arrays
// 3. Concatenating arrays
// 4. Combining object properties

const temps = [14, -4, 25, 8, 11];

// ====================================Example 1====================================

// The console will have an array,
console.log(temps);
// ❌ This will not work because you are passing the entire array
console.log(Math.max(temps)); // NaN

// The console will have a set of separate numbers
console.log(...temps);
// ✅ Spread the collection of elements as separate arguments
console.log(Math.max(...temps)); // 25

// ====================================Example 2====================================

// This is an exact but independent copy of the temps array
const copyOfTemps = [...temps];
console.log(copyOfTemps); // [14, -4, 25, 8, 11]

// ====================================Example 3====================================

const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];
const allTemps = [...lastWeekTemps, ...currentWeekTemps];
console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// ====================================Example 4====================================

const first = { propA: 5, propB: 10 };
const second = { propC: 15 };
const third = { ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15 }

// ====================================Spread Order====================================

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }
