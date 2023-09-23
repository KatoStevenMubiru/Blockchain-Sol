//key value pairs in solidity 

pragma solidity >=0.7.0 <0.9.0;

contract Map1{
   /* mapping(uint => bool) map;*/
   mapping(uint => mapping(uint => int)) map;
      
function addItem(uint key , uint key2, int value ) public{
    map[key][key2] = value;
}
function getKey(uint key, uint key2) public view returns(int){
    return map[key][key2];

}

}
