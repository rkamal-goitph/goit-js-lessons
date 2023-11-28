// =================CALL BACK FUNCTIONS
// Definition: function that is passed as an argument to another function, and the latter calls such function.

function greet(name) {
  return `Welcome ${name}.`;
}

// Calling the greet function and displaying the result in the console
console.log(greet('Mango')); // Welcome, Mango.

// Displaying the greet function in the console without calling it
console.log(greet); // ƒ greet() { return `Welcome ${name}.`; }

// ================HIGHER ORDER FUNCTIONS
// Definition: function that takes other functions as parameters or returns a function as a result.

// Application: Implementing complex tasks with chained function calls

// Callback
function greet(name) {
  console.log(`Welcome ${name}.`);
}

// Higher-order function
function registerGuest(name, callback) {
  console.log(`Registering guest ${name}.`);
  callback(name);
}

registerGuest('Mango', greet);

// Example: (Milk Tea)
// boilWater --> soakTea --> mixMilk

function boilWater() {
  console.log('Boiling water...');
  console.log('Water is boiled.');
  return soakTea();
}

function soakTea() {
  console.log('Soaking tea leaves...');
  console.log('Tea is soaked.');
  return mixMilkTea();
}

function mixMilkTea() {
  console.log('Mixing milk and tea to create milk tea.');
  console.log('Enjoy your milk tea!');
}

boilWater();

// ===============INLINE CALLBACK FUNCTIONS
// Definition: functions that are small and only needs to be passed as an argument which are then declared immediately

// Application: Quick declaration of short callback function

function registerGuest(name, callback) {
  console.log(`Registering guest ${name}.`);
  callback(name);
}

// Passing the greet inline function as a callback
registerGuest('Mango', function greet(name) {
  console.log(`Welcome ${name}.`);
});

// Passing the notify inline function as a callback
registerGuest('Poly', function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes.`);
});

// ================ NESTED CALLBACK FUNCTIONS
// independent function logic nested inside a function declaration

// Application: Higher order functions, yet this approach is not recommended

function processCall(recipient) {
  // Simulating the subscriber’s availability with a random number
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    console.log(
      `The subscriber ${recipient} is not available, please leave a message.`
    );
    // Answering machine activation logic
  } else {
    console.log(`Connecting you to ${recipient}, please wait...`);
    // Call handling logic
  }
}

processCall('Mango');

// ================ SINGLE RESPONSIBILITY PRINCIPLE
// S - stands for Single Responsibility Principle in the SOLID Programming Principles
// "Every piece of code or module in a software program should have just one job or responsibility. It should do one thing and do it well, without trying to do too many things at once."

// Application: You want to create a large program with independent function declarations

function processCall(recipient, onAvailable, onNotAvailable) {
  // Simulating the subscriber’s availability with a random number
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
  }

  onAvailable(recipient);
}

function takeCall(name) {
  console.log(`Connecting you to ${name}, please wait...`);
  // Call handling logic
}

function activateAnsweringMachine(name) {
  console.log(
    `The subscriber ${name} is not available, please leave a message.`
  );
  // Answering machine activation logic
}

function leaveHoloMessage(name) {
  console.log(`The subscriber ${name} is not available, recording a hologram.`);
  // Hologram record logic
}

processCall('Mango', takeCall, activateAnsweringMachine);
processCall('Poly', takeCall, leaveHoloMessage);

// ================ REPETITIVE CALLBACK FUNCTIONS
// Abstraction is hiding implementation details. It helps you think about tasks at a higher (abstract) level. Functions are a good way to create abstractions.

// Application: You want to do something repetitively for each element of an array

for (let i = 0; i < 10; i += 1) {
  console.log(i);
}

function repeatLog(n) {
  for (let i = 0; i < n; i += 1) {
    console.log(i);
  }
}

repeatLog(5);

// ================ GENERIC REPETITIVE CALLBACK FUNCTIONS
// What if you want to do something other than logging numbers? Since “do something” can be thought of as a function, and functions are just values, you can pass an action as an argument.

// Application: You want to do something repetitively for each element of an array

function printValue(value) {
  console.log(value);
}

function prettyPrint(value) {
  console.log('Logging value: ', value);
}

function repeat(n, action) {
  for (let i = 0; i < n; i += 1) {
    action(i);
  }
}

// Passing printValue as a callback
repeat(3, printValue);
// 0
// 1
// 2

// Passing prettyPrint as a callback
repeat(3, prettyPrint);
// Logging value: 0
// Logging value: 1
// Logging value: 2
