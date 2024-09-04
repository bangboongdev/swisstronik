// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";

contract TestNFT is ERC721, ERC721Burnable {
    constructor() ERC721("chien", "CHIEN") {}

    function safeMint(address to, uint256 tokenId) public {
        _safeMint(to, tokenId);
    }
}
