const formElement = document.querySelector('.form');
const inputElement = document.querySelector('#login');
const buttonElement = document.querySelector('.btn');

const handleClick = event => {
  event.preventDefault();
  console.log(event.target);
};

formElement.addEventListener('click', handleClick);
inputElement.addEventListener('click', handleClick);
buttonElement.addEventListener('click', handleClick);
