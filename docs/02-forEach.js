// ================ FOR EACH METHOD
// Definition: This is an array iteration method that is used as a replacement for the for and for...of loops when working with a data collection.

// Application: You want to do something repetitively for each element of an array in the most concise way possible

// Syntax:
// Accepts three arguments but first argument is the only mandatory argument

array.forEach(function callback(element, index, array) {
  // Callback body
});

// =============== EXAMPLES

const numbers = [5, 10, 15, 20, 25];

// Classic for loop
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Index ${i}, value ${numbers[i]}`);
}

// Iterating forEach

// =============== ONE ARGUMENT APPLICATION
numbers.forEach(function (number) {
  console.log(number);
});

// =============== TWO ARGUMENT APPLICATION
numbers.forEach(function (number, index) {
  console.log(`Index ${index}, value ${number}`);
});

[5, 10, 15, 20, 25].forEach(function (number, index) {
  console.log(`Index ${index}, value ${number}`);
});

// =============== THREE ARGUMENT APPLICATION
numbers.forEach(function (number, index, array) {
  console.log(`Index ${index}, value ${number}, array: ${array}`);
});

// =============== ARRAY OF STRINGS
const milkTeaOptions = [
  'Classic Milk Tea',
  'Taro Milk Tea',
  'Honeydew Milk Tea',
  'Thai Milk Tea',
  'Matcha Milk Tea',
];

milkTeaOptions.forEach(function (milkTea, index) {
  console.log(`Index ${index}: ${milkTea}`);
});

// =============== ARRAY OF OBJECTS
const milkTeaOrders = [
  { flavor: 'Classic Milk Tea', sweetness: 'Regular', size: 'Medium' },
  { flavor: 'Taro Milk Tea', sweetness: '50% Sugar', size: 'Large' },
  { flavor: 'Honeydew Milk Tea', sweetness: '75% Sugar', size: 'Small' },
  { flavor: 'Thai Milk Tea', sweetness: '100% Sugar', size: 'Medium' },
  { flavor: 'Matcha Milk Tea', sweetness: 'Regular', size: 'Large' },
];

milkTeaOptions.forEach(function (milkTea, index) {
  console.log(
    `Index ${index}: Flavor: ${milkTea.flavor}, Sweetness: ${milkTea.sweetness}, Size: ${milkTea.size}`
  );
});
