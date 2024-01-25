// Change value of isSuccess variable to call resolve or reject
const isSuccess = true;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve('Success! Value passed to resolve function');
    } else {
      reject('Error! Error passed to reject function');
    }
  }, 2000);
});

// Will run first
console.log('Before promise.then()');

// Registering promise callbacks
promise.then(
  function onResolvePromise(value) {
    console.log('onResolve call inside promise.then()');
    console.log(value); // "Success! Value passed to resolve function"
  },
  function onRejectPromise(error) {
    console.log('onReject call inside promise.then()');
    console.log(error); // "Error! Error passed to reject function"
  }
);
