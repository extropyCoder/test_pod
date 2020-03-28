# Getting Started

The web3 object provides access to all sorts of methods that will feel familiar to JavaScript developers. Spend some time using `web3` inside the console to get an idea of the kinds of scripts you could run locally on your machine.

## Exploring web3 on the console

We are going to explore web3 via the CLI first. Fire the node.js console:

```
~$ node
```

We first need to import the web3 module using `require` to be able to use it.

We can then explore the web3 object in the console.

```javascript
var web3 = require('web3');
console.log(web3);
```

The last command output the web3 object in the console (see picture below). It contains all the available methods. There are a lot of information here. 

Let's first look at `web3.utils`. **Scroll back up** to the first result.

<pre style="background-color: #1A2E39; color: #E2E2E2; padding: 2%">
{ [Function: web3]
  version: '1.2.2',
  <b style="color:#958968;">utils:</b>
   { _fireError: [Function: _fireError],
     _jsonInterfaceMethodToString: [Function: _jsonInterfaceMethodToString],
     _flattenTypes: [Function: _flattenTypes],
     randomHex: [Function: randomHex],
     _:
      { [Function: _]
        _: [Circular],
        VERSION: '1.9.1',
        iteratee: [Function: builtinIteratee],
        forEach: [Function],
        each: [Function],
        collect: [Function],
        ...
        ...
</pre>

Let's do some simple exercices.

## Some simple exercices

We are going to start using the web3 library through some simple "warmup" exercices.

All you have to do is paste the code snippet below in the node.js and find the correct method to display on the console the expected result.

```javascript
var result = web3.utils.<method_to_find>);
console.log(result);
```

You can see the solution for each exercices in the according

-----

> Exercice 1: Show the version of web3.js library used.

```javascript
var version = web3.version;
console.log(version);
```

> Exercice 2: show the hash of the string "Hello Extropy!".

```javascript
var hash = web3.utils.keccak256("Hello Extropy!");
// or
var hash = web3.utils.sha3("Hello Extropy!");       // <= sha3 is also an alias
// or
```

> Exercice 3: check that a value is an address

```javascript
var your_address = "0xc0ffee254729296a45a3885639AC7E10F9d54979";
console.log("is it a valid address? " + web3.utils.isAddress(your_address));

var invalid_address = "0xDEADee254729296a45a3885639AC7E10F9d54979";
console.log("is it a valid address?" + web3.utils.isAddress(invalid_address));
```

> Exercice 4: make an address with a valid checksum

```javascript
var raw_address = "0xbadc0dedf5b784a70bc9a8c8476b5c88e9f6f49e";
var checksum_address = web3.utils.toChecksumAddress(raw_address);
console.log("correct checksum address: " + checksum_address)
```
[_What is an ethereum address checksum?_](https://coincodex.com/article/2078/ethereum-address-checksum-explained/)


> Exercice 5: convert a number to its hex value

```javascript
var value = 12648430;
var hex_value = web3.utils.numberToHex(value);
console.log(hex_value);
```

> Exercice 6: convert a hex value to a number

```javascript
var hex = "0x1f9";
var number_value = web3.utils.hexToNumber(hex);
console.log(number_value);
```
