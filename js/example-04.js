// Example 4 - Complex tasks
// Write a script for managing a personal account of an Internet bank. There is an account object in which it is necessary to implement methods for working with balance and transaction history.

/*
 * There are only two types of transaction.
 * You can deposit or withdraw money from your account.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

// enumeration data type

/*
 * Each transaction is an object with properties: id, type and amount
 */

const account = {
  // Current account balance
  balance: 0,

  // Transaction History
  transactions: [],

  /*
   * Method creates and returns a transaction object.
   * Accepts amount and type of transaction.
   */
  createTransaction(amount, type) {
    const transaction = {
      amount: amount,
      type: type,
      id: Date.now(),
    };
    return transaction;
  },

  /*
   * The method responsible for adding the amount to the balance..
   * Accepts the amount of the transaction.
   * Calls createTransaction to create a transaction object
   * then adds it to the transaction history
   */
  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
    this.balance += amount;
  },

  /*
   *The method responsible for withdrawing the amount from the balance.
   * Принимает сумму танзакции.
   * Calls createTransaction to create a transaction object
   * then adds it to the transaction history.
   *
   * If amount is greater than the current balance, display a message
   * about the fact that the withdrawal of such an amount is not possible, there are not enough funds.
   */
  withdraw(amount) {
    if (this.balance < amount) {
      console.log('Not enough money');
      return;
    }
    if (amount <= 200) {
      console.log('You can take more');
      return;
    }

    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
    this.balance -= amount;
  },

  /*
   * The method returns the current balance
   */
  getBalance() {
    return this.balance;
  },

  /*
   * The method searches and returns the transaction object by id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        console.log(transaction);
      }
    }
  },

  /*
   * The method returns the amount of funds
   *a specific type of transaction from the entire history of transactions
   */
  getTransactionTotal(type) {
    let total = 0;

    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return total;
  },
};

account.deposit(1000);
console.log(account.transactions);
account.withdraw(1000);
console.log(account.transactions);
// Pseudocode for the answers
// 1. createTransaction(amount, type)
// A transaction object must contain an amount, type, and id properties
// This function must return a transaction object

// 2. deposit(amount)
// This function creates a transaction by calling the createTransaction method
// The returned or created transaction will be added to the transactions array
// The balance will be updated according to the amount deposited

// 3. withdraw(amount)
// This function creates a transaction by calling the createTransaction method
// The returned or created transaction will be added to the transactions array
// Before creating the transaction, a condition must be set to check whether the withdraw amount is greater than balance amount
// Add branching option for the case where balance amount is withdrawable (withdrawAmount < balanceAmount)
// Add branching option for the case where balance amount is not withdrawable (withdrawAmount > balanceAmount)

// 4. getBalance()
// Returns the current balance property value

// 5. getTransactionDetails(id)
// This function returns the total amount deposited or withdrawn
// It instantiates a variable respresenting the total amount for the chosen transaction namely transactionTotalAmount
// It iterates over the transactions array
// It enforces a condition to check whether the accessed type property of the current object corresponds to the type provided in the getTransactionTotal function parameter
// It calculates the total amount of the transaction type inside the condition
