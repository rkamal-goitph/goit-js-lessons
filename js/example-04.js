// Example 4 - Destructuring
// Rewrite the function so that it accepts a parameters object with properties companyName and stock and display a report about the number of goods in the warehouse of any companies.

// Solution
function getStockReport({ companyName, stock }) {
  let total = 0;
  for (const value of Object.values(stock)) {
    total += value;
  }
  return `${companyName} has ${total} items in stock`;
}

console.log(
  getStockReport({
    companyName: 'Cyberdyne Systems',
    stock: {
      repairBots: 150,
      defenceBots: 50,
    },
  })
); // "Cyberdyne Systems has 200 items in stock"

// Pseudocode for answers
// 1. Demonstrate how if we don't destructure the stock object in the function parameter, the object variables can take on flexible values as opposed to the destructured parameter object
