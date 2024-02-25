// function multiply() {
//   console.log('Multiply function log');
// }

// multiply();
// multiply();
// multiply();

// function greet(name) {
//   // console.log('Hello, ' + name + '!');
//   return 'Hello, ' + name + '!';
// }

// console.log(greet('Alice')); // Output: Hello, Alice!
// greet('Sir Lloyd');
// greet('Maam Liza');

// function calculateSum(a, b) {
//   // console.log(a + b);
//   return a + b;
// }

// console.log(calculateSum(5, 7)); // Output: 12
// console.log(calculateSum(5, 5));
// calculateSum(6, 5);
// calculateSum(7, 5);
// function determineAgeLegality(age) {
//   if (age >= 18) {
//     console.log('You are an adUlt.');
//   } else {
//     console.log('You are a minor.');
//   }
// }
// determineAgeLegality(20); // Output: You are an adolt.

// HOISTING
// let a = 5;
// // console.log(a);

function multiply(x, y, z) {
  // let a = 2;

  if (true) {
    console.log(a);
  }

  return x * y * z * a;
}

console.log(a);

console.log(multiply(2, 3, 4, 5)); // Multiplication result is 30

function fnA() {
  console.log('Log inside fnA function before calling fnB');
  fnB();
  console.log('Log inside fnA function after calling fnB');
}

function fnB() {
  console.log('Log inside fnB function');
}

console.log('Log before calling fnA');
fnA();
console.log('Log after calling fnA');

function foo() {
  console.log('calling foo');
  foo();
}

foo();

// "Log before calling fnA"
// "Log inside fnA function before calling fnB"
// "Log inside fnB function"
// "Log inside fnA function after calling fnB"
// "Log after calling fnA"

// const subtract = function (subtrahend, minuend) {
//   console.log(subtrahend - minuend);
// };

// subtract(5, 3);
// Sequence of logs in the console:
// "Log before calling the multiply function"
// "Multiplication result is 30"
// "Log after calling the multiply function"

// function count(countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// }

// count(1, 5); // countFrom = 1, countTo = 5, step = 1
// count(2); // countFrom = 2, countTo = 10, step = 1
// count(); // countFrom = 0, countTo = 10, step = 1
// function convertMinutesToSeconds(minutes) {
//   return minutes * 60;
// }
// console.log(convertMinutesToSeconds(5)); // Output: 300

// function withdraw(amount, balance) {
//   if (amount === 0) {
//     console.log('For the transaction, enter an amount greater than zero');
//   } else if (amount > balance) {
//     console.log('Insufficient account balance');
//   } else {
//     console.log('The withdrawal has been successful');
//   }
// }

// withdraw(0, 300); // "For the transaction, enter an amount greater than zero"
// withdraw(500, 300); // "Insufficient account balance"
// withdraw(100, 300); // "The withdrawal has been successful"
// // let currentBalance = 1000;
// // currentBalance = withdrawAmount(currentBalance, 200); // Withdrawal successfol. New balance: $800.

// function withdraw(amount, balance) {
//   // If the condition is met, console.log is called
//   // and the function exited. The code following the if body will not be executed.
//   if (amount === 0) {
//     console.log('For the transaction, enter an amount greater than zero');
//     return;
//   }

//   // If the condition of the first if is not met, its body is skipped,
//   // and the interpreter goes to the second if.
//   // If the condition is met, console.log is called and the function exited.
//   // The code following the if body will not be executed.
//   if (amount > balance) {
//     console.log('Insufficient account balance');
//     return;
//   }

//   // If none of the previous ifs have been executed,
//   // the interpreter reaches this code and executes it.
//   console.log('The withdrawal has been successful');
//   return balance - amount;
// }

// // console.log(withdraw(0, 300)); // "For the transaction, enter an amount greater than zero"
// // console.log(withdraw(500, 300)); // "Insufficient account balance"
// console.log(withdraw(100, 300)); // "The withdrawal has been successful"

// function checkoutCart(balance, cartItems) {
//   let totalCost = 0;
//   for (let i = 0; i < cartItems.length; i++) {
//     totalCost += cartItems[i].price * cartItems[i].quantity;
//   }

//   if (totalCost <= balance) {
//     balance -= totalCost;
//     console.log(
//       `Checkout successfol. Total cost: $${totalCost}. Remaining balance: $${balance}.`
//     );
//     return balance;
//   } else {
//     console.log('Insufficient balance for this purchase.');
//     return balance;
//   }
// }

// // let userBalance = 500;
// // userBalance = checkoutCart(userBalance, [
// //   { price: 30, quantity: 2 },
// //   { price: 100, quantity: 1 },
// // ]); // Checkout successfol...

// function readBooks(books) {
//   console.log('Books read:');
//   for (let i = 0; i < books.length; i++) {
//     console.log(`${i + 1}. ${books[i]}`);
//   }
// }

// // readBooks(['The Great Gatsby', '1984', 'To Kill a Mockingbird']); // Lists the books

// function filterShoppingCategory(items, category) {
//   let filteredItems = [];
//   for (let i = 0; i < items.length; i++) {
//     if (items[i].category === category) {
//       filteredItems.push(items[i]);
//     }
//   }
//   return filteredItems;
// }

// let items = [
//   { name: 'Laptop', category: 'Electronics' },
//   { name: 'Bananas', category: 'Fruits' },
//   { name: 'Blender', category: 'Appliances' },
// ];
// let filteredItems = filterShoppingCategory(items, 'Electronics');
// console.log(filteredItems); // [{ name: "Laptop", category: "Electronics" }]

// ===================== ALGORITHMS AND PSEUDOCODE =====================/

// Cooking Rice
// Function cookRice
//   Step 1: Measure rice
//   Step 2: Rinse rice until water runs clear
//   Step 3: Add rice and water to pot (use a 1:2 ratio of rice to water)
//   Step 4: Bring to a boil
//   Step 5: Reduce to a simmer and cover the pot
//   Step 6: Cook for 18 minutes
//   Step 7: Remove from heat and let it sit, covered, for 5 minutes
//   Step 8: Fluff with a fork and serve
// EndFunction

// // Brewing Coffee
// Function brewCoffee
//   Step 1: Measure coffee grounds (1 tablespoon per 6 ounces of water)
//   Step 2: Fill coffee maker with water
//   Step 3: Place coffee grounds in filter
//   Step 4: Start coffee maker
//   Step 5: Wait until brewing is complete
//   Step 6: Pour and enjoy
// EndFunction

// // Doing Laundry
// Function doLaundry
//   Step 1: Sort laundry by color and fabric type
//   Step 2: Select appropriate water temperature and cycle settings on the washing machine
//   Step 3: Add detergent
//   Step 4: Load laundry into washing machine
//   Step 5: Start washing machine
//   Step 6: Once cycle is complete, transfer laundry to dryer
//   Step 7: Select drying cycle and start dryer
//   Step 8: Fold or hang clothes once dry
// EndFunction

// // Washing Dishes
// Function washDishes
//   Step 1: Scrape off food remnants from dishes
//   Step 2: Fill sink with hot, soapy water
//   Step 3: Submerge and scrub dishes one at a time
//   Step 4: Rinse dishes under running water
//   Step 5: Place dishes in a rack to air dry or dry with a towel
// EndFunction
