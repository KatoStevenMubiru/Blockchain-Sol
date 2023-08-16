pragma solidity ^0.8.19;

//pragma solidity ^0.8.0;

contract Crowdfunding {
    address payable public owner;
    uint public goal;
    uint public raised;

    event Funded(address indexed sender, uint amount);

    constructor(uint _goal) {
        owner = payable(msg.sender);
        goal = _goal;
    }

    function contribute() public payable {
        raised += msg.value;
        emit Funded(msg.sender, msg.value);
    }

    function withdraw() public {
        require(raised >= goal, "Goal not reached");
        owner.transfer(raised);
        raised = 0;
    }
}
