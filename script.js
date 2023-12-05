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

// ========================== BIND METHOD ============================= //

// var bakery = {
//   name: 'Sweet Treats',
//   specialItem: 'Cinnamon Rolls',
//   displayStock: () => {
//     console.log(`Today's special at ${this.name}`);
//   },
//   updateDisplay: function (specialItem) {
//     console.log(`Today's special at ${this.name}: ${specialItem}`);
//   },
// };

// var updateDisplay = bakery.displayStock;
// updateDisplay(); // Output: Today's special at undefined

// var anotherBakery = { name: 'Bread & Butter' };
// var updateAnotherBakeryDisplay = bakery.updateDisplay.bind(
//   anotherBakery,
//   'Banana Bread'
// );
// updateAnotherBakeryDisplay(); // Output: Today's special at Bread & Butter: Banana Bread
