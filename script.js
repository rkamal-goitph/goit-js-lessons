// function strictGlobalCoffeeFunction() {
//   'use strict';
//   console.log(this);
// }

// strictGlobalCoffeeFunction();

// function globalCoffeeFunction() {
//   console.log(this);
// }

// globalCoffeeFunction();

// function brew() {
//   console.log('Brewing a ' + this.type);
// }

// // Global scope
// window.type = 'Global Tea';
// brew();

// var coffee = {
//   type: 'Espresso',
//   brewCoffee: brew,
// };

// coffee.brewCoffee();

// function mix() {
//   console.log('Mixing ' + this.ingredient);
// }

// // Global scope
// window.ingredient = 'Water';
// mix();

// var milkTea = {
//   ingredient: 'Milk and Tea',
//   mixMilkTea: mix,
// };

// milkTea.mixMilkTea();

// const customer = {
//   firstName: 'Jacob',
//   lastName: 'Mercer',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() is a call of the getFullName method without an object
//   console.log(`Processing request from ${callback()}.`);
// }

// makeMessage(customer.getFullName); // Function call error

// var milkTea = {
//   type: 'Matcha',
//   mix: function () {
//     console.log('Mixing ' + this.type + ' milk tea');
//   },
// };

// function delayedAction(callback) {
//   setTimeout(callback, 1000);
// }

// delayedAction(milkTea.mix);
// // Output after 1 second: Mixing undefined milk tea

// var milkTea = {
//   type: 'Matcha',
//   mix: function () {
//     console.log('Mixing ' + this.type + ' milk tea');
//   },
// };

// function delayedAction(callback) {
//   setTimeout(callback, 1000);
// }

// delayedAction(() => milkTea.mix());
// // Output after 1 second: Mixing Matcha milk tea

// var coffeeShop = {
//   name: 'Java Beans',
//   orders: [],
//   addOrder: coffeeType => {
//     // window.orders = [];
//     // window.name = 'Java Beans';
//     this.orders.push(coffeeType);
//     console.log(`Order added: ${coffeeType} in ${this.name}`);
//   },
// };

// coffeeShop.addOrder('Espresso');

// var dinnerParty = {
//   theme: 'Italian Night',
//   menu: ['Pasta', 'Tiramisu'],
//   printMenu: function () {
//     this.menu.forEach(item => {
//       console.log(`${item} for ${this.theme}`);
//     });
//   },
// };

// dinnerParty.printMenu();

// var teaTimer = {
//   type: 'Green Tea',
//   startTimer: function (minutes) {
//     console.log(`Timer set for ${this.type}, ${minutes} minutes`);
//     setTimeout(() => {
//       console.log(`${this.type} is ready!`);
//     }, minutes * 60000); // Assuming minutes are converted to milliseconds
//   },
// };

// teaTimer.startTimer(3);
// Immediate Output: Timer set for Green Tea, 3 minutes
// Output after 3 minutes: Green Tea is ready!

// var bakery = {
//   name: 'Sweet Treats',
//   displayStock: () => {
//     console.log(`Today's special at ${this.name}`);
//   },
// };

// var updateDisplay = bakery.displayStock;
// updateDisplay(); // Output: Today's special at undefined

// var teaTimer = {
//   type: 'Green Tea',
//   startTimer: function (minutes) {
//     console.log(`Timer set for ${this.type}, ${minutes} minutes`);
//     setTimeout(() => {
//       console.log(`${this.type} is ready!`);
//     }, minutes * 60000); // Assuming minutes are converted to milliseconds
//   },
//   setTimer: function (time) {
//     console.log(`Timer set for ${this.type}, Duration: ${time} minutes`);
//   },
// };

// teaTimer.startTimer(3);
// // Immediate Output: Timer set for Green Tea, 3 minutes
// // Output after 3 minutes: Green Tea is ready!

// var blackTeaTimer = { type: 'Black Tea' };
// // teaTimer.setTimer.call(blackTeaTimer, 5);
// // Output: Timer set for Black Tea, Duration: 5 minutes

// teaTimer.startTimer.call(blackTeaTimer, 5);

// ========================== CALL METHOD ============================= //

// var anotherThemeParty = { theme: 'French Evening' };
// dinnerParty.announceMenu.apply(anotherThemeParty, ['Escargot', 'Coq au Vin']);

// anotherThemeParty.announceMenu('Escargot', 'Coq Au Vin');

// var teaTimer = {
//   type: 'Green Tea',
//   startTimer: function (minutes) {
//     console.log(`Timer set for ${this.type}, ${minutes} minutes`);
//     setTimeout(() => {
//       console.log(`${this.type} is ready!`);
//     }, minutes * 60000); // Assuming minutes are converted to milliseconds
//   },
//   setTimer: function (time) {
//     console.log(`Timer set for ${this.type}, Duration: ${time} minutes`);
//   },
// };

// teaTimer.startTimer(3);
// // Immediate Output: Timer set for Green Tea, 3 minutes
// // Output after 3 minutes: Green Tea is ready!

// var blackTeaTimer = { type: 'Black Tea' };
// teaTimer.setTimer.call(blackTeaTimer, 5);
// // Output: Timer set for Black Tea, Duration: 5 minutes

// teaTimer.startTimer.call(blackTeaTimer, 5);
// blackTeaTimer.setTimer(5);

// ========================== APPLY METHOD ============================= //

// var dinnerParty = {
//   theme: 'Italian Night',
//   menu: ['Pasta', 'Tiramisu'],
//   appetizer: 'Caponata',
//   mainCourse: 'Fetuccine Pesto',
//   printMenu: function () {
//     this.menu.forEach(item => {
//       console.log(`${item} for ${this.theme}`);
//     });
//   },
//   announceMenu: function (appetizer, mainCourse) {
//     console.log(
//       `Menu for ${this.theme}: Appetizer - ${appetizer}, Main Course - ${mainCourse}`
//     );
//   },
// };

// dinnerParty.printMenu();

// var anotherThemeParty = { theme: 'French Evening' };
// dinnerParty.announceMenu.apply(anotherThemeParty, ['Escargot', 'Coq au Vin']);

// dinnerParty.printMenu();

// ========================== BIND METHOD ============================= //

var bakery = {
  name: 'Sweet Treats',
  specialItem: 'Cinnamon Rolls',
  displayStock: function () {
    console.log(`Today's special at ${this.name}`);
  },
  updateDisplay: function (specialItem) {
    console.log(`Today's special at ${this.name}: ${specialItem}`);
  },
};

var updateDisplay = bakery.displayStock;
updateDisplay(); // Output: Today's special at undefined

var anotherBakery = { name: 'Bread & Butter' };
var updateAnotherBakeryDisplay = bakery.updateDisplay.bind(
  anotherBakery,
  'Banana Bread'
);
updateAnotherBakeryDisplay(); // Output: Today's special at Bread & Butter: Banana Bread
