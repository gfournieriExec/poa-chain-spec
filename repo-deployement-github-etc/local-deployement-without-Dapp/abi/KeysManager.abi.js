export default [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "key",
        type: "address",
      },
      {
        indexed: false,
        name: "action",
        type: "string",
      },
    ],
    name: "MiningKeyChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "key",
        type: "address",
      },
      {
        indexed: true,
        name: "miningKey",
        type: "address",
      },
      {
        indexed: false,
        name: "action",
        type: "string",
      },
    ],
    name: "VotingKeyChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "key",
        type: "address",
      },
      {
        indexed: true,
        name: "miningKey",
        type: "address",
      },
      {
        indexed: false,
        name: "action",
        type: "string",
      },
    ],
    name: "PayoutKeyChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "miningKey",
        type: "address",
      },
      {
        indexed: true,
        name: "votingKey",
        type: "address",
      },
      {
        indexed: true,
        name: "payoutKey",
        type: "address",
      },
    ],
    name: "ValidatorInitialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "initialKey",
        type: "address",
      },
      {
        indexed: false,
        name: "time",
        type: "uint256",
      },
      {
        indexed: false,
        name: "initialKeysCount",
        type: "uint256",
      },
    ],
    name: "InitialKeyCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        name: "key",
        type: "address",
      },
    ],
    name: "Migrated",
    type: "event",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_currentKey",
        type: "address",
      },
      {
        name: "_newKey",
        type: "address",
      },
    ],
    name: "checkIfMiningExisted",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "maxLimitValidators",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "maxOldMiningKeysDeepCheck",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "masterOfCeremony",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "previousKeysManager",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "proxyStorage",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "poaNetworkConsensus",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "maxNumberOfInitialKeys",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "initialKeysCount",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_initialKey",
        type: "address",
      },
    ],
    name: "getInitialKeyStatus",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_payoutKey",
        type: "address",
      },
    ],
    name: "miningKeyByPayout",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_votingKey",
        type: "address",
      },
    ],
    name: "miningKeyByVoting",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_miningKey",
        type: "address",
      },
    ],
    name: "miningKeyHistory",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_miningKey",
        type: "address",
      },
    ],
    name: "successfulValidatorClone",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_miningKey",
        type: "address",
      },
    ],
    name: "validatorKeys",
    outputs: [
      {
        name: "validatorVotingKey",
        type: "address",
      },
      {
        name: "validatorPayoutKey",
        type: "address",
      },
      {
        name: "isValidatorMiningActive",
        type: "bool",
      },
      {
        name: "isValidatorVotingActive",
        type: "bool",
      },
      {
        name: "isValidatorPayoutActive",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "initDisabled",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_previousKeysManager",
        type: "address",
      },
    ],
    name: "init",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_miningKey",
        type: "address",
      },
    ],
    name: "migrateMiningKey",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_initialKey",
        type: "address",
      },
    ],
    name: "migrateInitialKey",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_initialKey",
        type: "address",
      },
    ],
    name: "initiateKeys",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_miningKey",
        type: "address",
      },
      {
        name: "_votingKey",
        type: "address",
      },
      {
        name: "_payoutKey",
        type: "address",
      },
    ],
    name: "createKeys",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getTime",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getVotingToChangeKeys",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_key",
        type: "address",
      },
    ],
    name: "isMiningActive",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_votingKey",
        type: "address",
      },
    ],
    name: "isVotingActive",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_miningKey",
        type: "address",
      },
    ],
    name: "isVotingActiveByMiningKey",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_miningKey",
        type: "address",
      },
    ],
    name: "isPayoutActive",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_miningKey",
        type: "address",
      },
    ],
    name: "getVotingByMining",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_miningKey",
        type: "address",
      },
    ],
    name: "getPayoutByMining",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_key",
        type: "address",
      },
    ],
    name: "hasMiningKeyBeenRemoved",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_miningKey",
        type: "address",
      },
    ],
    name: "getMiningKeyHistory",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_votingKey",
        type: "address",
      },
    ],
    name: "getMiningKeyByVoting",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_key",
        type: "address",
      },
    ],
    name: "addMiningKey",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_key",
        type: "address",
      },
      {
        name: "_miningKey",
        type: "address",
      },
    ],
    name: "addVotingKey",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_key",
        type: "address",
      },
      {
        name: "_miningKey",
        type: "address",
      },
    ],
    name: "addPayoutKey",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_key",
        type: "address",
      },
    ],
    name: "removeMiningKey",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_miningKey",
        type: "address",
      },
    ],
    name: "removeVotingKey",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_miningKey",
        type: "address",
      },
    ],
    name: "removePayoutKey",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_key",
        type: "address",
      },
      {
        name: "_oldMiningKey",
        type: "address",
      },
    ],
    name: "swapMiningKey",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_key",
        type: "address",
      },
      {
        name: "_miningKey",
        type: "address",
      },
    ],
    name: "swapVotingKey",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_key",
        type: "address",
      },
      {
        name: "_miningKey",
        type: "address",
      },
    ],
    name: "swapPayoutKey",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];
