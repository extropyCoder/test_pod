# The Web3 modules

We have already seen that web3 contains a module called `utils`. Let's now have a look at the other different modules available.

```javascript
var modules = Web3.modules
console.log(modules)
```

<pre>
{ Eth:
   { [Function: Eth]
     givenProvider: null,
     providers:
      { WebsocketProvider: [Function: WebsocketProvider],
        HttpProvider: [Function: HttpProvider],
        IpcProvider: [Function: IpcProvider] } },
  Net:
   { [Function: Net]
     givenProvider: null,
     providers:
      { WebsocketProvider: [Function: WebsocketProvider],
        HttpProvider: [Function: HttpProvider],
        IpcProvider: [Function: IpcProvider] } },
  Personal:
   { [Function: Personal]
     givenProvider: null,
     providers:
      { WebsocketProvider: [Function: WebsocketProvider],
        HttpProvider: [Function: HttpProvider],
        IpcProvider: [Function: IpcProvider] } },
  Shh:
   { [Function: Shh]
     givenProvider: null,
     providers:
      { WebsocketProvider: [Function: WebsocketProvider],
        HttpProvider: [Function: HttpProvider],
        IpcProvider: [Function: IpcProvider] } },
  Bzz: { [Function: Bzz] givenProvider: null } }
</pre>

Aside from the `utils` module, Web3 contains 4 other modules

- Eth: Interact with the Ethereum network, blockchain and smart contracts.
- Shh: Interact with the whisper protocol for p2p communications and broadcast
- Bzz: Interact with the swarm network, the decentralized file storage
- Personal: Interact with the Ethereum accounts

In this tutorial, we will use the `web3.eth` module to interact with our smart contract