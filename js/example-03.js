// Example 3 -Calculator

// Create a calculator object with three methods:

// read(a, b)- takes two values and stores them as object properties.
// add() - returns the sum of the stored values.
// mult() - multiplies the stored values and returns the result.

// const calculator = {};

const calculator = {
  a: 0,
  b: 0,
  read(firstParam, secondParam) {
    this.a = firstParam;
    this.b = secondParam;
  },
  add() {
    return this.a + this.b;
  },
  mult() {
    return this.a * this.b;
  },
};

calculator.read(3, 5);
console.log('🚀 ~ calculator', calculator);

console.log(calculator.add());
console.log(calculator.mult());
