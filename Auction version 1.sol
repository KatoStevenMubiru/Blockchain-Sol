pragma solidity ^0.4.17;

contract Auction {

    // Data
    // Structure to hold details of the item
    struct Item {
        uint itemId; // id of the item
        uint[] itemTokens;  // tokens bid in favor of the item
    }

    // Structure to hold the details of a person
    struct Person {
        uint remainingTokens; // tokens remaining with bidder
        uint personId; // it serves as tokenId as well
        address addr; // address of the bidder
    }

    mapping(address => Person) tokenDetails; // address to person
    Person[4] bidders; // Array containing 4 person objects

    Item[3] public items; // Array containing 3 item objects
    address[3] public winners; // Array for the addresses of winners
    address public beneficiary; // owner of the smart contract

    uint bidderCount = 0; // counter

    // Constructor
    function Auction() public payable {
        beneficiary = msg.sender;
        uint[] memory emptyArray;
        items[0] = Item({ itemId: 0, itemTokens: emptyArray });
        items[1] = Item({ itemId: 1, itemTokens: emptyArray });
        items[2] = Item({ itemId: 2, itemTokens: emptyArray });
    }

    function register() public payable {
        bidders[bidderCount].personId = bidderCount;
        bidders[bidderCount].addr = msg.sender;
        bidders[bidderCount].remainingTokens = 5; // only 5 tokens
        tokenDetails[msg.sender] = bidders[bidderCount];
        bidderCount++;
    }

    function bid(uint _itemId, uint _count) public payable {
        // Part 1 Task 4. Implement the three conditions below.
        require(tokenDetails[msg.sender].remainingTokens >= _count);
        require(tokenDetails[msg.sender].remainingTokens > 0);
        require(_itemId < 3);

        uint balance = tokenDetails[msg.sender].remainingTokens - _count;

        for (uint i = 0; i < _count; i++) {
            items[_itemId].itemTokens.push(tokenDetails[msg.sender].personId);
        }

        tokenDetails[msg.sender].remainingTokens = balance;
        winners[_itemId] = msg.sender;
    }

    function revealWinners() public pure  {
        // Implement the logic to reveal winners here
        // This function is not complete in the provided code
    }

    // Miscellaneous methods: Below methods are used to assist the above functions to accomplish the tasks.

    function getPersonDetails(uint id) public view returns (uint, uint, address) {
        return (bidders[id].remainingTokens, bidders[id].personId, bidders[id].addr);
    }
}
