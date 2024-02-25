// Example 1 - Body mass index
// Write a function calcBMI(weight, height) that calcolates and returns the body mass index of a person. To do this, divide the weight in kilograms by square of a person's height in meters.

// The weight and height will be specially passed as strings. Non-integer numbers can be specified as 24.7 or 24.7, i.e. a comma can be used as a decimal separator.

// Body mass index must be rounded to one decimal place;

// Step 1: Start
// Step 2: Define function `calcBMI` with parameters `weight` and `height`
// Step 3: Replace comma with dot in `weight` and `height` strings and convert to number
// Step 4: Calculate BMI: weight (kg) / (height (m))^2
// Step 5: Round `bmi` to one decimal place and return
// Step 6: End

function calcBMI(weight = '', height = '') {
  const parsedWeight = Number(weight.replace(',', '.'));
  const parsedHeight = Number(height.replace(',', '.'));

  return (parsedWeight / parsedHeight ** 2).toFixed(1);
}

const bmi = calcBMI('88,3', '1.75');
console.log(bmi); // 28.8
