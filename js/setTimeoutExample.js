// Asynchronous setTimeout
console.log('Before setTimeout');
setTimeout(() => {
  console.log('Inside setTimeout');
}, 2000);
console.log('After setTimeout');

// Synchronous equivalent
console.log('Before action');
// Imagine a delay here without setTimeout
console.log('After action');
