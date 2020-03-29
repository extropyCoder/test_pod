# The Web3 modules

We have already seen that web3 contains a module called `utils`. Let's now have a look at the other different modules available.

```javascript
var modules = Web3.modules
console.log(modules)
```

<pre class="extropy-codeblock">
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

Aside from the `utils` module, Web3 contains 4 other modules

- Eth: Interact with the Ethereum network, blockchain and smart contracts.
- Shh: Interact with the whisper protocol for p2p communications and broadcast
- Bzz: Interact with the swarm network, the decentralized file storage
- Personal: Interact with the Ethereum accounts

In this tutorial, we will use the `web3.eth` module to interact with our smart contract