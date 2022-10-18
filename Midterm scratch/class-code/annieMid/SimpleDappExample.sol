// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
 
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
 
contract Bye is ERC20 {

    string[] public phrases;

    mapping(address => bool) public addressToEnterPhrases;

   constructor() ERC20("Bye", "Bye") {

    

}
function mint(uint256 amount) public {
        _mint(msg.sender, amount * 10 ** decimals());
    }

function getPhrases() public view returns (string[] memory) {

    return phrases;

}

function destroyedPhrase(string memory _inputPhrase) public{


//What phrase get entered 

//Put phrase into the Array
 

    require(addressToEnterPhrases[msg.sender] == false, "Already entered phrase");

    addressToEnterPhrases[msg.sender] = true;
  
    phrases.push(_inputPhrase);

    mint(1);

    }
}