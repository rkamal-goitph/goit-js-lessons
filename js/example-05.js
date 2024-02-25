// Example 5 - Contact logging
// Write a function printContactsInfo(names, phones) that prints to the console the name and the user's phone number. The names and phones parameters will be passed strings of names and phone numbers separated by commas. Sequence number of names and phone numbers in the rows indicate a match. Number of names and phones guaranteed to be the same.

// Step 1: Start
// Step 2: Define function `printContactsInfo` with parameters `names`, `phones`, and `ages`
// Step 3: Split the `names` string by commas into an array `namesArr`
// Step 4: Split the `phones` string by commas into an array `phonesArr`
// Step 5: Split the `ages` string by commas into an array `yearsArr`
// Step 6: Initialize a for loop that starts from index 0 to the length of `namesArr` array
// For each iteration, print the name, phone, and age of the user in the format "name: <name>; phone: <phone>; age: <age>"
// Step 7: End

// function printContactsInfo(...rest) {
//   const namesArr = rest[0].split(',');
//   const phonesArr = rest[1].split(',');
//   const yearsArr = rest[2].split(',');

//   for (let i = 0; i < namesArr.length; i++) {
//     console.log(
//       `name: ${namesArr[i]}; phone: ${phonesArr[i]}; age: ${yearsArr[i]}`
//     );
//   }
// }

printContactsInfo(
  'Jacob,William,Solomon,Artemis',
  '89001234567,89001112233,890055566377,890055566300',
  '28,21,18,31'
);
