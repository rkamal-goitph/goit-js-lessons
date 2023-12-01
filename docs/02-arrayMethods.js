// ===================== ARRAY ITERATION METHODS ====================== //

array.method(callback[(currentValue, index, array)]);

// ======================= CALLBACK ARGUMENTS ======================== //

array.method((item, idx, arr) => {
  // logic that will be used in each iteration
});

array.method(item => {
  // logic that will be used in each iteration
});

// ====================== MAP METHOD ========================== //

// BEHAVIORS:
// 1. Iterates over the original array element by element.
// 2. Does not change the original array.
// 3. The callback function's result is written to a new array.
// 4. Returns a new array of the same length.

// APPLICATIONS:
// 1. Mutating every elements of an array
// 2. Extracting an array of properties from an array of objects
// 3. Substituting Object.values()

// IMPERATIVE REPRESENTATION:
// 1. Combined for loop and push method for creating a new array

// SYNTAX:
array.map((element, index, array) => {
  // Callback body
});

// EXAMPLE 1

const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];

const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
console.log(planetsInUpperCase); // ['EARTH', 'MARS', 'VENUS', 'JUPITER']

const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
console.log(planetsInLowerCase); // ['earth', 'mars', 'venus', 'jupiter']

// The original array has not changed
console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter']

// EXAMPLE 2

const students = [
  { name: 'Mango', score: 83 },
  { name: 'Poly', score: 59 },
  { name: 'Ajax', score: 37 },
  { name: 'Kiwi', score: 94 },
  { name: 'Houston', score: 64 },
];

const names = students.map(student => student.name);
console.log(names); // ['Mango', 'Poly', 'Ajax', 'Kiwi', 'Houston']

// ====================== FLATMAP METHOD ========================== //

// BEHAVIORS:
// 1. Does not change the original array.
// 2. Iterates over the original array element by element.
// 3. Returns a new array.

// APPLICATIONS:
// 1. Extracting an array of array properties (2D arrays) from an array of objects
// 2. Substituting Object.entries()

// IMPERATIVE REPRESENTATION:
// 1. Combined nested for loop and push method for creating a new array

// EXAMPLE 1

// const students = [
//   { name: "Mango", courses: ["mathematics", "physics"] },
//   { name: "Poly", courses: ["informatics", "mathematics"] },
//   { name: "Kiwi", courses: ["physics", "biology"] },
// ];

// students.map(student => student.courses);
// // [['mathematics', 'physics'], ['informatics', 'mathematics'], ['physics', 'biology']]

// students.flatMap(student => student.courses);
// // ['mathematics', 'physics', 'informatics', 'mathematics', 'physics', 'biology']

// ====================== FILTER METHOD ========================== //

// BEHAVIORS:
// 1. Does not change the original array.
// 2. Iterates over the original array element by element.
// 3. Returns a new array.
// 4. Adds elements to the returned array that satisfy the callback condition.
// 5. If the callback returns true, the element is added to the returned array.
// 6. If the callback returns false, the item is not added to the returned array.
// 7. If none of the elements satisfies the condition, it returns an empty array.

// APPLICATIONS:
// 1. Filtering elements when more than one element from a collection should be selected using a specific criterion.

// IMPERATIVE REPRESENTATION:
// 1. Combined for loop and if condition for creating a new array

// EXAMPLE 1

const values = [51, -3, 27, 21, -68, 42, -37];

const positiveValues = values.filter(value => value >= 0);
console.log(positiveValues); // [51, 27, 21, 42]

const negativeValues = values.filter(value => value < 0);
console.log(negativeValues); // [-3, -68, -37]

const bigValues = values.filter(value => value > 1000);
console.log(bigValues); // []

// The original array has not changed
console.log(values); // [51, -3, 27, 21, -68, 42, -37]

// EXAMPLE 2

const LOW_SCORE = 50;
const HIGH_SCORE = 80;
// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

const best = students.filter(student => student.score >= HIGH_SCORE);
console.log(best); // Array of objects named Mango and Kiwi

const worst = students.filter(student => student.score < LOW_SCORE);
console.log(worst); // Array with one Ajax object

