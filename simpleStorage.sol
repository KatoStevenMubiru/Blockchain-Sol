pragma solidity ^0.6.0;

contract simpleStorage{

    uint256 favouriteNo;

    function store(uint256 _favouriteNo) public{
        favouriteNo = _favouriteNo;
    }

    function retrieve() public   view returns(uint256){
              
              return favouriteNo;
    }
}