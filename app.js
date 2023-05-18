// importing modules

const Blockchain = require("./blockchain");
const Block = require("./block");
const Transaction = require("./transaction");

// creating first transaction

let transaction1 = new Transaction("Satoshi ", "Natnael", 1000000);

// creating the first blaock

let genesisBlock = new Block();
genesisBlock.addTransaction(transaction1);
let blockchain = new Blockchain(genesisBlock);

let block = blockchain.generateBlock([transaction1]);
blockchain.addBlock(block);

// creating second transaction

let transaction2 = new Transaction("Natnael", "Bob", 10000);

// creating the second block

let block2 = blockchain.generateBlock([transaction2]);

// creating the second block to the blockchain

blockchain.addBlock(block2);

console.log(blockchain);
