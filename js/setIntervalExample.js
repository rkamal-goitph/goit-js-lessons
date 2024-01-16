// Asynchronous setInterval
console.log('Before setInterval');
let count = 0;
let intervalId = setInterval(() => {
  console.log('Interval action', ++count);
  if (count === 5) clearInterval(intervalId);
}, 1000);
console.log('After setInterval');

// Synchronous equivalent
console.log('Before repeating action');
// Imagine repeated actions here
console.log('After repeating action');
