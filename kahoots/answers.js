// QUESTION 3
// Logger must be passed as a function and not a function call
// logger(5) is a function call which returns undefined;
// logger is the actual reference to the function declaration

function foo(callback) {
  callback(10);
}

function logger(value) {
  console.log(value);
}

foo(logger); // Pass logger as a callback function without invoking it
