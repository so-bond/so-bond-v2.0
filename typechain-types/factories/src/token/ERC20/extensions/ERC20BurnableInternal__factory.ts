/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ERC20BurnableInternal,
  ERC20BurnableInternalInterface,
} from "../../../../../src/token/ERC20/extensions/ERC20BurnableInternal";

const _abi = [
  {
    inputs: [],
    name: "ERC20Base__ApproveFromZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC20Base__ApproveToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC20Base__BurnExceedsBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC20Base__BurnFromZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC20Base__InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC20Base__MintToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC20Base__TransferExceedsBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC20Base__TransferFromZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC20Base__TransferToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "ReentrancyGuard__ReentrantCall",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "_burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ERC20BurnableInternal__factory {
  static readonly abi = _abi;
  static createInterface(): ERC20BurnableInternalInterface {
    return new Interface(_abi) as ERC20BurnableInternalInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ERC20BurnableInternal {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as ERC20BurnableInternal;
  }
}
