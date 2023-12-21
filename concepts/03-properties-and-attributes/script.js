// Working with form elements
let textInput = document.getElementById('textInput');
console.log('Value of textInput:', textInput.value);

let checkboxInput = document.getElementById('checkboxInput');
console.log('Checkbox is checked:', checkboxInput.checked);

// Accessing the 'name' attribute
let radioButtons = document.getElementsByName('radioGroup');
console.log('Radio group name:', radioButtons[0].name);

// Working with the 'src' attribute of an image
let image = document.getElementById('image');
console.log('Image source:', image.src);

// Manipulating text content
let paragraph = document.getElementById('paragraph');
console.log('Original text:', paragraph.textContent);
paragraph.textContent = 'Updated text content';
console.log('Updated text:', paragraph.textContent);

// Working with classList
let div1 = document.getElementById('div1');
console.log('Initial classes:', div1.className);
div1.classList.add('class3');
console.log(div1.classList.contains('class1'));
console.log('After adding class3:', div1.className);
div1.classList.remove('class2');
console.log('After removing class2:', div1.className);
div1.classList.toggle('class4');
console.log('After toggling class4:', div1.className);
div1.classList.replace('class1', 'newClass1');
console.log('After replacing class1 with newClass1:', div1.className);

// Inline styles
let div2 = document.getElementById('div2');
console.log('Initial styles:', div2.style.cssText);
div2.style.backgroundColor = 'red';
console.log('After changing background color:', div2.style.backgroundColor);

// Attribute manipulation
div2.setAttribute('data-custom', 'customValue');
console.log('Custom attribute set:', div2.getAttribute('data-custom'));
console.log('Has class attribute:', div2.hasAttribute('class'));
div2.removeAttribute('data-custom');
console.log(
  'After removing custom attribute:',
  div2.getAttribute('data-custom')
);

// All attributes
let attributes = div2.attributes;
console.log('All attributes of div2:', attributes);
