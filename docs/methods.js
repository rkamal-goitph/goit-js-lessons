// ----------------------------ARRAY METHODS--------------------------//

// Constructive Methods
// Creates a new array

// ----------------------------INDEXOF--------------------------//
const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
console.log(clients.indexOf('Poly')); // 2
console.log(clients.indexOf('Monkong')); // -1

// ----------------------------INCLUDES--------------------------//
const fruit = 'apple';

if (fruit === 'apple' || fruit === 'strawberry') {
  console.log('It is a red fruit!');
}

if (
  fruit === 'apple' ||
  fruit === 'strawberry' ||
  fruit === 'cherry' ||
  fruit === 'cranberries'
) {
  console.log('It is a red fruit!');
}

// Make an array of options
const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
const newFruit = 'cherry';
// Check if the element exists
const hasFruit = redFruits.includes(newFruit);

if (hasFruit) {
  console.log(`${newFruit} is a red fruit!`);
}

// ----------------------------SLICE--------------------------//

const clientsForSlicing = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
console.log(clientsForSlicing.slice(1, 3)); // ["Ajax", "Poly"]
console.log(clientsForSlicing);

const clientsForSlicing2 = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
console.log(clientsForSlicing2.slice()); // ["Mango", Ajax", "Poly", "Kiwi"]
console.log(clientsForSlicing2);

const clientsForSlicing3 = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
console.log(clientsForSlicing3.slice(-2)); // ["Poly", "Kiwi"]
console.log(clientsForSlicing3);

// ----------------------------CONCAT--------------------------//

const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Monkong', 'Singu'];

const allClientsWithOldFirst = oldClients.concat(newClients);
console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

const allClientsWithNewFirst = newClients.concat(oldClients);
console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
console.log(newClients); // ["Monkong", "Singu"]

// Destructive Methods
// Modifies the original array

// ----------------------------PUSH --------------------------//

const numbers = [];

numbers.push(1);
console.log(numbers); // [1]

numbers.push(2);
console.log(numbers); // [1, 2]

numbers.push(3);
console.log(numbers); // [1, 2, 3]

numbers.push(4);
console.log(numbers); // [1, 2, 3, 4]

numbers.push(5);
console.log(numbers); // [1, 2, 3, 4, 5]

// ----------------------------POP--------------------------//

const numbersForPopping = [1, 2, 3, 4, 5];

console.log(numbersForPopping.pop()); //  5
console.log(numbersForPopping); // [1, 2, 3, 4]

console.log(numbersForPopping.pop()); //  4
console.log(numbersForPopping); // [1, 2, 3]

console.log(numbersForPopping.pop()); //  3
console.log(numbersForPopping); // [1, 2]

console.log(numbersForPopping.pop()); //  2
console.log(numbersForPopping); // [1]

console.log(numbersForPopping.pop()); //  1
console.log(numbersForPopping); // []

// ----------------------------SPLICE FOR REMOVAL--------------------------//

const scores = [1, 2, 3, 4, 5];

// Remove three array elements, starting with the first one (index 0)
const deletedScores = scores.splice(0, 3);

// The scores array now contains two elements
console.log(scores); // [4, 5]

// The deletedScores array contains three deleted elements
console.log(deletedScores); // [1, 2, 3]

// ----------------------------SPLICE FOR ADDITION--------------------------//

const colors = ['red', 'green', 'blue'];

colors.splice(2, 0, 'purple');
console.log(colors); // ["red", "green", "purple", "blue"]

// ----------------------------SPLICE FOR REPLACEMENT--------------------------//

const languages = ['C', 'C++', 'Java', 'JavaScript'];

// Replace the element with index 1 with a new one
languages.splice(1, 1, 'Python');
console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// Replace one element (with index 2) with several ones
languages.splice(2, 1, 'C#', 'Swift', 'Go');
console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]
