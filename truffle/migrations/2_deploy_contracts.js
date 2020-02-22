var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var Score = artifacts.require("./Score.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(Score);
};
