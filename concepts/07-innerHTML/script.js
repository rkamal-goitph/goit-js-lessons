const contentDiv = document.getElementById('content');
const updateButton = document.getElementById('updateButton');
const addProductsButton = document.getElementById('addProductsButton');

// Updating content using innerHTML
updateButton.addEventListener('click', function () {
  contentDiv.innerHTML =
    '<h2>New Content</h2><p>This content was set using innerHTML.</p>';
});

// Adding products using innerHTML and templating
addProductsButton.addEventListener('click', function () {
  const products = [
    { name: 'Product 1', price: '10.00' },
    { name: 'Product 2', price: '20.00' },
    { name: 'Product 3', price: '30.00' },
  ];

  let productsHtml = '';
  products.forEach(product => {
    productsHtml += `<div class="product"><h3>${product.name}</h3><p>Price: $${product.price}</p></div>`;
  });

  contentDiv.innerHTML += productsHtml; // Note: this will re-create existing elements in contentDiv
});
ß;
// Reading content using innerHTML
console.log('Initial innerHTML:', contentDiv.innerHTML);
