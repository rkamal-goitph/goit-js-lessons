// Example 3 - Area of a rectangle
// Write a function getRectArea(dimensions) to calculate the area of a rectangle with sides, the values of which will be passed to the dimensions parameter as a string. Values are guaranteed to be separated by a space.

function getRectArea(dimensions = '') {
  const data = dimensions.split(' '); // ["8", "11"]

  return data[0] * data[1];
}

console.log(getRectArea('8 11'));
