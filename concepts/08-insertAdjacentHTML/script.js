// const paragraph = document.getElementById('paragraph');
// const beforeBeginButton = document.getElementById('beforeBeginButton');
// const afterBeginButton = document.getElementById('afterBeginButton');
// const beforeEndButton = document.getElementById('beforeEndButton');
// const afterEndButton = document.getElementById('afterEndButton');

// beforeBeginButton.addEventListener('click', function () {
//   paragraph.insertAdjacentHTML(
//     'beforebegin',
//     '<div>Inserted Before Begin</div>'
//   );
// });

// afterBeginButton.addEventListener('click', function () {
//   paragraph.insertAdjacentHTML('afterbegin', '<div>Inserted After Begin</div>');
// });

// beforeEndButton.addEventListener('click', function () {
//   paragraph.insertAdjacentHTML('beforeend', '<div>Inserted Before End</div>');
// });

// afterEndButton.addEventListener('click', function () {
//   paragraph.insertAdjacentHTML('afterend', '<div>Inserted After End</div>');
// });

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const propNames = [];

//   for (const product of products) {
//     if (product[propName]) {
//       propNames.push(product[propName]);
//     }
//   }
//   return propNames;
//   // Change code above this line
// }

// getAllPropValues('name');
// console.log(getAllPropValues('price'));

function makeStringFromArray(array, delimiter) {
  let string;
  // Change code below this line

  string = array.join(delimiter);

  // Change code above this line
  return string;
}

console.log(
  makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' ')
);
console.log(
  makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], '*')
);
console.log(
  makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], '~')
);
