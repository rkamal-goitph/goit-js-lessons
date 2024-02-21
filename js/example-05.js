// Example 5 - Contact logging
// Write a function printContactsInfo(names, phones) that prints to the console the name and the user's phone number. The names and phones parameters will be passed strings of names and phone numbers separated by commas. Sequence number of names and phone numbers in the rows indicate a match. Number of names and phones guaranteed to be the same.

function printContactsInfo(...rest) {
  const namesArr = rest[0].split(',');
  const phonesArr = rest[1].split(',');
  const yearsArr = rest[2].split(',');

  for (let i = 0; i < namesArr.length; i++) {
    console.log(
      `name: ${namesArr[i]}; phone: ${phonesArr[i]}; age: ${yearsArr[i]}`
    );
  }
}

printContactsInfo(
  'Jacob,William,Solomon,Artemis',
  '89001234567,89001112233,890055566377,890055566300',
  '28,21,18,31'
);
