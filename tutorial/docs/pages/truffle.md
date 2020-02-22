# Using truffle

We are going to get started with truffle, using gitpod.

1. Go to the repository
2. Click on the GitPod button

You might now be in a sandbox environment. We have prepared a simple dapp for you to learn web3, interact directly with the smart contract and see what happen in realtime.

1. Go to the folder

```
cd truffle
```

Firstly, we need to run our local blockchain. Run `truffle` in development mode in the CLI.

```
truffle develop
```

We are now going to compile our smart contract `score.sol`, and migrate it (= deploy) to our local blockchain.

```
truffle(develop) > compile
truffle(develop) > migrate
```

In the seperate CLI, run your react application.

```
cd Truffle/client
npm run start
```

If you have Metamask, you will be prompted to login to Metamask.
After doing that, select the network `localhost:8545`. **This is the local network where we are running our local blockchain**