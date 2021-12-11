//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract ChildContract {
    uint data;
    bool public isEnabled;
    uint public index;

    event ChildUpdated(address childAddress, uint data);

    constructor(uint _data, uint _index){
       data = _data;
       isEnabled = true;
       index = _index;
    }

    function updateChild(uint _data) public {
        data = _data;
        emit ChildUpdated(address(this), data);
    }
}