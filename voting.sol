pragma solidity ^0.8.19;

contract Voting{
    struct Voter{
    bool voted;
    uint vote;
}

mapping(address => Voter ) public voters;
uint public candidateCount;
mapping(uint => address) public candidates;

event Voted(address indexed voter, uint indexed candidate);

constructor(uint _candidateCount) public{
    candidateCount = _candidateCount;
    for(uint i = 0; i < candidateCount; i++){
        candidates[i] = address(0);
    }
}

function vote(uint candidate) public{
    require(!voters[msg.sender].voted);
    voters[msg.sender].vote = candidate;
    emit Voted(msg.sender, candidate);

}

function getWinner() public view returns (address){
    uint maxVoters = 0;
    address winner = address(0);
    for(uint i = 0; i < candidateCount; i++){
        if(voters[i].vote > maxVoters){
            maxVoters = voters[i].vote;
            winner = candidates[i];
        }
    }
    return winner;
  } 
}