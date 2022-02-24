/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  var moneyBags = new Account(this.nextAccountNumber, holder);
  if (balance > 0 &&
    Number.isInteger(balance)) {
    moneyBags.deposit(balance);
    this.accounts.push(moneyBags);
    this.nextAccountNumber++;
    return moneyBags.number;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  if (this.accounts.length < number) {
    return null;
  } else {
    return this.accounts[number - 1];
  }
};

Bank.prototype.getTotalAssets = function () {
  if (this.accounts.length === 0) {
    return 0;
  }
  var grandShabank = 0;
  for (let i = 0; i < this.accounts.length; i++) {
    grandShabank += this.accounts[i].getBalance();
  }
  return grandShabank;
};
