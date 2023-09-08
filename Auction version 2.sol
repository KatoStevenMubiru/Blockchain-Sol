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
        // Part 1 Task 1. Initialize beneficiary with the address of the smart contract’s owner
        // Hint. In the constructor, "msg.sender" is the address of the owner.
        beneficiary = msg.sender;
        uint[] memory emptyArray;
        items[0] = Item({ itemId: 0, itemTokens: emptyArray });

        // Part 1 Task 2. Initialize two items with indices 1 and 2.
        items[1] = Item({ itemId: 1, itemTokens: emptyArray });
        items[2] = Item({ itemId: 2, itemTokens: emptyArray });
    }

    function register() public payable {
        bidders[bidderCount].personId = bidderCount;

        // Part 1 Task 3. Initialize the address of the bidder
        // Hint. Here the bidders[bidderCount].addr should be initialized with the address of the registrant.
        bidders[bidderCount].addr = msg.sender;

        bidders[bidderCount].remainingTokens = 5; // only 5 tokens
        tokenDetails[msg.sender] = bidders[bidderCount];
        bidderCount++;
    }

    function bid(uint _itemId, uint _count) public payable {
        /*
            Bids tokens to a particular item.
            Arguments:
            _itemId -- uint, id of the item
            _count -- uint, count of tokens to bid for the item
        */

        // Part 1 Task 4. Implement the three conditions below.
        // 4.1 If the number of tokens remaining with the bidder is < count of tokens bidded, revert.
        // 4.2 If there are no tokens remaining with the bidder, revert.
        // 4.3 If the id of the item for which bid is placed is greater than 2, revert.

        if (tokenDetails[msg.sender].remainingTokens < _count) {
            revert();
        } else if (tokenDetails[msg.sender].remainingTokens == 0) {
            revert();
        } else if (_itemId > 2) {
            revert();
        }

        // Part 1 Task 5. Decrement the remainingTokens by the number of tokens bid and store the value in the balance variable.
        uint balance = tokenDetails[msg.sender].remainingTokens - _count;

        // Part 1 Task 6. "items[_itemId].itemTokens.push(bid);" will add the 'count' number of times the
        // msg.sender address to "itemTokens" array at the index "_itemId".
        for (uint i = 0; i < _count; i++) {
            items[_itemId].itemTokens.push(tokenDetails[msg.sender].personId);
        }

        // Part 1 Task 7. Add the address of the bidder to the winners array who placed the bid.
        tokenDetails[msg.sender].remainingTokens = balance; // updating the same balance in bidders map.
        winners[_itemId] = msg.sender;
    }

    function revealWinners() public {
        /*
        Iterate over all the items present in the auction.
        If at least one person has placed a bid, randomly select a winner.
        Random number generation logic:
        Example:
        1. block.number modulo 2. Suppose this expression returns 0, then add 1. So, the expression becomes 1.
        2. block.number modulo 1. This expression will return 0.
        3. block.number modulo 0. This expression will return 0.
        */

        for (uint id = 0; id < 3; id++) {
            uint randomIndex = (block.number / id) % 2;
            uint count = 0;

            for (uint i = 0; i < bidders.length; i++) {
                if (items[id].itemTokens.length != 0) {
                    count++;
                    if (randomIndex == 0) {
                        winners[id] = bidders[i].addr;
                    } else {
                        winners[id] = bidders[bidders.length - 1 - i].addr;
                    }
                }
            }
        }
    }

    // Miscellaneous methods: Below methods are used to assist the above functions to accomplish the tasks.

    function getPersonDetails(uint id) public view returns (uint, uint, address) {
        return (bidders[id].remainingTokens, bidders[id].personId, bidders[id].addr);
    }
}
