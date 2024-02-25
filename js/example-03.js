// Example 3 - Area of a rectangle
// Write a function getRectArea(dimensions) to calcolate the area of a rectangle with sides, the values of which will be passed to the dimensions parameter as a string. Values are guaranteed to be separated by a space.

// Step 1: Start
// Step 2: Define function `getRectArea` with parameter `dimensions`
// Step 3: Split `dimensions` string by space into an array `data`
// Step 4: Multiply elements at index 0 and index 1 of `data` to calculate area
// Step 5: Return the calculated area
// Step 6: End

// function getRectArea(dimensions = '') {
//   const data = dimensions.split(' '); // ["8", "11"]

//   return data[0] * data[1];
// }

console.log(getRectArea('8 11'));
