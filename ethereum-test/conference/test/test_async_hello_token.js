var HelloToken = artifacts.require('HelloToken');

const INITIAL_SUPPLY = 1000;

contract('HelloToken', function(accounts){
  it ("should met the initial supply", async function(){
      let contract = await HelloToken.deployed();
      let total_supply = await contract.totalSupply.call();
      let sender_balance = await contract.balanceOf(accounts[0]);
      
      assert.equal(total_supply, INITIAL_SUPPLY);
      assert.equal(sender_balance, INITIAL_SUPPLY);
  });

  it ("should met account balance", async function(){
      const TRANSFER_AMOUNT = 200;
      let contract = await HelloToken.deployed();
      let account0_balance = await contract.balanceOf(accounts[0]);
      let account1_balance = await contract.balanceOf(accounts[1]);

      assert.equal(account0_balance, INITIAL_SUPPLY);
      assert.equal(account1_balance, 0);

      await contract.transfer(accounts[1], TRANSFER_AMOUNT);
      account0_balance = await contract.balanceOf(accounts[0]);
      account1_balance = await contract.balanceOf(accounts[1]);

      assert.equal(account0_balance, INITIAL_SUPPLY - TRANSFER_AMOUNT );
      assert.equal(account1_balance, TRANSFER_AMOUNT);
  });

});