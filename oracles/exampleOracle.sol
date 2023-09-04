// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";

contract WeatherOracle is ChainlinkClient {
    using Chainlink for Chainlink.Request;
    
    string public weatherData;
    address public owner;
    
    // Chainlink-specific variables
    address public oracle;
    bytes32 public jobId;
    uint256 public fee;

    constructor() {
        setPublicChainlinkToken();
        owner = msg.sender;
        
        // Replace with your Chainlink oracle details
        oracle = 0x0;  // Oracle address
        jobId = bytes32(0); // Job ID
        fee = 0.1 * 10 ** 18; // 0.1 LINK (LINK is the Chainlink token)
    }

    function requestWeatherData(string memory _location) public {
        require(msg.sender == owner, "Only the owner can request data.");
        
        Chainlink.Request memory request = buildChainlinkRequest(jobId, address(this), this.fulfill.selector);
        request.add("get", "https://api.example.com/weather"); // Replace with your API endpoint
        request.add("queryParams", "location=_location");
        request.add("path", "data.result"); // Replace with the path to the data you want
        
        sendChainlinkRequestTo(oracle, request, fee);
    }

    function fulfill(bytes32 _requestId, string memory _weatherData) public recordChainlinkFulfillment(_requestId) {
        weatherData = _weatherData;
    }
}
