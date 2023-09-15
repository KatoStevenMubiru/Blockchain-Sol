pragma solidity >=0.7.0 <0.9.0;

contract HelloWorld{
address owner;

constructor(){
    owner = msg.sender;
}

modifier onlyOwner{
    require(msg.sender == owner);
    _;
}

function test1() public view onlyOwner returns (uint){
    return 1;
}
function test2() public view onlyOwner returns(uint){
    return 1;
}

}