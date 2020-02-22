# Low levels calls

The methods of this smart contract are available through:

- The name: myContract.methods.myMethod(123)
- The name with parameters: myContract.methods['myMethod(uint256)'](123)
- The signature: myContract.methods['0x58cf5f10'](123)

This allows calling functions with same name but different parameters from the JavaScript contract object.