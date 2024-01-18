const makePromise = (text, delay) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(text), delay);
  });
};

const promiseA = makePromise('promiseA value', 1000);
const promiseB = makePromise('promiseB value', 3000);

Promise.all([promiseA, promiseB])
  .then(value => console.log(value)) //["promiseA value", "promiseB value"]
  .catch(error => console.log(error));
