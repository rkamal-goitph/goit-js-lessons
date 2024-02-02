// I. Definition:
// 1. Asynchronous functions (async/await) is a convenient way to create asynchronous code that looks like synchronous.
// 2. The async/await syntax is based on promises, so it does not block the main program flow.

// II. Syntax:
// 1. To declare an asynchronous arrow function, add the keyword async before the list of parameters.
// 2. Inside, you can use the await operator and put, to the right of it, something what will return a promise.

const fetchFriends = () => {
  const promise = fetch('my-api.com/me');
  console.log(promise);
};

fetchFriends();

const fetchFriendsViaAsync = async () => {
  const promise = await fetch('my-api.com/me');
  console.log(promise);
};

fetchFriendsViaAsync();

// III. Application:
// 1. The await operator can only be used in the body of the async function.

async function exampleAsyncFunction() {
  const result = await someAsyncOperation();
  console.log(result);
}

// 2. The await operator suspends the function until the promise is executed (fulfilled or rejected).

async function exampleAsyncFunction() {
  console.log('Before await');
  const result = await someAsyncOperation();
  console.log('After await');
  console.log(result);
}

// 3. If the promise is fulfilled, the await operator will return its value.

async function exampleAsyncFunction() {
  const result = await Promise.resolve('Fulfilled Value');
  console.log(result); // Output: Fulfilled Value
}

// 4. If the promise is rejected, the await operator will throw an error.

async function exampleAsyncFunction() {
  try {
    const result = await Promise.reject(new Error('Promise Rejected'));
    console.log(result); // This won't be executed
  } catch (error) {
    console.error(error.message); // Output: Promise Rejected
  }
}

// 5. An asynchronous function always returns a promise, so any return value will be its value.

async function exampleAsyncFunction() {
  return 'Returned Value';
}

exampleAsyncFunction().then(result => {
  console.log(result); // Output: Returned Value
});

// 6. If you do not specify a return value, a promise with undefined will be returned.

async function exampleAsyncFunction() {
  // No explicit return value
}

exampleAsyncFunction().then(result => {
  console.log(result); // Output: undefined
});

// IV. Declaration:

// Function declaration
async function foo() {
  // ...
}

// Functional expression
const foo = async function () {
  // ...
};

// Arrow function
const foo = async () => {
  // ...
};

// Object method
const user = {
  async foo() {
    // ...
  },
};

// Class method
class User {
  async foo() {
    // ...
  }
}