// In a callback function, it is convenient to destructure the properties of an object
const average = students.filter(
  ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
);
console.log(average); // Array of objects named Poly and Houston

// ======================== FIND METHOD =========================== //

// BEHAVIORS:
// 1. Does not change the original array.
// 2. Iterates over the original array element by element.
// 3. Returns the first element that satisfies a condition, that is, when the callback returns true.
// 4. If no element matches, that is, the callback returns false for all elements, the method returns undefined.

// APPLICATIONS:
// 1. Filtering when only one element from a collection should be selected using a specific criterion.

// IMPERATIVE REPRESENTATION:
// 1. Combined for loop and if condition for retrieving a single value

// EXAMPLE

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

colorPickerOptions.find(option => option.label === 'blue'); // { label: 'blue', color: '#2196F3' }
colorPickerOptions.find(option => option.label === 'pink'); // { label: 'pink', color: '#E91E63' }
colorPickerOptions.find(option => option.label === 'white'); // undefined

// ======================== FIND INDEX METHOD =========================== //

// BEHAVIORS:
// 1. Does not change the original array.
// 2. Iterates over the original array element by element.
// 3. Returns the index of the first element that satisfies a condition, that is, when the callback returns true.
// 4. If no element matches, that is, the callback returns false for all elements, the method returns -1.

// APPLICATIONS:
// 1. Modern replacement for the indexOf() method allowing us to search with more complex conditions than just equality

// IMPERATIVE REPRESENTATION:
// 1. Combined for loop and if condition for retrieving a single index

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

colorPickerOptions.findIndex(option => option.label === 'blue'); // 2
colorPickerOptions.findIndex(option => option.label === 'pink'); // 3
colorPickerOptions.findIndex(option => option.label === 'white'); // -1

// ======================== EVERY METHOD =========================== //

// BEHAVIORS:
// 1. Does not change the original array.
// 2. Iterates over the original array element by element.
// 3. Returns true if all array elements satisfy a condition.
// 4. Returns false if at least one array element does not satisfy the condition.
// 5. Array iteration stops if the callback returns false.

// APPLICATIONS:
// 1. Checks if all array elements pass the test provided by the callback.

// IMPERATIVE REPRESENTATION:
// 1. Combined for loop and if condition for returning true or false

// EXAMPLE
// Are all elements greater than or equal to zero? - yes
[1, 2, 3, 4, 5].every(value => value >= 0); // true

// Are all elements greater than or equal to zero? - no
[1, 2, 3, -10, 4, 5].every(value => value >= 0); // false

// ======================== SOME METHOD =========================== //

// BEHAVIORS:
// 1. Does not change the original array.
// 2. Iterates over the original array element by element.
// 3. Returns true if at least one array element satisfies a condition.
// 4. Returns false if no array elements satisfy the condition.
// 5. Array iteration stops if the callback returns true.

// APPLICATIONS:
// 1. Checks if any array element passes the test provided by the callback.

// IMPERATIVE REPRESENTATION:
// 1. Combined for loop and if condition for returning true or false

// EXAMPLE 1
// Is there at least one element greater than or equal to zero? - yes
[1, 2, 3, 4, 5].some(value => value >= 0); // true

// Is there at least one element greater than or equal to zero? - yes
[-7, -20, 3, -10, -14].some(value => value >= 0); // true

// Is there at least one element less than zero? - no
[1, 2, 3, 4, 5].some(value => value < 0); // false

// Is there at least one element less than zero? - yes
[1, 2, 3, -10, 4, 5].some(value => value < 0); // true

// EXAMPLE 2
const fruits = [
  { name: 'apples', amount: 100 },
  { name: 'bananas', amount: 0 },
  { name: 'grapes', amount: 50 },
];

// every returns true only if all fruits are greater than 0
const allAvailable = fruits.every(fruit => fruit.amount > 0); // false

// some returns true if at least one fruit is greater than 0
const anyAvailable = fruits.some(fruits => fruits.amount > 0); // true

// ============================ REDUCE METHOD =========================== //

