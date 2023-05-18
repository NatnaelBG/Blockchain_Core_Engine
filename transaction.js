/* The Transaction class represents a transaction with a sender, receiver, and amount. */

class Transaction {
  constructor(sender, receiver, amount) {
    this.sender = sender;
    this.receiver = receiver;
    this.amount = amount;
  }
}

module.exports = Transaction;
