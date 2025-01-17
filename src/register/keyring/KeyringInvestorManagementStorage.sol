// SPDX-License-Identifier: MIT
// FeverTokens Contracts v1.0.0

pragma solidity ^0.8.17;

import {IKeyringInvestorManagementInternal} from "./IKeyringInvestorManagementInternal.sol";

library KeyringInvestorManagementStorage {
    struct Layout {
        address[] investorsList;
        mapping(address => IKeyringInvestorManagementInternal.InvestorInfo) investorInfos; /// @dev mapping of an address to the custodian address or none if not listed
    }

    bytes32 internal constant STORAGE_SLOT =
        keccak256("sobond.contracts.storage.InvestorManagement");

    function layout() internal pure returns (Layout storage l) {
        bytes32 slot = STORAGE_SLOT;
        assembly {
            l.slot := slot
        }
    }
}
