# Using truffle

We are going to get started with truffle. 

<img src="https://camo.githubusercontent.com/7240582453539ece449f39250a2b063427c83375/68747470733a2f2f74727566666c656672616d65776f726b2e636f6d2f696d672f74727566666c652d6c6f676f2d6461726b2e737667" width="10%">

## What is Truffle?

Truffle is a developer tool used to :
- develop and test smart contracts via unit testing
- build Dapps by connecting your front-end to the Dapps via the web3 library.

```
// need a better explanation of Truffle + picture
```

Let's have a look at the commands available in truffle. Run the command below in the GitPod CLI.

```
truffle --help
```

We have highlighted the main commands that we will use.

<pre style="background-color: #1A2E39; color: #E2E2E2; padding: 2%">
Truffle v5.1.14 - a development framework for Ethereum

Usage: truffle <command> [options]

Commands:
  build     Execute build pipeline (if configuration present)
  <b style="color: #958168">compile</b>   Compile contract source files
  config    Set user-level configuration options
  console   Run a console with contract abstractions and commands available
  create    Helper to create new contracts, migrations and tests
  debug     Interactively debug any transaction on the blockchain (experimental)
  deploy    (alias for migrate)
  <b style="color: #958168">develop</b>   Open a console with a local development blockchain
  exec      Execute a JS module within this Truffle environment
  help      List all commands or provide information about a specific command
  init      Initialize new and empty Ethereum project
  install   Install a package from the Ethereum Package Registry
  <b style="color: #958168">migrate</b>   Run migrations to deploy contracts
  networks  Show addresses for deployed contracts on each network
  obtain    Fetch and cache a specified compiler
  opcode    Print the compiled opcodes for a given contract
  publish   Publish a package to the Ethereum Package Registry
  run       Run a third-party command
  test      Run JavaScript and Solidity tests
  unbox     Download a Truffle Box, a pre-built Truffle project
  version   Show version number and exit
  watch     Watch filesystem for changes and rebuild the project automatically

See more at http://truffleframework.com/docs
</pre>


## Building our Dapp

To build a full featured Dapp, we can split our work into a 3 step process:

|Step 1|Step 2|Step 3|
|:-----:|:-----:|:-----:|
|Run a local blockchain|Build a Front-End dapp|Connect with Web3|

