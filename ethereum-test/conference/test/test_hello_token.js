var HelloToken = artifacts.require('HelloToken');

const INITIAL_SUPPLY = 1000;
let _totalSupply;

contract('HelloToken', function(accounts){
  it("should met initial supply", function(){
    var contract;
    HelloToken.deployed().then((instance) => {
      contract = instance;
      return contract.totalSupply.call();
    }).then((totalSupply) => {
      _totalSupply = totalSupply;
      assert.equal(totalSupply.toNumber(), INITIAL_SUPPLY);
      return contract.balanceOf(accounts[0]);
    }).then((balance)=> {
      assert.equal(balance.toNumber(), _totalSupply.toNumber());
    });
  });
});