// importing express

const express = require("express");

// importing local modules

const Blockchain = require("./blockchain");
const Block = require("./block");
const Transaction = require("./transaction");

const myApp = express();
myApp.use(express.json());

let transactions = [];

// endpoint for creating a transaction

myApp.post("/newtransaction", (req, res) => {
  const sender = req.body.sender;
  const receiver = req.body.receiver;
  const amount = req.body.amount;

  let transaction = new Transaction(sender, receiver, amount);
  transactions.push(transaction);
  res.json(transactions);
});

// exposing an endpoint to access blockchain data

myApp.get("/blockchain", (req, res) => {
  // creating first transaction

  let transaction1 = new Transaction("Satoshi ", "Natnael", 1000000);

  // creating the first block

  let genesisBlock = new Block();
  genesisBlock.addTransaction(transaction1);

  // creating the blockchain

  let blockchain = new Blockchain(genesisBlock);

  let block = blockchain.generateBlock(transactions);
  blockchain.addBlock(block);

  res.json(blockchain);
});

myApp.listen(8080, () => {
  console.log("Server is running on port: 8080...");
});
