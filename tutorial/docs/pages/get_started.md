# Getting Started

The web3 object provides access to all sorts of methods that will feel familiar to JavaScript developers. Spend some time persuing the console wiki to get an idea of the kinds of scripts you could run locally on your machine.

## Exploring web3 on the console

We are going to explore web3 via the CLI first. Fire node

```
~$ node
```

We first need to `require` it with Node.js. Let's then explore the Web3 object.

```javascript
var Web3 = require('web3');
```

Lets now examine the web3 object.

```
console.log(Web3);
```

We can see a lot here. Let's do some simple exercices.

## Some simple exercices

We are going to start using the web3 library through some simple "warmup" exercices. All you have to do is paste the code snippet below in the node.js and find the correct method to display on the console the expected result.

```
console.log(Web3.utils.<method>)
```

### version and create a hash of "hello world"

* Show the version of web3.js library used : `Web3.version`
* Output a sha3 or keccak256 hash of the string "Hello Web3" : `Web3.utils.sha3` or `Web3.utils.keccak256`


### Working with addresses, hexadecimals and decimals numbers

* isAddress
* toChecksumAddress
* hexToNumber
* numberToHex

## Working with ether units

Let's do some work with ether units. By running the following command:

```
console.log(Web3.utils.unitMap)
```

You should all the possible exisiting ether units.

* fromWei
* toWei
