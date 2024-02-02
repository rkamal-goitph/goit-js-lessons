function getStone(stoneName) {
  const stones = {
    Emerald: {
      price: 1300,
      quantity: 4,
    },
    Diamond: {
      price: 2700,
      quantity: 3,
    },
    Sapphire: {
      price: 400,
      quantity: 7,
    },
    Rubble: {
      price: 200,
      quantity: 2,
    },
  };

  //   return Promise.resolve(stones[stoneName]);
  return new Promise(resolve => setTimeout(() => resolve(stones[stoneName]), 500));
}

/*
    1. await can only be used inside asynchronous functions
    2. the await instruction freezes the execution of an asynchronous function until the promise enters the rejected or fulfilled state 
    (that is, we simulate synchronicity in the execution of asynchronous code)
    3. await will not return a promise, but its result
    4. an asynchronous function always returns a promise
*/

async function getStonesSequentiallyAsync() {
  console.time('getStones');
  console.log('start');
  //   const emerald = await getStone("Emerald");
  //   console.log(emerald);
  //   const sapphire = await getStone("Sapphire");
  //   console.log(sapphire);
  const emerald = getStone('Emerald');
  const sapphire = getStone('Sapphire');

  const stones = await Promise.all([emerald, sapphire]);
  console.log('🚀 ~ stones', stones);

  console.log('end');
  console.timeEnd('getStones');
  return stones;
}

function getStonesSequentially() {
  getStone('Emerald').then(stone => {
    console.log(stone);

    getStone('Sapphire').then(console.log);
  });
}
// console.time("getStones");
// console.timeEnd("getStones");
// getStonesSequentially();

console.log('Before');
getStonesSequentiallyAsync();
console.log('After');

/*
Macro tasks and Microtasks
ScriptQueue:
PromiseJobs:
*/

// console.log("1"); //synchronous operation 1

// setTimeout(() => console.log("2"), 0); //asynchronous operation, macro task, 5

// const promise = new Promise((res) => {
//   console.log("3"); //synchronous operation 2
//   res("4");
// });

// promise.then((data) => console.log(data)); //asynchronous operation, microtask, 4

// console.log("5"); //synchronous operation 3
