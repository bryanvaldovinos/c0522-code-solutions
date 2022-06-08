/* exported Bank */
function Bank(nextAccountNumber, accounts) {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

var bankList = new Bank();

Bank.prototype.openAccount = function (holder, balance) {
  if (!(Number.isInteger(balance)) || (balance < 1) || (isNaN(balance)) || (typeof balance === 'string') || (balance === undefined)) {
    return null;
  } else if (balance > 0) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    return this.nextAccountNumber++;
  }
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  return null;
};

Bank.prototype.getTotalAssets = function () {

};
