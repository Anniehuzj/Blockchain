// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract SimpleDappExample {

    uint256 public num;

    // string[] public messages;


    function getNum() public view returns (uint256) {
        return num;
    }

    function setNum(uint256 _num) public {
        num = _num;
    }
}