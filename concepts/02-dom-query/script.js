// Existing selectors
let mainTitle = document.querySelector('#main-title');
console.log('Main Title:', mainTitle);

let firstDescription = document.querySelector('.description');
console.log('First Description:', firstDescription);

let menuItems = document.querySelectorAll('.menu-item');
console.log('Menu Items:', menuItems);

let descriptions = document.querySelectorAll('.description');
console.log('All Descriptions:', descriptions);

// Selectors that will not find any matches
let nonExistentId = document.querySelector('#non-existent-id');
console.log('Non-existent ID:', nonExistentId); // Expected to be null

let nonExistentClass = document.querySelectorAll('.non-existent-class');
console.log('Non-existent Class:', nonExistentClass); // Expected to be an empty NodeList
