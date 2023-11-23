// Example 3 - Array of objects
// Write a function calcTotalPrice(stones, stoneName) that takes an array of objects and a string with the name of the stone. The function calculates and returns the total cost of stones with the same name, price and quantity from the object

const stones = [
  { name: 'Emerald', price: 1300, quantity: 4 },
  { name: 'Diamond', price: 2700, quantity: 3 },
  { name: 'Sapphire', price: 400, quantity: 7 },
  { name: 'Rubble', price: 200, quantity: 2 },
];

// Pseudocode for the answers
// 1. Create the calcTotalPrice function with the corresponding parameters
// 2. Instantiate a variable representing the total cost of the stones namely totalPrice
// 3. Iterate over the objects array
// 4. Add a condition for accessing the stone name provided in the calcTotalPrice function parameter
// 5. Calculate the totalPrice of the specified stone inside the condition
// 6. Return the corresponding totalPrice of the specified stone
const calcTotalPrice = function (stones, stoneName) {
  let totalPrice = 0;

  for (const stone of stones) {
    if (stone.name === stoneName) {
      totalPrice = stone.price * stone.quantity;
    }
  }

  return totalPrice;
};

let total = calcTotalPrice(stones, 'Diamond'); //8100
let total2 = calcTotalPrice(stones, 'Sapphire'); //2800
console.log(total, total2);
