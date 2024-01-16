// Asynchronous clearTimeout
let timerId = setTimeout(() => {
  console.log("This won't run");
}, 2000);

console.log('Before clearTimeout');
clearTimeout(timerId);
console.log('After clearTimeout');

// Synchronous equivalent
console.log('Action scheduled');
// Imagine canceling the action here
console.log('Action canceled');
