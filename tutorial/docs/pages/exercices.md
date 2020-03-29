# Simple Exercices

We will start learning web3 via some simple _"warmup exercices"_.

We will explore some common methods from `web3.utils`.

<pre class="extropy-codeblock">
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


## Instructions

All you have to do is paste the code snippet below in the node.js and find the correct method to display on the console the expected result.

```javascript
var result = web3.utils.<method_to_find>);
console.log(result);
```

You can see the solution for each exercices in the according

-----

<!-- tabs:start -->

#### ** Exercice 1 **

Show the version of web3.js library used.

<button class="btn btn-primary" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="solution-exercice1">Solution</button>

<div class="collapse multi-collapse" id="solution-exercice1">
  <div class="card card-body">
    <pre class="extropy-codeblock">
    var version = web3.version;
    console.log(version);
    </pre>
  </div>
</div>

#### ** Exercice 2 **

Show the hash of the string "Hello Extropy!"

<button class="btn btn-primary" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="solution-exercice2">Solution</button>

<div class="collapse multi-collapse" id="solution-exercice2">
  <div class="card card-body">
    <pre class="extropy-codeblock">
    var hash = web3.utils.keccak256("Hello Extropy!");
    // or
    var hash = web3.utils.sha3("Hello Extropy!");       // <= sha3 is also an alias
    </pre>
  </div>
</div>

#### ** Exercice 3 **

Check that a value is an address

<button class="btn btn-primary" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="solution-exercice3">Solution</button>

<div class="collapse multi-collapse" id="solution-exercice3">
  <div class="card card-body">
    <pre class="extropy-codeblock">
var your_address = "0xc0ffee254729296a45a3885639AC7E10F9d54979";
console.log("is it a valid address? " + web3.utils.isAddress(your_address));
// or
var invalid_address = "0xDEADee254729296a45a3885639AC7E10F9d54979";
console.log("is it a valid address?" + web3.utils.isAddress(invalid_address));
    </pre>
  </div>
</div>

#### ** Exercice 4 **

Make an address with a valid checksum

[_What is a checksumed address in Ethereum?_](https://coincodex.com/article/2078/ethereum-address-checksum-explained/)

<button class="btn btn-primary" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="solution-exercice4">Solution</button>

<div class="collapse multi-collapse" id="solution-exercice4">
  <div class="card card-body">
    <pre class="extropy-codeblock">
var raw_address = "0xbadc0dedf5b784a70bc9a8c8476b5c88e9f6f49e";
var checksum_address = web3.utils.toChecksumAddress(raw_address);
console.log("correct checksum address: " + checksum_address)
    </pre>
  </div>
</div>

#### ** Exercice 5 **

Convert a number to its hex value

<button class="btn btn-primary" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="solution-exercice3">Solution</button>

<div class="collapse multi-collapse" id="solution-exercice3">
  <div class="card card-body">
    <pre class="extropy-codeblock">
var value = 12648430;
var hex_value = web3.utils.numberToHex(value);
console.log(hex_value);
    </pre>
  </div>
</div>

#### ** Exercice 6 **

Convert an hex value to a number

<button class="btn btn-primary bg-color-complement-0" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="solution-exercice3">Solution</button>

<div class="collapse multi-collapse" id="solution-exercice3">
  <div class="card card-body">
    <pre class="extropy-codeblock">
var hex = "0x1f9";
var number_value = web3.utils.hexToNumber(hex);
console.log(number_value);
    </pre>
  </div>
</div>

<!-- tabs:end -->
