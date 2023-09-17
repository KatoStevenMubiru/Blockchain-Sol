pragma solidity ^0.8.0

contact Moddy{
    uint public bal;
    address public owner

    constructor(){
        owner = msg.sender;
        balance = msg.value;

    }
    function deposit() public payable{
        require(msg.sender == owner, "You are the only owner");
        balance += msg.value;
    }
}