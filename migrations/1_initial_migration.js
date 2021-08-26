const TheToken = artifacts.require("TheToken");

module.exports = function (deployer) {
  deployer.deploy(TheToken);
};
