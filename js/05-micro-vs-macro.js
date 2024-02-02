/*
Macro tasks and Microtasks
ScriptQueue:
PromiseJobs:
*/

// I. Definition of Microtasks vs. Macrotasks

// Microtasks:

// 1. Imagine you have a to-do list with some urgent tasks.
// 2. Microtasks are like small, high-priority tasks that you want to finish quickly.
// 3. In JavaScript, microtasks are executed right after the current script or task is finished.
// 4. Promises use microtasks to execute their callbacks. So, when a promise resolves, its associated callback becomes a microtask.

// Macrotasks:

// 5. Now, think of your calendar where you've scheduled bigger tasks for specific times.
// 6. Macrotasks are like those bigger, scheduled tasks with a lower priority.
// 7. In JavaScript, macrotasks are usually scheduled by the browser or Node.js and are placed in the event loop.
// 8. setTimeout and DOM events (like clicks or user inputs) are examples of macrotasks.

// II. Rules for Microtasks and Macrotasks

// Synchronous operations are executed first:
// "1"
// "3"
// "5"

// Asynchronous operations are scheduled to be executed later:
// A macro task (timeout) with "2"
// A microtask (Promise resolution) with "4"

console.log('1'); //synchronous operation 1

setTimeout(() => console.log('2'), 0); //asynchronous operation, macro task, 5

const promise = new Promise(res => {
  console.log('3'); //synchronous operation 2
  res('4');
});

promise.then(data => console.log(data)); //asynchronous operation, microtask, 4

console.log('5'); //synchronous operation 3
