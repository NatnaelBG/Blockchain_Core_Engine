/* The Blockchain class is a JavaScript implementation of a blockchain Engine that includes
methods for adding blocks and generating hashes using the sha256 hashing algorithm. */
const sha256 = require("js-sha256");
const Block = require("./block");

// Blockchain implemented as a list of blocks

class Blockchain {
  constructor(genesisBlock) {
    this.blocks = [];
    this.addBlock(genesisBlock);
  }

  addBlock(block) {
    // check if we're creating the genesis block (which is the first block in a blockchain)

    if (this.blocks.length == 0) {
      block.previousHash = "0000000000000000";
      block.hash = this.generateHash(block);
    }
    this.blocks.push(block);
  }

  // generates a new block

  /* `generateBlock(transactions)` is a method in the `Blockchain` class that takes an array of
  `transactions` as input and generates a new block with those transactions. */
  /**
   * This function generates a new block with a given set of transactions and adds it to the
   * blockchain.
   * @param transactions - an array of transaction objects that will be added to the new block being
   * generated.
   * @returns The function `generateBlock(transactions)` is returning a `Block` object with the
   * transactions added to it, and with the block number, previous hash, and hash generated.
   */
  generateBlock(transactions) {
    let block = new Block();
    transactions.forEach((transaction) => {
      block.addTransaction(transaction);
    });

    // getting the hash of the previous block

    let prevBlock = this.getPrevBlock();
    block.blockNumber = this.blocks.length;
    block.previousHash = prevBlock.hash;
    block.hash = this.generateHash(block);
    return block;
  }

  getPrevBlock() {
    if (this.blocks.length > 0) {
      return this.blocks[this.blocks.length - 1];
    }
    return genesisBlock;
  }

  // generates hash for our block using the sha256 hashing algorithm

  generateHash(block) {
    // "00" is hardcoded at the moment. However, it can be changed to increase or decrease the difficulty of mining
    let hash = "123";
    while (!hash.startsWith("00")) {
      block.nonce++;
      hash = sha256(block.key);
      // console.log(hash);
    }
    return hash;
  }
}

module.exports = Blockchain;

/**
 *  this.blockNumber = 0;
    this.previousHash = "";
    this.hash = "";
    this.nonce = 0;
    this.transactions = [];
 */
