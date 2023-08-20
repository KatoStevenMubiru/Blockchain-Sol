//pragma solidity ^0.8.0;

contract simpleStorage{

    uint256 favouriteNo;

    struct People{
        uint256 favouriteNo;
        string name;
    }

    function store(uint256 _favouriteNo) public{
        favouriteNo = _favouriteNo;
    }

    function retrieve() public   view returns(uint256){
              
              return favouriteNo;
    }
}