pragma solidity ^0.6.0;

contract simpleStorage{

    uint favouriteNo;

    function store(uint _favouriteNo) public{
        favouriteNo = _favouriteNo;
    }

    function retrieve() public   view returns(uint256){
              
              return favouriteNo;
    }
}