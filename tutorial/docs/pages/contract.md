# Smart Contracts in Web3

The `web3.eth` module provides a submodule called `Contract`. It allows you to represent and interact with smart contract like if they were Javascript objects.

You can read the [documentation of the module](https://web3js.readthedocs.io/en/v1.2.0/web3-eth-contract.html) on readthedocs.io.


## Introduction

In Web3, smart contracts act like a new instance of a Javascript object. 

You create an instance of a solidity contract using the `new` keyword.

```javascript
new web3.eth.Contract(jsonInterface)
```

As you can see, creating a new contract object in Web3 requires to pass one parameter: the **json interface**.

## What is JSON interface?

> The json interface is a json object describing the Application Binary Interface (ABI) for an Ethereum smart contract.
>
> It is an array of function and/or event descriptions. A function description is a JSON object with fields like `type`, `name`, `inputs`, `outputs` and `stateMutability`

Do you remember when you ran the command **`truffle compile`**?

This command created a json file called `Score.json`, located in the folder **/client/src/contracts**

**This JSON file is our JSON interface**. If you look inside, yoou might see that it contains our contract ABI.

The code below is part of the JSON interface for our Score.sol

**The only thing that you should remember is:**

> The JSON interface enables web3 to convert automatically all calls into low-level ABI calls over RPC.


```json
{
  "contractName": "Score",
  "abi": [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "Score_set",
      "type": "event"
    },
    ...
    ...
```

## Importing the JSON interface

To use our Score.json interface with web3, we first need to import it.

```javascript
import getWeb3 from "./getWeb3";
import ScoreContract from './contracts/Score.json';     // <= Add this to you App.js file
```


## Optional parameters

Optionally, you can provide other parameters when creating new contract objects.

```javascript
new web3.eth.Contract(jsonInterface[, address][, options])
```


- `address` - String: The address of the smart contract to call, can be added later using `myContract.options.address = '0x1234..'`
- `options` - Object: The options of the contract. Some are used as fallbacks for calls and transactions.
    - `from` - String: The address transactions should be made from.
    - `gasPrice` - String: The gas price in wei to use for transactions.
    - `gas` - Number: The maximum gas provided for a transaction (gas limit).
    - `data` - String: The byte code of the contract. Used when the contract gets deployed.

Here is an example below: 

```javascript
var myContract = new web3.eth.Contract([...], '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe', {
    from: '0x1234567890123456789012345678901234567891', // default from address
    gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
});
```

## Create an instance of our contract

We are going to create a new instance of our contract, and pass it the ABI.

```javascript
const instance = new web3.eth.Contract(ScoreContract.abi, ScoreContract.networks[networkId].address);
```





## References

- https://web3js.readthedocs.io/en/v1.2.0/web3-eth-contract.html#eth-contract

You then specify the contract address with the `at` method. See the article below for an example
https://medium.com/@k3no/ethereum-tokens-smart-contracts-3346b62d2a0
Example

not clear
https://web3js.readthedocs.io/en/v1.2.0/web3-eth-contract.html#id12

