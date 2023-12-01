// ********************************* IMPERATIVE MAP METHOD ******************** //

// EXAMPLE 1

const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
const planetsInUpperCase = [];

for (let i = 0; i < planets.length; i++) {
  planetsInUpperCase.push(planets[i].toUpperCase());
}

console.log(planetsInUpperCase); // ['EARTH', 'MARS', 'VENUS', 'JUPITER']

//  EXAMPLE 2

const names = [];

for (let i = 0; i < students.length; i++) {
  names.push(students[i].name);
}

console.log(names); // ['Mango', 'Poly', 'Ajax', 'Kiwi', 'Houston']

// ************************ IMPERATIVE FLAT MAP METHOD ********************* //

const students = [
  { name: 'Mango', courses: ['mathematics', 'physics'] },
  { name: 'Poly', courses: ['informatics', 'mathematics'] },
  { name: 'Kiwi', courses: ['physics', 'biology'] },
];

const flattenedCourses = [];

for (let i = 0; i < students.length; i++) {
  const courses = students[i].courses;
  for (let j = 0; j < courses.length; j++) {
    flattenedCourses.push(courses[j]);
  }
}

console.log(flattenedCourses);
// ['mathematics', 'physics', 'informatics', 'mathematics', 'physics', 'biology']

// ************************ IMPERATIVE FILTER METHOD ********************* //

// EXAMPLE 1

const values = [51, -3, 27, 21, -68, 42, -37];
const positiveValues = [];

for (let i = 0; i < values.length; i++) {
  if (values[i] >= 0) {
    positiveValues.push(values[i]);
  }
}

console.log(positiveValues); // [51, 27, 21, 42]

const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const studentss = [
  { name: 'Mango', score: 83 },
  { name: 'Poly', score: 59 },
  { name: 'Ajax', score: 37 },
  { name: 'Kiwi', score: 94 },
  { name: 'Houston', score: 64 },
];

const best = [];

for (let i = 0; i < studentss.length; i++) {
  if (studentss[i].score >= HIGH_SCORE) {
    best.push(studentss[i]);
  }
}

console.log(best); // Array of objects named Mango and Kiwi

// ************************ IMPERATIVE FIND METHOD ********************* //

// EXAMPLE 1

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const targetLabel = 'blue';
let foundOption = null;

for (let i = 0; i < colorPickerOptions.length; i++) {
  if (colorPickerOptions[i].label === targetLabel) {
    foundOption = colorPickerOptions[i];
    break; // Exit the loop once the target option is found
  }
}

console.log(foundOption); // { label: 'blue', color: '#2196F3' }

// ************************ IMPERATIVE FIND INDEX METHOD ********************* //

// EXAMPLE 1

const colorPickerOptionss = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const targettLabel = 'blue';
let foundIndex = -1; // Initialize with -1 to indicate not found

for (let i = 0; i < colorPickerOptions.length; i++) {
  if (colorPickerOptionss[i].label === targettLabel) {
    foundIndex = i;
    break; // Exit the loop once the target option is found
  }
}

console.log(foundIndex); // 2

// ************************ IMPERATIVE EVERY METHOD ********************* //

// EXAMPLE 1

const arr = [1, 2, 3, 4, 5];
let result = true;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    result = false;
    break;
  }
}

console.log(result); // true

// ************************ IMPERATIVE REDUCE METHOD ********************* //

// EXAMPLE 1

const arrr = [2, 7, 3, 14, 6];
let total = 0;

for (let i = 0; i < arrr.length; i++) {
  const number = arrr[i];
  console.log('currentPreviousValue: ', total);
  console.log('currentNumber: ', number);
  total += number;
}

console.log(total);

// EXAMPLE 2

const studentts = [
  { name: 'Mango', score: 83 },
  { name: 'Poly', score: 59 },
  { name: 'Ajax', score: 37 },
  { name: 'Kiwi', score: 94 },
  { name: 'Houston', score: 64 },
];

let totalScore = 0;

for (let i = 0; i < studentts.length; i++) {
  const student = studentts[i];
  console.log('currentTotal: ', totalScore);
  console.log('currentStudent: ', student);
  totalScore += student.score;
}

console.log(totalScore);
