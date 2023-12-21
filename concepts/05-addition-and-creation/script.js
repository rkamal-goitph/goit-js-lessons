let newElement = document.createElement('div');
newElement.textContent = 'Newly Created Div';

// Appending the new element to the container
let container = document.getElementById('container');
container.append(newElement);

// // // // Creating more elements to demonstrate prepend, after, and before
// let prependElement = document.createElement('p');
// prependElement.textContent = 'Prepended Paragraph';

// let afterElement = document.createElement('span');
// afterElement.textContent = 'Span After First Paragraph';

// let beforeElement = document.createElement('span');
// beforeElement.textContent = 'Span Before Second Paragraph';

// // // // Getting reference to existing paragraphs
// // let firstParagraph = document.getElementById('firstParagraph');
// // let secondParagraph = document.getElementById('secondParagraph');

// // // Prepending an element
// container.prepend(prependElement);

// // // Adding elements after and before specific elements
// firstParagraph.after(afterElement);
// secondParagraph.before(beforeElement);
