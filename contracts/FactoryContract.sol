//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./ChildContract.sol";

contract FactoryContract {
    ChildContract[] public children;
    uint disabledCount;

    event ChildCreated(address childAddress, uint data);

    function createChild(uint data) external {
      ChildContract child = new ChildContract(data, children.length);
      children.push(child);
      emit ChildCreated(address(child), data);
    }
}