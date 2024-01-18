// Change value of isSuccess variable to call resolve or reject
const isSuccess = true;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve('Success! Value passed to resolve function');
      console.log(promise);
    } else {
      reject('Error! Error passed to reject function');
      console.log(promise);
    }
  }, 2000);
});

console.log(promise);
