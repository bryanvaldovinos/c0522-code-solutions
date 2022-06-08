/* exported Account */
function Account(number, holder, transactions) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

var accInfo = new Account();

Account.prototype.deposit = function (amount) {
  var deposit = new Transaction('deposit', amount);
  if (!(Number.isInteger(amount)) || (amount < 1) || (isNaN(amount)) || (typeof amount === 'string') || (amount === undefined)) {
    return false;
  } else {
    this.transactions.push(deposit);
    return true;
  }
};

Account.prototype.withdraw = function (amount) {
  var withdrawal = new Transaction('withdrawal', amount);
  if (!(Number.isInteger(amount)) || (amount < 1) || (isNaN(amount)) || (typeof amount === 'string') || (amount === undefined)) {
    return false;
  } else {
    this.transactions.push(withdrawal);
    return true;
  }
};

Account.prototype.getBalance = function () {
  var Dep = 0;
  var With = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      Dep += this.transactions[i].amount;
    } else if (this.transactions[i].type !== 'withdraw') {
      With += this.transactions[i].amount;
    }
  }
  var balance = Dep - With;
  return balance;
};
