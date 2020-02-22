import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './App.css';

import getWeb3 from "./getWeb3";
import ScoreContract from './contracts/Score.json';

class App extends Component {

  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  value = "hello world";

  extropy_logo_url = "https://extropy.io/img/logo_nav.svg";

  getBtn = (
      <Button onClick={this.getScore.bind(this)} variant="contained" color="secondary">Get Score</Button>
  );

  setBtn = (
      <Button onClick={this.setScore.bind(this)} variant="contained" color="primary">Set Score</Button>
  );

  scoreField = (
    <p>
        <form noValidate autoComplete="off">
            <TextField label="Enter your new score" variant="filled" />
        </form>
    </p>
  );

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = ScoreContract.networks[networkId];
      const instance = new web3.eth.Contract(
        ScoreContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.getScore().call({
      from: accounts[0]
    });

    // Update state with the result.
    this.setState({ storageValue: response });
  };

  getScore() {
    this.state.contract.methods.getScore().call(function(error, response) {

      console.log(response);
    
    });
  }

  setScore() {
    this.state.contract.methods.setScore(13).send({
      from: this.state.accounts[0]
    }, function(error, transactionHash) {
      if (error) {
        console.error("Failed: " + error);
      } else {
        window.alert("transaction hash is: " + transactionHash);
      }
    })
  }

  clickHappened() {
    window.alert("Click happened! ");
  }

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <header className="">
          <img src={this.extropy_logo_url} width="33%" className="App-logo" alt="logo"></img>
        </header>
        <h1>My Score contract</h1>
        <h2>
          Smart Contract Example by &nbsp;
          <a className="App-link" href="https://extropy.io" target="_blank" rel="noopener noreferrer">
            <code>Extropy.io</code>
          </a>     
        </h2>
        <p>
          <div>{this.scoreField}{this.getBtn}{this.setBtn}</div>
        </p>
        <div id="my-score">Current Score: {this.state.storageValue}</div>
        <p>
          Your current account is: {this.state.accounts[0]}
        </p> 
        <p>
          Web3 version: {this.state.web3.version}
        </p>
        <p>
          This contract is named: {this.state.contract.contractName}
        </p>
      </div>
    );
  }


}

export default App;
