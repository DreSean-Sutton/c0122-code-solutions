/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  // debugger;
  var newTransaction = new Transaction('deposit', amount);
  if (newTransaction.amount > 0 &&
    Number.isInteger(newTransaction.amount)) {
    this.transactions.push(newTransaction);
    console.log(this.transactions);
    return true;
  }
  return false;
};

Account.prototype.withdraw = function (amount) {
  // debugger;
  var newTransaction = new Transaction('withdrawal', amount);
  if (newTransaction.amount > 0 &&
    Number.isInteger(newTransaction.amount)) {
    this.transactions.push(newTransaction);
    console.log(this.transactions);
    return true;
  }
  return false;
};

Account.prototype.getBalance = function () {
  // debugger;
  var balance = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    balance += this.transactions.amount[i];
    console.log(balance);
  }
  return balance;
};
