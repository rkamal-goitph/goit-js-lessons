const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 2000);
});

promise
  .then(value => {
    console.log(value); // 5
    return value * 2;
  })
  .then(value => {
    console.log(value); // 10
    return value * 3;
  })
  .then(value => {
    console.log(value); // 30
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('Final task');
  });

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // Rejecting the promise with an error message
//     reject('Error: Operation failed');
//   }, 2000);
// });

// promise
//   .then(value => {
//     console.log(value);
//     return value * 2;
//   })
//   .then(value => {
//     console.log(value);
//     return value * 3;
//   })
//   .then(value => {
//     console.log(value);
//   })
//   .catch(error => {
//     console.error(error); // This will log 'Error: Operation failed'
//   })
//   .finally(() => {
//     console.log('Final task');
//   });
