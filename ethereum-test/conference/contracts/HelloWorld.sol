pragma solidity ^0.4.23;


contract HelloWorld {
    function sayHello() public constant returns (string){
        return ("hello world!"); 
    }


    function greeting(string name) public constant returns (string){
        return (name);
    }

}
