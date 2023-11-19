// Example 1 - Basic operations with an array

// 1. Create an array genres with elements "Jazz" and "Blues".
// 2. Add "Rock and Roll" to the end.
// 3. Print the first element of the array to the console.
// 4. Print the last element of the array to the console. The code should work for an array random length.
// 5. Remove the first element and print it to the console.
// 6. Insert "Country" and "Reggae" at the beginning of the array.

// const genres = ;

// Example 1 - Basic operations with an array

// 1. Create an array genres with elements "Jazz" and "Blues".
const genres = ['Jazz', 'Blues']; // 2
console.log(genres);

// 2. Add "Rock and Roll" to the end.
genres[2] = 'Rock and Roll';
console.log(genres);

genres.push('Rock and Roll', 'Country', 'Pop');
console.log(genres);

// 3. Print the first element of the array to the console.
console.log(genres[0]);

const firstElement = genres[0]; // pass by reference
console.log(firstElement);

// 4. Print the last element of the array to the console. The code should work for an array random length.
console.log(genres[genres.length - 1]);

const lastElement = genres[genres.length - 1];
console.log(lastElement);

// 5. Remove the first element and print it to the console.
console.log(genres.shift());

// const firstElementForShifting = genres.shift();
// console.log(firstElementForShifting);
// console.log(genres);

// 6. Insert "Country" and "Reggae" at the beginning of the array.
genres.unshift('Country', 'Reggae');
console.log(genres.unshift('Country', 'Reggae'));

genres.splice(-2, 0, 'Country', 'Reggae');

// const genres = ;
