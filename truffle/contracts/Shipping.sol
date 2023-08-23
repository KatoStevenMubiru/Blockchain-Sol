pragma solidity ^0.8.0;

contract Shipping{
 
 enum ShippingStatus {Pending, Shipped, Delivered};

 ShippingStatus private status;

 event LogNewAlert(string description);

 constructor() public{
    status = ShippingStatus.Pending;
 }

 function Shipped() public{
    status = ShippingStatus.Shipped;

    LogNewAlert("Your pacakage has been shipped");


 }

 function Delivered() public{
    status = ShippingStatus.Delivered;

    LogNewAlert("You package has been delivered");
 }



}