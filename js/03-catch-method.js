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

promise
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  });
