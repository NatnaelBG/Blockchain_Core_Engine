/* The Block class represents a block in a blockchain, containing a hash, nonce, hash of previous
block, and a list of transactions. */

class Block {
  constructor() {
    this.blockNumber = 0;
    this.previousHash = "";
    this.hash = "";
    this.nonce = 0;
    this.transactions = [];
  }

  // this key will be used to create the hash for the block
  get key() {
    return (
      JSON.stringify(this.transactions) +
      this.blockNumber +
      this.previousHash +
      this.nonce
    );
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

module.exports = Block;
