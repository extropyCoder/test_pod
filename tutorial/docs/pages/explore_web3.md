# Exploring web3

The web3 object provides access to all sorts of methods that will feel familiar to JavaScript developers.

We will first spend some time of using `web3` inside the CLI console. This will give you an idea of the methods you could use, and the scripts you could write in the future.

## web3 on the console

Let's fire the node.js console:

```
~$ node
```

First, we need to import the web3 module using `require`.

```javascript
var web3 = require('web3');
```

We can now explore the entire `web3` object in the console.

```javascript
console.log(web3);
```

This will output the entire web3 object in your console. You can see it in the _picture below._

There are a lot of information there ! As you can see, the `web3` object contains a wide range of properties and methods. 

Don't worry, we will start easily and go in more details gradually.

<h3>In the next section, we will do some simple exercices using the <code style="font-size: 1.5rem;">web3.utils</code> module.</h3>

<pre style="background-color: #1A2E39; color: #E2E2E2; padding: 2%">
{ [Function: Web3]
  version: <span class="cli-green">'1.2.6'</span>,
  utils:
   { _fireError: <span class="cli-blue">[Function: _fireError]</span>,
     _jsonInterfaceMethodToString: <span class="cli-blue">[Function: _jsonInterfaceMethodToString]</span>,
     _flattenTypes: <span class="cli-blue">[Function: _flattenTypes]</span>,
     randomHex: <span class="cli-blue">[Function: randomHex]</span>,
     _:
      { [Function: _]
        _: <span class="cli-blue">[Circular]</span>,
        VERSION: <span class="cli-green">'1.9.1'</span>,
        iteratee: <span class="cli-blue">[Function: builtinIteratee]</span>,
        forEach: <span class="cli-blue">[Function]</span>,
        each: <span class="cli-blue">[Function]</span>,
        collect: <span class="cli-blue">[Function]</span>,
        map: <span class="cli-blue">[Function]</span>,
        inject: <span class="cli-blue">[Function]</span>,
        foldl: <span class="cli-blue">[Function]</span>,
        reduce: <span class="cli-blue">[Function]</span>,
        foldr: <span class="cli-blue">[Function]</span>,
        reduceRight: <span class="cli-blue">[Function]</span>,
        detect: <span class="cli-blue">[Function]</span>,
        find: <span class="cli-blue">[Function]</span>,
        select: <span class="cli-blue">[Function]</span>,
        filter: <span class="cli-blue">[Function]</span>,
        reject: <span class="cli-blue">[Function]</span>,
        all: <span class="cli-blue">[Function]</span>,
        every: <span class="cli-blue">[Function]</span>,
        any: <span class="cli-blue">[Function]</span>,
        some: <span class="cli-blue">[Function]</span>,
        include: <span class="cli-blue">[Function]</span>,
        includes: <span class="cli-blue">[Function]</span>,
        contains: <span class="cli-blue">[Function]</span>,
        invoke: <span class="cli-blue">[Function]</span>,
        pluck: <span class="cli-blue">[Function]</span>,
        where: <span class="cli-blue">[Function]</span>,
        findWhere: <span class="cli-blue">[Function]</span>,
        max: <span class="cli-blue">[Function]</span>,
        min: <span class="cli-blue">[Function]</span>,
        shuffle: <span class="cli-blue">[Function]</span>,
        sample: <span class="cli-blue">[Function]</span>,
        sortBy: <span class="cli-blue">[Function]</span>,
        groupBy: <span class="cli-blue">[Function]</span>,
        indexBy: <span class="cli-blue">[Function]</span>,
        countBy: <span class="cli-blue">[Function]</span>,
        toArray: <span class="cli-blue">[Function]</span>,
        size: <span class="cli-blue">[Function]</span>,
        partition: <span class="cli-blue">[Function]</span>,
        take: <span class="cli-blue">[Function]</span>,
        head: <span class="cli-blue">[Function]</span>,
        first: <span class="cli-blue">[Function]</span>,
        initial: <span class="cli-blue">[Function]</span>,
        last: <span class="cli-blue">[Function]</span>,
        drop: <span class="cli-blue">[Function]</span>,
        tail: <span class="cli-blue">[Function]</span>,
        rest: <span class="cli-blue">[Function]</span>,
        compact: <span class="cli-blue">[Function]</span>,
        flatten: <span class="cli-blue">[Function]</span>,
        without: <span class="cli-blue">[Function]</span>,
        unique: <span class="cli-blue">[Function]</span>,
        uniq: <span class="cli-blue">[Function]</span>,
        union: <span class="cli-blue">[Function]</span>,
        intersection: <span class="cli-blue">[Function]</span>,
        difference: <span class="cli-blue">[Function]</span>,
        unzip: <span class="cli-blue">[Function]</span>,
        zip: <span class="cli-blue">[Function]</span>,
        object: <span class="cli-blue">[Function]</span>,
        findIndex: <span class="cli-blue">[Function]</span>,
        findLastIndex: <span class="cli-blue">[Function]</span>,
        sortedIndex: <span class="cli-blue">[Function]</span>,
        indexOf: <span class="cli-blue">[Function]</span>,
        lastIndexOf: <span class="cli-blue">[Function]</span>,
        range: <span class="cli-blue">[Function]</span>,
        chunk: <span class="cli-blue">[Function]</span>,
        bind: <span class="cli-blue">[Function]</span>,
        partial: { [Function] placeholder: <span class="cli-blue">[Circular]</span> },
        bindAll: <span class="cli-blue">[Function]</span>,
        memoize: <span class="cli-blue">[Function]</span>,
        delay: <span class="cli-blue">[Function]</span>,
        defer: <span class="cli-blue">[Function: bound]</span>,
        throttle: <span class="cli-blue">[Function]</span>,
        debounce: <span class="cli-blue">[Function]</span>,
        wrap: <span class="cli-blue">[Function]</span>,
        negate: <span class="cli-blue">[Function]</span>,
        compose: <span class="cli-blue">[Function]</span>,
        after: <span class="cli-blue">[Function]</span>,
        before: <span class="cli-blue">[Function]</span>,
        once: <span class="cli-blue">[Function: bound]</span>,
        restArguments: <span class="cli-blue">[Function: restArguments]</span>,
        keys: <span class="cli-blue">[Function]</span>,
        allKeys: <span class="cli-blue">[Function]</span>,
        values: <span class="cli-blue">[Function]</span>,
        mapObject: <span class="cli-blue">[Function]</span>,
        pairs: <span class="cli-blue">[Function]</span>,
        invert: <span class="cli-blue">[Function]</span>,
        methods: <span class="cli-blue">[Function]</span>,
        functions: <span class="cli-blue">[Function]</span>,
        extend: <span class="cli-blue">[Function]</span>,
        assign: <span class="cli-blue">[Function]</span>,
        extendOwn: <span class="cli-blue">[Function]</span>,
        findKey: <span class="cli-blue">[Function]</span>,
        pick: <span class="cli-blue">[Function]</span>,
        omit: <span class="cli-blue">[Function]</span>,
        defaults: <span class="cli-blue">[Function]</span>,
        create: <span class="cli-blue">[Function]</span>,
        clone: <span class="cli-blue">[Function]</span>,
        tap: <span class="cli-blue">[Function]</span>,
        isMatch: <span class="cli-blue">[Function]</span>,
        isEqual: <span class="cli-blue">[Function]</span>,
        isEmpty: <span class="cli-blue">[Function]</span>,
        isElement: <span class="cli-blue">[Function]</span>,
        isArray: <span class="cli-blue">[Function: isArray]</span>,
        isObject: <span class="cli-blue">[Function]</span>,
        isArguments: <span class="cli-blue">[Function]</span>,
        isFunction: <span class="cli-blue">[Function]</span>,
        isString: <span class="cli-blue">[Function]</span>,
        isNumber: <span class="cli-blue">[Function]</span>,
        isDate: <span class="cli-blue">[Function]</span>,
        isRegExp: <span class="cli-blue">[Function]</span>,
        isError: <span class="cli-blue">[Function]</span>,
        isSymbol: <span class="cli-blue">[Function]</span>,
        isMap: <span class="cli-blue">[Function]</span>,
        isWeakMap: <span class="cli-blue">[Function]</span>,
        isSet: <span class="cli-blue">[Function]</span>,
        isWeakSet: <span class="cli-blue">[Function]</span>,
        isFinite: <span class="cli-blue">[Function]</span>,
        isNaN: <span class="cli-blue">[Function]</span>,
        isBoolean: <span class="cli-blue">[Function]</span>,
        is<strong style="color:#ffffff">null</strong>: <span class="cli-blue">[Function]</span>,
        isUndefined: <span class="cli-blue">[Function]</span>,
        has: <span class="cli-blue">[Function]</span>,
        noConflict: <span class="cli-blue">[Function]</span>,
        identity: <span class="cli-blue">[Function]</span>,
        constant: <span class="cli-blue">[Function]</span>,
        noop: <span class="cli-blue">[Function]</span>,
        property: <span class="cli-blue">[Function]</span>,
        propertyOf: <span class="cli-blue">[Function]</span>,
        matches: <span class="cli-blue">[Function]</span>,
        matcher: <span class="cli-blue">[Function]</span>,
        times: <span class="cli-blue">[Function]</span>,
        random: <span class="cli-blue">[Function]</span>,
        now: <span class="cli-blue">[Function: now]</span>,
        escape: <span class="cli-blue">[Function]</span>,
        unescape: <span class="cli-blue">[Function]</span>,
        result: <span class="cli-blue">[Function]</span>,
        uniqueId: <span class="cli-blue">[Function]</span>,
        templateSettings:
         { evaluate: <span class="cli-red">/<%([\s\S]+?)%>/g</span>,
           interpolate: <span class="cli-red">/<%=([\s\S]+?)%>/g</span>,
           escape: <span class="cli-red">/<%-([\s\S]+?)%>/g</span> },
        template: <span class="cli-blue">[Function]</span>,
        chain: <span class="cli-blue">[Function]</span>,
        mixin: <span class="cli-blue">[Function]</span> },
     BN:
      { [Function: BN]
        BN: <span class="cli-blue">[Circular]</span>,
        wordSize: <span class="cli-yellow">26</span>,
        isBN: <span class="cli-blue">[Function: isBN]</span>,
        max: <span class="cli-blue">[Function: max]</span>,
        min: <span class="cli-blue">[Function: min]</span>,
        red: <span class="cli-blue">[Function: red]</span>,
        _prime: <span class="cli-blue">[Function: prime]</span>,
        mont: <span class="cli-blue">[Function: mont]</span> },
     isBN: <span class="cli-blue">[Function: isBN]</span>,
     isBigNumber: <span class="cli-blue">[Function: isBigNumber]</span>,
     isHex: <span class="cli-blue">[Function: isHex]</span>,
     isHexStrict: <span class="cli-blue">[Function: isHexStrict]</span>,
     sha3:
      { [Function: sha3]
        _Hash:
         { keccak256: <span class="cli-blue">[Function]</span>,
           keccak512: <span class="cli-blue">[Function]</span>,
           keccak256s: <span class="cli-blue">[Function]</span>,
           keccak512s: <span class="cli-blue">[Function]</span> } },
     sha3Raw: <span class="cli-blue">[Function: sha3Raw]</span>,
     keccak256:
      { [Function: sha3]
        _Hash:
         { keccak256: <span class="cli-blue">[Function]</span>,
           keccak512: <span class="cli-blue">[Function]</span>,
           keccak256s: <span class="cli-blue">[Function]</span>,
           keccak512s: <span class="cli-blue">[Function]</span> } },
     soliditySha3: <span class="cli-blue">[Function: soliditySha3]</span>,
     soliditySha3Raw: <span class="cli-blue">[Function: soliditySha3Raw]</span>,
     isAddress: <span class="cli-blue">[Function: isAddress]</span>,
     checkAddressChecksum: <span class="cli-blue">[Function: checkAddressChecksum]</span>,
     toChecksumAddress: <span class="cli-blue">[Function: toChecksumAddress]</span>,
     toHex: <span class="cli-blue">[Function: toHex]</span>,
     toBN: <span class="cli-blue">[Function: toBN]</span>,
     bytesToHex: <span class="cli-blue">[Function: bytesToHex]</span>,
     hexToBytes: <span class="cli-blue">[Function: hexToBytes]</span>,
     hexToNumberString: <span class="cli-blue">[Function: hexToNumberString]</span>,
     hexToNumber: <span class="cli-blue">[Function: hexToNumber]</span>,
     toDecimal: <span class="cli-blue">[Function: hexToNumber]</span>,
     numberToHex: <span class="cli-blue">[Function: numberToHex]</span>,
     fromDecimal: <span class="cli-blue">[Function: numberToHex]</span>,
     hexToUtf8: <span class="cli-blue">[Function: hexToUtf8]</span>,
     hexToString: <span class="cli-blue">[Function: hexToUtf8]</span>,
     toUtf8: <span class="cli-blue">[Function: hexToUtf8]</span>,
     utf8ToHex: <span class="cli-blue">[Function: utf8ToHex]</span>,
     stringToHex: <span class="cli-blue">[Function: utf8ToHex]</span>,
     fromUtf8: <span class="cli-blue">[Function: utf8ToHex]</span>,
     hexToAscii: <span class="cli-blue">[Function: hexToAscii]</span>,
     toAscii: <span class="cli-blue">[Function: hexToAscii]</span>,
     asciiToHex: <span class="cli-blue">[Function: asciiToHex]</span>,
     fromAscii: <span class="cli-blue">[Function: asciiToHex]</span>,
     unitMap:
      { noether: <span class="cli-green">'0'</span>,
        wei: <span class="cli-green">'1'</span>,
        kwei: <span class="cli-green">'1000'</span>,
        Kwei: <span class="cli-green">'1000'</span>,
        babbage: <span class="cli-green">'1000'</span>,
        femtoether: <span class="cli-green">'1000'</span>,
        mwei: <span class="cli-green">'1000000'</span>,
        Mwei: <span class="cli-green">'1000000'</span>,
        lovelace: <span class="cli-green">'1000000'</span>,
        picoether: <span class="cli-green">'1000000'</span>,
        gwei: <span class="cli-green">'1000000000'</span>,
        Gwei: <span class="cli-green">'1000000000'</span>,
        shannon: <span class="cli-green">'1000000000'</span>,
        nanoether: <span class="cli-green">'1000000000'</span>,
        nano: <span class="cli-green">'1000000000'</span>,
        szabo: <span class="cli-green">'1000000000000'</span>,
        microether: <span class="cli-green">'1000000000000'</span>,
        micro: <span class="cli-green">'1000000000000'</span>,
        finney: <span class="cli-green">'1000000000000000'</span>,
        milliether: <span class="cli-green">'1000000000000000'</span>,
        milli: <span class="cli-green">'1000000000000000'</span>,
        ether: <span class="cli-green">'1000000000000000000'</span>,
        kether: <span class="cli-green">'1000000000000000000000'</span>,
        grand: <span class="cli-green">'1000000000000000000000'</span>,
        mether: <span class="cli-green">'1000000000000000000000000'</span>,
        gether: <span class="cli-green">'1000000000000000000000000000'</span>,
        tether: <span class="cli-green">'1000000000000000000000000000000'</span> },
     toWei: <span class="cli-blue">[Function: toWei]</span>,
     fromWei: <span class="cli-blue">[Function: fromWei]</span>,
     padLeft: <span class="cli-blue">[Function: leftPad]</span>,
     leftPad: <span class="cli-blue">[Function: leftPad]</span>,
     padRight: <span class="cli-blue">[Function: rightPad]</span>,
     rightPad: <span class="cli-blue">[Function: rightPad]</span>,
     toTwosComplement: <span class="cli-blue">[Function: toTwosComplement]</span>,
     isBloom: <span class="cli-blue">[Function: isBloom]</span>,
     isUserEthereumAddressInBloom: <span class="cli-blue">[Function: isUserEthereumAddressInBloom]</span>,
     isContractAddressInBloom: <span class="cli-blue">[Function: isContractAddressInBloom]</span>,
     isTopic: <span class="cli-blue">[Function: isTopic]</span>,
     isTopicInBloom: <span class="cli-blue">[Function: isTopicInBloom]</span>,
     isInBloom: <span class="cli-blue">[Function: isInBloom]</span> },
  modules:
   { Eth:
      { [Function: Eth]
        givenProvider: <strong style="color:#ffffff">null</strong>,
        providers:
         { WebsocketProvider: <span class="cli-blue">[Function: WebsocketProvider]</span>,
           HttpProvider: <span class="cli-blue">[Function: HttpProvider]</span>,
           IpcProvider: <span class="cli-blue">[Function: IpcProvider]</span> } },
     Net:
      { [Function: Net]
        givenProvider: <strong style="color:#ffffff">null</strong>,
        providers:
         { WebsocketProvider: <span class="cli-blue">[Function: WebsocketProvider]</span>,
           HttpProvider: <span class="cli-blue">[Function: HttpProvider]</span>,
           IpcProvider: <span class="cli-blue">[Function: IpcProvider]</span> } },
     Personal:
      { [Function: Personal]
        givenProvider: <strong style="color:#ffffff">null</strong>,
        providers:
         { WebsocketProvider: <span class="cli-blue">[Function: WebsocketProvider]</span>,
           HttpProvider: <span class="cli-blue">[Function: HttpProvider]</span>,
           IpcProvider: <span class="cli-blue">[Function: IpcProvider]</span> } },
     Shh:
      { [Function: Shh]
        givenProvider: <strong style="color:#ffffff">null</strong>,
        providers:
         { WebsocketProvider: <span class="cli-blue">[Function: WebsocketProvider]</span>,
           HttpProvider: <span class="cli-blue">[Function: HttpProvider]</span>,
           IpcProvider: <span class="cli-blue">[Function: IpcProvider]</span> } },
     Bzz: { [Function: Bzz] givenProvider: <strong style="color:#ffffff">null</strong> } },
  givenProvider: <strong style="color:#ffffff">null</strong>,
  providers:
   { WebsocketProvider: <span class="cli-blue">[Function: WebsocketProvider]</span>,
     HttpProvider: <span class="cli-blue">[Function: HttpProvider]</span>,
     IpcProvider: <span class="cli-blue">[Function: IpcProvider]</span> } }
</pre>