const fetchUserFromServer = username => {
  return new Promise((resolve, reject) => {
    console.log(`Fetching data for ${username}`);

    setTimeout(() => {
      // Change value of isSuccess variable to simulate request status
      const isSuccess = true;

      if (isSuccess) {
        resolve('success value');
      } else {
        reject('error');
      }
    }, 2000);
  });
};

fetchUserFromServer('Mango')
  .then(user => console.log(user))
  .catch(error => console.error(error));
