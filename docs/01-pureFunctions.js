// =================== SIDE EFFECT FUNCTIONS ============= /

// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);
// // The original data - the numbers array - underwent mutation
// console.log(numbers); // [2, 4, 6, 8, 10]

// =================== PURE FUNCTIONS ============= /

const pureMultiply = (array, value) => {
  const newArray = [];

  array.forEach(element => {
    newArray.push(element * value);
  });

  return newArray;
};

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = pureMultiply(numbers, 2);

// There is no mutation in the original data
console.log(numbers); // [1, 2, 3, 4, 5]
// The function returns a new array with modified data
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
