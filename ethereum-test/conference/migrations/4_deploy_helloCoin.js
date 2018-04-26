var HelloCoin = artifacts.require('HelloToken')

module.exports = function(deployer){
  deployer.deploy(HelloCoin);
}
