// SPDX-License-Identifier: MIT
// FeverTokens Contracts v1.0.0

pragma solidity ^0.8.17;

import { EIP712 } from "./EIP712.sol";

contract EIP712Mock {
    function calculateDomainSeparator(
        bytes32 nameHash,
        bytes32 versionHash
    ) external view returns (bytes32) {
        return EIP712.calculateDomainSeparator(nameHash, versionHash);
    }
}
