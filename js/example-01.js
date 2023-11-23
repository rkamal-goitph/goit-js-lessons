// Example 1 - Destructuring
// Rewrite the function so that it takes one object of the parameter instead of a set of independent arguments.

function calcBMI(weight, height) {
  const numericWeight = Number(weight.replace(',', '.'));
  const numericHeight = Number(height.replace(',', '.'));
  return Number((numericWeight / numericHeight ** 2).toFixed(1));
}

// It was
// console.log(calcBMI('88,3', '1.75'));
// console.log(calcBMI('68,3', '1.65'));
// console.log(calcBMI('118,3', '1.95'));

// Is expected
console.log(
  calcBMI({
    weight: '88,3',
    height: '1.75',
  })
);
console.log(
  calcBMI({
    weight: '68,3',
    height: '1.65',
  })
);
console.log(
  calcBMI({
    weight: '118,3',
    height: '1.95',
  })
);

// Pseudocode for answers
// 1. Replace the weight and height parameters with a parameter object
// 2. Destructure the parameter object to extract the weight and height
