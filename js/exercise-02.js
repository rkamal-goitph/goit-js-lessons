// Example 2 - Function callback

// Add methods withdraw(amount, onSuccess, onError) to the account object and deposit(amount, onSuccess, onError),
//     where the first parameter is the amount of the operation, and second and third are callbacks.

// The withdraw method raises onError if amount is greater than TRANSACTION_LIMIT or this.balance,
//     and onSuccess otherwise.deposit method raises onError if amount is greater than TRANSACTION_LIMIT or less
//     or either zero and onSuccess otherwise.

//
const TRANSACTION_LIMIT = 1000;

const account = {
  username: 'Jacob',
  balance: 400,
  withdraw(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
    } else if (amount > this.balance) {
    } else {
    }
  },
  deposit(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
    } else if (amount <= 0) {
    } else {
    }
  },
};

function handleSuccess(message) {
  console.log(`✅ Success! ${message}`);
}
function handleError(message) {
  console.log(`❌ Error! ${message}`);
}

account.withdraw(2000, handleSuccess, handleError);
account.withdraw(600, handleSuccess, handleError);
account.withdraw(300, handleSuccess, handleError);
account.deposit(1700, handleSuccess, handleError);
account.deposit(0, handleSuccess, handleError);
account.deposit(-600, handleSuccess, handleError);
account.deposit(600, handleSuccess, handleError);
