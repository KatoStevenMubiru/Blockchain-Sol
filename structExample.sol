pragma solidity ^0.8.0;

contract structExample{
    struct Person{
        string name;
        uint age;
    }

    Person[] public people;

    function addPerson(string memory _name, uint _age) public{
        people.push(Person(_name,_age));
    }
    
}