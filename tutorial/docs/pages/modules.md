# The Web3 modules

We have already seen that web3 contains a module called `utils`. Let's now have a look at the other different modules available.

```
let modules = Web3.modules
console.log(modules)
```

Aside from the `utils` module, Web3 can be broken down into multiple other modules

- Utils: contains useful helper functions for DApp developers
- Eth: Interact with the Ethereum network, blockchain and smart contracts.
- Shh: Interact with the whisper protocol for p2p communications and broadcast
- Bzz: Interact with the swarm network, the decentralized file storage
- Personal: Interact with the Ethereum accounts