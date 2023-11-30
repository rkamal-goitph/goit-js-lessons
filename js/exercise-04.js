// Example 4 - Arrow functions

// Make the code refactoring using arrow functions.

function createProduct(partialProduct, callback) {
  const product = { id: Date.now(), ...partialProduct };
  callback(product);
}

function logProduct(product) {
  console.log(product);
}

function logTotalPrice(product) {
  console.log(product.price * product.quantity);
}

// Steps to Convert:
// 1. Remove the function keyword and function name
// 2. Assign the function to a variable and add the parameters
// 3. Declare the function body after the => symbol

const createProduct = (partialProduct, callback) => {
  const product = { id: Date.now(), ...partialProduct };
  callback(product);
};
const logProduct = product => {
  console.log(product);
};
const logTotalPrice = product => {
  console.log(product.price * product.quantity);
};

createProduct({ name: '🌹', price: 30, quantity: 3 }, logProduct);
createProduct({ name: '🍋', price: 100, quantity: 10 }, logTotalPrice);
