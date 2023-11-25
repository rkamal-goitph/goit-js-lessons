/*
╔════════════════════════════════════════╗
║           ARRAY DESTRUCTURING          ║
╚════════════════════════════════════════╝
*/

// Definition: Assigns identifier to array elements as opposed to the usual array indices
// 1. Naming array elements
// 2. Assigning array elements to variables
// 3. Assigning new elements with default values
// 4. Creating a new sub array from an existing array
// 5. Extracting a portion of an array to a variable

// ====================================Example 1====================================

// const rgb = [200, 255, 100];
// const [red, green, blue] = rgb;

// console.log(`R:${red},G:${green},B:${blue}`); // "R:200,G:255,B:100"

// ====================================Example 2====================================

// const rgb = [200, 255, 100];
// let red, green, blue;

// [red, green, blue] = rgb;

// console.log(`R:${red},G:${green},B:${blue}`); // "R:200,G:255,B:10"0

// ====================================Example 3====================================

// const rgb = [200, 100, 255];

// const [red, green, blue, alfa = 0.3] = rgb;

// console.log(`R:${red},G:${green},B:${blue},Alfa:${alfa}`); // "R:200,G:100,B:255,Alfa:0.3"

// ====================================Example 4====================================

// const rgb = [200, 255, 100];

// const [red, ...colors] = rgb;

// console.log(red); // "200"
// console.log(colors); // [255, 100]

// ====================================Example 5====================================

const rgb = [200, 100, 255];

const [, , blue] = rgb;

console.log(`Blue: ${blue}`); // "Blue: 255"
