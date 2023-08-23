pragma solidity ^0.8.0;

contract Shipping{
 const truffleAssert = require('truffle-assertions');
 enum ShippingStatus {Pending, Shipped, Delivered}

 ShippingStatus private status;

 event LogNewAlert(string description);

 constructor() public{
    status = ShippingStatus.Pending;
 }

 function Shipped() public{
    status = ShippingStatus.Shipped;

   emit LogNewAlert("Your pacakage has been shipped");


 }

 function Delivered() public{
    status = ShippingStatus.Delivered;

   emit  LogNewAlert("You package has been delivered");
 }

 function getStatus(ShippingStatus _status) internal pure returns(string memory){
    if(ShippingStatus.Pending == _status) return "Pending";
    if(ShippingStatus.Delivered == _status) return "Delivered";
    if(ShippingStatus.Shipped == _status) return "Shipped";

 }

 function Status() public view returns(string memory){
    ShippingStatus _status = status;
    return getStatus(_status);
 }



}