pragma solidity ^0.4.23;
import "../node_modules/zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract HelloToken is StandardToken {
    string public name = "HelloToken";
    string public symbol = "H@";
    uint8 public decimal = 2;
    uint256 public INITIAL_SUPPLY = 1000;
  
    function HelloToken() public {
        totalSupply_ = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
    }
}
