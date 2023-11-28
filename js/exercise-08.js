// Example 8 - forEach method

// Make the code refactoring using forEach method and arrow functions.

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

// Expected result
const printContactsInfo = ({ names, phones }) => {
  const nameList = names.split(',');
  const phoneList = phones.split(',');

  // for (let i = 0; i < nameList.length , i < phoneList.length; i+=1) {
  //   console.log(`${nameList[i]}: ${phoneList[i]}`);
  // }

  nameList.forEach((el, idx) => {
    console.log(`${el} - ${phoneList[idx]}`);
  });
};

printContactsInfo({
  names: 'Jacob,William,Solomon,Artem',
  phones: '89001234567,89001112233,890055566377',
});
