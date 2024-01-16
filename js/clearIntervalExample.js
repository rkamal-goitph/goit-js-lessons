// Asynchronous clearInterval
console.log('Before setInterval');
let count = 0;
let intervalId = setInterval(() => {
  console.log('Interval action', ++count);
  if (count === 3) clearInterval(intervalId);
}, 1000);
console.log('After setInterval');

// Synchronous equivalent
console.log('Before repeating action');
// Imagine starting and then stopping repeated actions
console.log('After stopping repeating action');
