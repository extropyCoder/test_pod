
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

