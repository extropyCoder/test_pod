# Interact with contracts

The `web3.eth` module provides a submodule called `Contract`. This module allows you to interact with smart contract like if they were Javascript objects.

You can read the [documentation of the `web3.eth.Contract` module](https://web3js.readthedocs.io/en/v1.2.0/web3-eth-contract.html) for more informations.


## Introduction

In Web3, smart contracts act like a new instance of a Javascript object. You create an instance of a solidity contract using the `new` keyword.

```javascript
new web3.eth.Contract(jsonInterface[, address][, options])
```

Creating a new contract object in Web3 requires to pass one parameter: the **json interface**.
Thanks to that, web3 will convert automatically all calls into low-level ABI calls over RPC.

> *What is the JSON interface?*
> The JSON interface is the synonym for the ABI.... _Give more explanations_

## Importing the JSON interface

Do you remember when you ran the command below?

```
truffle (develop) > compile
```

This command created a json file called `Score.json`, located in the folder **/client/src/contracts**

**This JSON file is our JSON interface**. If you look inside, yoou might see that it contains our contract ABI.

To use it with web3, we are going to import it.

```javascript
import getWeb3 from "./getWeb3";
import ScoreContract from './contracts/Score.json';     // <= Add this to you App.js file
```

## Create a new contract

We are going to create a new instance of our contract, and pass it the ABI.

```javascript
const instance = new web3.eth.Contract(ScoreContract.abi)
```

## Optional parameters

Optionally, you can provide other parameters when creating new contract objects.

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


## Interact with the contract

Let's remember our contract contains two function: `getScore` and `setScore(new_score)`.

You can interact with the new instance of your contract, using the `.methods` followed by one the functions contained in your contract.

The following code...

```javascript
instance.methods.myMethod([param1[, param2[, ...]]])
```

...creates a **transaction object** for that method. You can do three things with this transaction:

- `.call` : do not alter contract state
- `.send` : alter contract state
- `.estimateGas`
- `.encodeABI`

Function - call: Will call the “constant” method and execute its smart contract method in the EVM without sending a transaction (Can’t alter the smart contract state).
Function - send: Will send a transaction to the smart contract and execute its method (Can alter the smart contract state).
Function - estimateGas: Will estimate the gas used when the method would be executed on chain.
Function - encodeABI: Encodes the ABI for this method. This can be send using a transaction, call the method or passing into another smart contracts method as argument.




## References

- https://web3js.readthedocs.io/en/v1.2.0/web3-eth-contract.html#eth-contract

You then specify the contract address with the `at` method. See the article below for an example
https://medium.com/@k3no/ethereum-tokens-smart-contracts-3346b62d2a0
Example

not clear
https://web3js.readthedocs.io/en/v1.2.0/web3-eth-contract.html#id12

