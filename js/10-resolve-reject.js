// // Fulfilled promise
// new Promise(resolve => resolve('success value')).then(value =>
//   console.log(value)
// );

// Promise.resolve('success value').then(value => console.log(value));

// // Rejected promise
// new Promise((resolve, reject) => reject('error')).catch(error =>
//   console.error(error)
// );

// Promise.reject('error').catch(error => console.error(error));

// const makeGreeting = guestName => {
//   if (guestName === '' || guestName === undefined) {
//     return {
//       success: false,
//       message: 'Guest name must not be empty',
//     };
//   }

//   return {
//     success: true,
//     message: `Welcome ${guestName}`,
//   };
// };

// const result = makeGreeting('Mango');

// if (result.success) {
//   console.log(result.message);
// } else {
//   console.error(result.message);
// }

// const makeGreeting = (guestName, onSuccess, onError) => {
//   if (guestName === '' || guestName === undefined) {
//     return onError('Guest name must not be empty');
//   }
//   onSuccess(`Welcome ${guestName}`);
// };

// makeGreeting(
//   'Mango',
//   greeting => console.log(greeting),
//   error => console.error(error)
// );

// const makeGreeting = guestName => {
//   if (guestName === '' || guestName === undefined) {
//     return Promise.reject('Guest name must not be empty');
//   }

//   return Promise.resolve(`Welcome ${guestName}`);
// };

// makeGreeting('Mango')
//   .then(greeting => console.log(greeting))
//   .catch(error => console.error(error));
