/*
╔════════════════════════════════════════╗
║         OBJECTS ARRAY SYNTAX           ║
╚════════════════════════════════════════╝
*/

const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
];

/*
╔════════════════════════════════════════╗
║  OBJECTS ARRAY PROPERTY ITERATION      ║
╚════════════════════════════════════════╝
*/

for (const book of books) {
  // Book object
  console.log(book);
  // Title
  console.log(book.title);
  // Author
  console.log(book.author);
  // Rating
  console.log(book.rating);
}

/*
╔════════════════════════════════════════╗
║  ARRAY DERIVATION FROM OBJECT PROPERTY ║
╚════════════════════════════════════════╝
*/

const bookNames = [];

for (const book of books) {
  bookNames.push(book.title);
}

console.log(bookNames); // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man"]

let totalRating = 0;

/*
╔════════════════════════════════════════╗
║    MATH OPERATION FROM OBJECT PROPERTY ║
╚════════════════════════════════════════╝
*/

for (const book of books) {
  totalRating += book.rating;
}

const averageRating = (totalRating / books.length).toFixed(1);
console.log(averageRating); // 8.2
