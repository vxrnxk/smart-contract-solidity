pragma solidity ^0.8.9;
import "hardhat/console.sol";

contract Contract {
    string private message;

    constructor(string memory firstMessage) {
        console.log("Incoming message received: ", firstMessage);
        message = firstMessage;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }

    function setMessage(string memory newMessage) public {
        console.log(
            "New message received from '%s' to '%s'",
            message,
            newMessage
        );
        message = newMessage;
    }
}