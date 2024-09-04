// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "./PERC20.sol";

contract PERC20Sample is PERC20 {
    constructor() PERC20("chien", "ch") {}

    function mint100tokens() public {
        _mint(msg.sender, 100 * 10 ** 18);
    }

    function balanceOf(address account) public view override returns (uint256) {
        require(msg.sender == account, "PERC20Sample: msg.sender != account");

        return _balances[account];
    }

    function allowance(
        address owner,
        address spender
    ) public view virtual override returns (uint256) {
        require(msg.sender == spender, "PERC20Sample: msg.sender != account");

        return _allowances[owner][spender];
    }
}
