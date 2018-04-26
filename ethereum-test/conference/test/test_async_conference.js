var Conference = artifacts.require('Conference');
const QUOTA = 10;

contract('Conference', function(accounts){
  it ("Check quota and registrantsNum", async function(){
    let contract = await Conference.deployed();
    let conference_quota = await contract.getQuota.call();
    let conference_registrants_count = await contract.getTicketSold.call();
    
    assert.equal(conference_quota.toNumber(), QUOTA);
    assert.equal(conference_registrants_count, 0);
  });

  it ("Check buyTicket and refundTicket", async function(){
    const QUANTITY = 5;
    
    let contract = await Conference.deployed();
    await contract.buyTicket(accounts[1], QUANTITY);
    let _sold = await contract.getTicketSold.call();
    assert.equal(_sold, QUANTITY);

    await contract.refundTicket(accounts[1], QUANTITY);
    let _after_refund = await contract.getTicketSold.call();
    assert.equal(0, _after_refund);

  })
});