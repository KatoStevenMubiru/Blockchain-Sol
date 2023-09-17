pragma solidity ^0.8.0

contact Moddy{
    uint public bal;
    address public owner

    constructor(){
        owner = msg.sender;
        balance = msg.value;
    }
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function.");
        _; // Continue executing the function after passing the modifier check
    }

    function deposit() public payable{
        require(msg.sender == owner, "You are the only owner");
        balance += msg.value;
    }
}