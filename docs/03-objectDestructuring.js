/*
╔════════════════════════════════════════╗
║          OBJECT DESTRUCTURING          ║
╚════════════════════════════════════════╝
*/

// Definition: Extracts variables from object properties to avoid verbose syntax when accessing multiple properties
// Applications:
// 1. Ease of access to mutiple object properties
// 2. Assigning new properties
// 3. Assigning new properties with default values
// 4. Creating a new variable referenced to object's property values
// 5. Ease of access to properties during iteration

// ====================================Example 1====================================

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };

const accessType = book.isPublic ? 'public' : 'private';
const message = `Book ${book.title} by author ${book.author} with rating ${book.rating} is in ${accessType} access.`;

// ====================================Example 2====================================

// Destructuring
// const { title, author, isPublic, rating, coverImage } = book;
// const message2 = `Book ${book.title} by author ${book.author} with rating ${book.rating} is in ${accessType} access.`;
// console.log(coverImage); // undefined

// const accessType = isPublic ? "public" : "private";
// const message = `Book ${title} by author ${author} with rating ${rating} is in ${accessType} access.`;

// ====================================Example 3====================================

const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
};

// Add a cover picture if it is not in the book object
const {
  title,
  coverImage = 'https://via.placeholder.com/640/480',
  author,
} = book;

console.log(title); // The Last Kingdom
console.log(author); // Bernard Cornwell
console.log(coverImage); // https://via.placeholder.com/640/480

// ====================================Example 4====================================

const firstBook = {
  title: 'The Last Kingdom',
  coverImage:
    'https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg',
};

const {
  title: firstTitle,
  coverImage: firstCoverImage = 'https://via.placeholder.com/640/480',
} = firstBook;

console.log(firstTitle); // The Last Kingdom
console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

const secondBook = {
  title: 'The Dream of a Ridiculous Man',
};

const {
  title: secondTitle,
  coverImage: secondCoverImage = 'https://via.placeholder.com/640/480',
} = secondBook;

console.log(secondTitle); // The Dream of a Ridiculous Man
console.log(secondCoverImage); // https://via.placeholder.com/640/480

// ====================================Example 5====================================

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
];

// Verbose nondestructured syntax
for (const book of books) {
  console.log(book.title);
  console.log(book.author);
  console.log(book.rating);
}

// Preferred syntax for multiple object properties
for (const book of books) {
  const { title, author, rating } = book;

  console.log(title);
  console.log(author);
  console.log(rating);
}

// Preferred syntax for minimal object properties
for (const { title, author, rating } of books) {
  console.log(title);
  console.log(author);
  console.log(rating);
}

// ====================================Deep Destructuring====================================

const user = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  name,
  tag,
  stats: { followers, views: userViews, likes: userLikes = 0 },
} = user;

console.log(name); // Jacques Gluke
console.log(tag); // jgluke
console.log(followers); // 5603
console.log(userViews); // 4827
console.log(userLikes); // 1308