// BEHAVIORS:
// 1. Does not change the original array.
// 2. Iterates over the original array element by element.
// 3. Returns anything.
// 4. Does anything.

// APPLICATIONS:
// 1. Used to process each array element, one by one, storing the intermediate result as an accumulator.

// IMPERATIVE REPRESENTATION:
// 1. Combined for loop and shorthand mathematical/assignment operator for returning a final calculated value

// SYNTAX
array.reduce(callback, initialValue);

// EXAMPLE 1
const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
  console.log('currentPreviousValue: ', previousValue);
  console.log('currentNumber: ', number);
  return previousValue + number;
}, 0);

console.log('total: ', total); // 32

// EXAMPLE 1 ANALYSIS
// # First, the reduce() method creates an internal accumulator variable and
// # assigns it the value of the initialValue parameter or the first element
// # of the array to iterate over if initialValue is not set.
// previousValue = 0

// # Next, a callback is called for each array element. The current value
// # of the previousValue parameter is what the callback function returned in the last iteration.
// Iteration 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
// Iteration 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
// Iteration 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
// Iteration 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
// Iteration 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32

// # After iterating over the entire array, reduce() returns the accumulator value. Result: 32

// EXAMPLE 2
// const students = [
//   { name: 'Mango', score: 83 },
//   { name: 'Poly', score: 59 },
//   { name: 'Ajax', score: 37 },
//   { name: 'Kiwi', score: 94 },
//   { name: 'Houston', score: 64 },
// ];

// The accumulator name can be arbitrary, it is just a function parameter
const totalScore = students.reduce((total, student) => {
  console.log('currentTotal: ', total);
  console.log('currentStudent: ', student);
  return total + student.score;
}, 0);

const averageScore = totalScore / students.length;

console.log('totalScore: ', totalScore);
console.log('studentsLength: ', students.length);
console.log('averageScore: ', averageScore);

// ============================ SORT METHOD =========================== //

// BEHAVIORS:
// 1. Sorts and modifies the original array.
// 2. Returns the modified array, that is, a reference to the sorted original array.
// 3. Sorts in ascending order by default.
// 4. Sorts by converting the values to a string and comparing their ordinal numbers in the Unicode table.

// APPLICATIONS:
// 1. The sort() method sorts the elements of an array, but unlike other iterating methods, it sorts the original array.

// EXAMPLE 1
const scores = [61, 19, 74, 35, 92, 56];
scores.sort();
console.log(scores); // [19, 35, 56, 61, 74, 92]

// EXAMPLE 2
// const scores = [27, 2, 41, 4, 7, 3, 75];
// scores.sort();
// console.log(scores); // [2, 27, 3, 4, 41, 7, 75]

// EXAMPLE 3
// const students = ['Vika', 'Andrey', 'Oleg', 'Julia', 'Boris', 'Katya'];
// students.sort();
// console.log(students); // ['Andrey', 'Boris', 'Julia', 'Katya', 'Oleg', 'Vika'];

// EXAMPLE 4
const letters = ['b', 'B', 'a', 'A', 'c', 'C'];
letters.sort();
console.log(letters); // ['A', 'B', 'C', 'a', 'b', 'c']

// EXAMPLE 5 RECOMMENDED APPLICATION
// const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = [...scores].sort();

console.log(scores); // [61, 19, 74, 35, 92, 56]
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// =========================== SORT(FALLBACK) METHOD ========================== //

// NUMBERS

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort((a, b) => a - b);
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// const scores = [61, 19, 74, 35, 92, 56];
// const descendingScores = [...scores].sort((a, b) => b - a);
// console.log(descendingScores); // [92, 74, 61, 56, 35, 19]

// STRINGS

// const students = ["Vika", "Andrey", "Oleg", "Julia", "Boris", "Katya"];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // ['Andrey', 'Boris', 'Julia', 'Katya', 'Oleg', 'Vika']

// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log (inReversedOrder); // ['Vika', 'Oleg', 'Katya', 'Julia', 'Boris', 'Andrey']

// OBJECTS

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
// ];

// const inAscendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// const inDescendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );
