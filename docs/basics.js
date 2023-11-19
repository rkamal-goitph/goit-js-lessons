/*
╔════════════════════════════════════════╗
║        OBJECT CREATION                 ║
╚════════════════════════════════════════╝
*/

const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  isPublic: true,
  rating: 8.38,
};

/*
╔════════════════════════════════════════╗
║        SHORTHAND OBJECT CREATION       ║
╚════════════════════════════════════════╝
*/

const name = 'Henry Cibola';
const age = 25;

const user = {
  name: name,
  age: age,
};

console.log(user.name); // "Henry Cibola"
console.log(user.age); // 25

/*
╔════════════════════════════════════════╗
║        DOT NOTATION                    ║
╚════════════════════════════════════════╝
*/

const bookTitle1 = book.title;
console.log(bookTitle1); // 'The Last Kingdom'

const bookGenres1 = book.genres;
console.log(bookGenres1); // ['historical prose', 'adventure']

const bookPrice1 = book.price;
console.log(bookPrice1); // undefined

/*
╔════════════════════════════════════════╗
║        BRACKET NOTATION                ║
╚════════════════════════════════════════╝
*/

const bookTitle2 = book['title'];
console.log(bookTitle2); // 'The Last Kingdom'

const bookGenres2 = book['genres'];
console.log(bookGenres2); // ['historical prose', 'adventure']

const propKey = 'author';
const bookAuthor2 = book[propKey];
console.log(bookAuthor2); // 'Bernard Cornwell'

/*
╔════════════════════════════════════════╗
║        PROPERTY ADDITION               ║
╚════════════════════════════════════════╝
*/

book.pageCount = 836;
book.originalLanguage = 'en';
book.translations = ['ua', 'ru'];

console.log(book.pageCount); // 836
console.log(book.originalLanguage); // 'en'
console.log(book.translations); // ['ua', 'ru']

/*
╔════════════════════════════════════════╗
║        PROPERTY VALUE UPDATE           ║
╚════════════════════════════════════════╝
*/

book.rating = 9;
book.isPublic = false;
book.genres.push('drama');

console.log(book.rating); // 9
console.log(book.isPublic); // false
console.log(book.genres); // ['historical prose', 'adventure', 'drama']

/*
╔════════════════════════════════════════╗
║        COMPUTED PROPERTIES             ║
╚════════════════════════════════════════╝
*/

const propName = 'name';
const newUser = {
  age: 25,
  // The name of this property will be taken from the value of the variable propNam
  [propName]: 'Henry Cibola',
};

console.log(newUser.name); // 'Henry Cibola'
