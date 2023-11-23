// Exercise 1: Combine Arrays
// Task:
// Write a function that combines two arrays into one using the spread operator.

function combineArrays(arr1, arr2) {
  // Your code here
}

// Test
console.log(combineArrays([1, 2, 3], [4, 5, 6])); // Expected Output: [1, 2, 3, 4, 5, 6]

// Exercise 2: Clone an Object
// Task:
// Create a function that takes an object and returns a clone of it using the spread operator.

function cloneObject(obj) {
  // Your code here
}

// Test
const original = { a: 1, b: 2 };
const cloned = cloneObject(original);
console.log(cloned); // Expected Output: { a: 1, b: 2 }

// Exercise 3: Merge Objects
// Task:
// Write a function that merges two objects into a new object using the spread operator.

function mergeObjects(obj1, obj2) {
  // Your code here
}

// Test
console.log(mergeObjects({ a: 1 }, { b: 2 })); // Expected Output: { a: 1, b: 2 }

// Exercise 4: Extract Certain Elements
// Task:
// Write a function that takes an array and returns a new array with the first and last elements removed using the rest and spread operators.

function removeFirstAndLast(arr) {
  // Your code here
}

// Test
console.log(removeFirstAndLast([1, 2, 3, 4, 5])); // Expected Output: [2, 3, 4]

// Exercise 5: Collect Arguments into an Array
// Task:
// Write a function that collects all passed arguments into an array using the rest operator.

function collectIntoArray(...args) {
  // Your code here
}

// Test
console.log(collectIntoArray(1, 'a', true)); // Expected Output: [1, 'a', true]
