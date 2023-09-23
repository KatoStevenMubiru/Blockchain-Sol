//key value pairs in solidity 

pragma solidity >=0.7.0 <0.9.0;

contract Map1{
   /* mapping(uint => bool) map;*/
   mapping(uint => mapping(uint => int)) map;
      
function addItem(uint key, bool value ) public{
    map[key] = value;
}
function getKey(uint key) public view returns(bool){
    return map[key];

}

}
