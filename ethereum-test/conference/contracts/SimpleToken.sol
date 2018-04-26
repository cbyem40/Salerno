pragma solidity ^0.4.23;


contract SimpleToken {
    uint256 INITIAL_BALANCE = 100;
    mapping(address => uint256) balance;
    event ProcessTransfer(address _from, address _to, uint256 amount);  
  
    constructor () {
        balance[msg.sender] = INITIAL_BALANCE;
    }
    
    function transfer (address _to, uint256 _amount) public {
        require(balance[msg.sender] > _amount);
        balance[msg.sender] -= _amount;
        balance[_to] += _amount;
        emit ProcessTransfer(msg.sender, _to, _amount);
    }
  
    function getBalance(address _owner) public constant returns (uint256){
        return balance[_owner];
    }
}
