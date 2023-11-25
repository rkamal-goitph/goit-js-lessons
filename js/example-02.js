// Example 2 - Destructuring
// Rewrite the function so that it takes one object of the parameter instead of a set of independent arguments.

function printContactsInfo(names, phones) {
  const nameList = names.split(',');
  const phoneList = phones.split(',');
  for (let i = 0; i < nameList.length; i += 1) {
    console.log(`${nameList[i]}: ${phoneList[i]}`);
  }
}

// It was
// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );

// Is expected
printContactsInfo({
  names: 'Jacob,William,Solomon,Artemis',
  phones: '89001234567,89001112233,890055566377,890055566300',
});

// Pseudocode for answers
// 1. Replace the names and phones parameters with a parameter object
// 2. Destructure the parameter object to extract the names and phones values
// 3. Convert the name string and phones string to arrays
// 4. Iterate over the array and log the corresponding values inside the loop

// ======================== ANSWERS BELOW ========================= //

function printContactsInfo({ names, phones }) {
  const nameList = names.split(',');
  const phoneList = phones.split(',');
  for (let i = 0; i < nameList.length; i += 1) {
    console.log(`${nameList[i]}: ${phoneList[i]}`);
  }
}

// Usage
printContactsInfo({
  names: 'Jacob,William,Solomon,Artemis',
  phones: '89001234567,89001112233,890055566377,890055566300',
});
