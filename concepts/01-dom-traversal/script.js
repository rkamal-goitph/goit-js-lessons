let firstChild = document.getElementById('first-child');
let lastChild = document.getElementById('last-child');

// Accessing the root element (html)
let root = document.documentElement;
console.log('Root Element:', root);
console.log(root.childNodes);

// parentNode
console.log('Parent Node:', firstChild.parentNode);

// childNodes
console.log('Child Nodes:', firstChild.parentNode.childNodes);

// children
console.log('Children:', firstChild.parentNode.children);

// firstChild
console.log('First Child (including text):', firstChild.parentNode.firstChild);

// firstElementChild
console.log('First Element Child:', firstChild.parentNode.firstElementChild);

// lastChild
console.log('Last Child (including text):', lastChild.parentNode.lastChild);

// lastElementChild
console.log('Last Element Child:', lastChild.parentNode.lastElementChild);

// previousSibling
console.log('Previous Sibling (including text):', firstChild.previousSibling);

// previousElementSibling
console.log('Previous Element Sibling:', firstChild.previousElementSibling);

// nextSibling
console.log('Next Sibling (including text):', lastChild.nextSibling);

// nextElementSibling
console.log('Next Element Sibling:', lastChild.nextElementSibling);
