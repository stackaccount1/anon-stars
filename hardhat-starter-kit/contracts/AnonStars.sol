// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

// 3. Interfaces, Libraries, Contracts, Errors
//error error_notenougheth();
error YouAreNotThatGuy_Owner();

/**@title anon stars main contract
 * @author Stackaccount1
 * @notice This contract is for creating an profile, and endorsing others, must lock money to endorse to prevent spam, payment is sent back over a long period
 * @dev This implements price feeds as our library
 */

contract AnonStars {
    //Type Declarations
    // *price converter
    //State Variables
    address private immutable i_owner;
    // *many
    //Events
    //Modifiers
    modifier onlyOwner() {
        // require(msg.sender == i_owner);
        if (msg.sender != i_owner) revert YouAreNotThatGuy_Owner();
        _;
    }

    // *owner modifier
    //Functions
    // *create profile - maybe superfluid send stake fee back over time, or time lock stake with VRF
    // *endorse profile - maybe superfluid send stake fee back over time, or time lock stake with VRF
    //constructor
    constructor() {
        i_owner = msg.sender;
    }
    //recieve
    //fallback
    //external
    //public
    //internal
    //private
    //internal
    //private
    //view / pure
}
