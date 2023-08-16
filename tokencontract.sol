pragma solidity ^0.8.19;

contract Token {
  mapping(address => uint) public balances;

  function transfer(address to, uint amount) public {
    require(balances[msg.sender] >= amount);
    balances[msg.sender] -= amount;
    balances[to] += amount;
  }
}