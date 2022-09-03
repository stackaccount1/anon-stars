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
    uint256 public id;

    struct Profile {
        string username;
        bytes32 profilePictureUrl;
        string descriptionOfSkills;
        bytes32 resumeLink;
    }

    Profile[] public profiles;

    mapping(uint256 => address) public profileToOwner;
    mapping(uint256 => address) public endorsements;

    // *many
    //Events
    event NewProfileGenerated(
        uint256 id,
        string username,
        bytes32 profilePictureUrl,
        string descriptionOfSkills,
        bytes32 resumeLink
    );

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
        id = 0;
    }

    //recieve
    //fallback
    //external
    //public
    function createProfile(
        string memory _username,
        bytes32 _profilePictureUrl,
        string memory _descriptionOfSkills,
        bytes32 _resumeLink
    ) public {
        id++;
        profiles.push(Profile(_username, _profilePictureUrl, _descriptionOfSkills, _resumeLink));
        profileToOwner[id] = msg.sender;
        emit NewProfileGenerated(
            id,
            _username,
            _profilePictureUrl,
            _descriptionOfSkills,
            _resumeLink
        );
    }
    //internal
    //private
    //view / pure
}
