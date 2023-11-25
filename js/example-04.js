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

// ======================== ANSWERS BELOW ========================= //

// In the below example, even if the property keys of the nested stock object property were passed as shoes, skirts, and hats as opposed to repairBots and defenceBots from the sample above. We can observe that the getStockReport still works and is still applicable for these entirely new set of properties for the stock object.

console.log(
  getStockReport({
    companyName: 'Belacci',
    stock: {
      shoes: 20,
      skirts: 10,
      hats: 5,
    },
  })
); // "Belacci has 35 item in stock"

// That flexibility is achieved when we don't immediately destructure our stock object in the function getStockReport parameter declaration such as
// function getStockReport({ companyName, stock })

// The case is different when we immediately destructure as in the case of
// function getStockReport({ companyName, stock: { repairBots, defenceBots } })

// This declaration will strictly require the properties of stock object to be exclusively repairBots and defenceBots
