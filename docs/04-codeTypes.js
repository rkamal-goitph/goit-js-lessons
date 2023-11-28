// =================IMPERATIVE PROGRAMMING
// Definition: Describes computation as a set sequence of statements that change a program state. It is a description of how something is done.

// Applications: JavaScript

// =================DECLARATIVE PROGRAMMING
// Definition: Describes what you want as a result, not how to achieve it. The order of execution and the method of achievement are not important.

// Applications: HTML & CSS

// =================DECLARATIVE JAVASCRIPT
// Definition: JavaScript provides built in descriptive array methods

// Imperative approach
const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = [];

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > 3) {
    filteredNumbers.push(numbers[i]);
  }
}

console.log(filteredNumbers); // [4, 5]

// Declarative approach
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => value > 3);
// console.log(filteredNumbers); // [4, 5]
