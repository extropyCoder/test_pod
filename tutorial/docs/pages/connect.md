# Connect to a blockchain

Running `web3.providers` will return the following provider.
You can also return the current provider using this method:

```
web3.currentProvider
```

You have three ways to connect to an Ethereum node

## Injected Web3

A given provider is provided via **injected web3**. For instance, Metamask via the browser.

```
new Web3(Web3.givenProvider)
```

If you have Metamask installed on your browser, check first the `givenProvider`. If this property is `null`, you should connect to a remote / local node.

```javascript
// use the given Provider, e.g in the browser with Metamask, or instantiate a new websocket provider
const web3 = new Web3(Web3.givenProvider || 'ws://localhost:8546', null, {});
```


## Remote WebSocket

The `WebsocketProvider` is the standard for usage in legacy browsers. For instance, if you wish to connect to an Infura node.

```
new Web3.providers.WebsocketProvider('wss://mainnet.infura.io/ws/v3/YOUR-PROJECT-ID')
```

## Local IPC Socket

The `IPCProvider` is used node.js dapps when running a local node, like the **geth client**. It gives the most secure connection


```
// Using the IPC provider in node.js
var net = require('net');

var web3 = new Web3('/Users/myuser/Library/Ethereum/geth.ipc', net); // mac os path
// or
var web3 = new Web3(new Web3.providers.IpcProvider('/Users/myuser/Library/Ethereum/geth.ipc', net)); // mac os path
// on windows the path is: "\\\\.\\pipe\\geth.ipc"
// on linux the path is: "/users/myuser/.ethereum/geth.ipc"
```
