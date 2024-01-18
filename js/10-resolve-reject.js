// Fulfilled promise
new Promise(resolve => resolve('success value')).then(value =>
  console.log(value)
);

Promise.resolve('success value').then(value => console.log(value));

// Rejected promise
new Promise((resolve, reject) => reject('error')).catch(error =>
  console.error(error)
);

Promise.reject('error').catch(error => console.error(error));
