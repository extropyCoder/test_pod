install the Web3.js library (https://github.com/ethereum/wiki/wiki/ JavaScript-API#adding-web3) as described in the last section, to try out some
of the ethereum JavaScript api calls. these include checking a balance, sending
a transaction, creating an account, and all sorts of other mathematical and blockchain-related functions. if your etherbase private key is held on your machine, for example, you can get the balance by typing in the console:
   eth.getBalance(eth.coinbase).toNumber();
hopefully by now, you have a working understanding of mining, and you’ve see it happen before your own eyes. in reality, the most effective way to see how mining moves state transition forward, executing contracts, is to work with the testnet.