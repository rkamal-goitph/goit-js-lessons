// Example 1 - User Input and Branching
// Using the if..else and prompt constructs, write code that will ask: "What is the official name of JavaScript?". If the user enters ECMAScript, then show an alert with the string "Correct!", otherwise - "Do not know? ECMAScript!"

const answer = prompt("What is the official name of JavaScript?");
const rightAnswer = "ecmascript";

if (answer === rightAnswer) {
  alert("Correct!");
} else {
  alert(`Do not know? ${rightAnswer}!`);
};