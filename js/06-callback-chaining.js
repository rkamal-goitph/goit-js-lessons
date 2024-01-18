const fetchUserFromServer = (username, onSuccess, onError) => {
  console.log(`Fetching data for ${username}`);

  setTimeout(() => {
    // Change value of isSuccess variable to simulate request status
    const isSuccess = true;

    if (isSuccess) {
      onSuccess('success value');
    } else {
      onError('error');
    }
  }, 2000);
};

const onFetchSuccess = user => {
  console.log(user);
};

const onFetchError = error => {
  console.error(error);
};

fetchUserFromServer('Mango', onFetchSuccess, onFetchError);
