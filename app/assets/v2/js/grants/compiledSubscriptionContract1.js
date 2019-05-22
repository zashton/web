let compiledSubscription1 = {
  'contractName': 'Subscription',
  'abi': [
    {
      'constant': true,
      'inputs': [],
      'name': 'requiredGasPrice',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'requiredTokenAmount',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'requiredToAddress',
      'outputs': [
        {
          'name': '',
          'type': 'address'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'requiredPeriodSeconds',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'requiredTokenAddress',
      'outputs': [
        {
          'name': '',
          'type': 'address'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'relayer',
      'outputs': [
        {
          'name': '',
          'type': 'address'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'owner',
      'outputs': [
        {
          'name': '',
          'type': 'address'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'contractVersion',
      'outputs': [
        {
          'name': '',
          'type': 'uint8'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [
        {
          'name': '',
          'type': 'address'
        }
      ],
      'name': 'extraNonce',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [
        {
          'name': '',
          'type': 'bytes32'
        }
      ],
      'name': 'nextValidTimestamp',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'name': '_toAddress',
          'type': 'address'
        },
        {
          'name': '_tokenAddress',
          'type': 'address'
        },
        {
          'name': '_tokenAmount',
          'type': 'uint256'
        },
        {
          'name': '_periodSeconds',
          'type': 'uint256'
        },
        {
          'name': '_gasPrice',
          'type': 'uint256'
        },
        {
          'name': '_version',
          'type': 'uint8'
        },
        {
          'name': '_relayer',
          'type': 'address'
        }
      ],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'constructor'
    },
    {
      'payable': true,
      'stateMutability': 'payable',
      'type': 'fallback'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'name': 'from',
          'type': 'address'
        },
        {
          'indexed': true,
          'name': 'to',
          'type': 'address'
        },
        {
          'indexed': false,
          'name': 'tokenAddress',
          'type': 'address'
        },
        {
          'indexed': false,
          'name': 'tokenAmount',
          'type': 'uint256'
        },
        {
          'indexed': false,
          'name': 'periodSeconds',
          'type': 'uint256'
        },
        {
          'indexed': false,
          'name': 'gasPrice',
          'type': 'uint256'
        },
        {
          'indexed': false,
          'name': 'nonce',
          'type': 'uint256'
        }
      ],
      'name': 'ExecuteSubscription',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'name': 'from',
          'type': 'address'
        },
        {
          'indexed': true,
          'name': 'to',
          'type': 'address'
        },
        {
          'indexed': false,
          'name': 'tokenAddress',
          'type': 'address'
        },
        {
          'indexed': false,
          'name': 'tokenAmount',
          'type': 'uint256'
        },
        {
          'indexed': false,
          'name': 'periodSeconds',
          'type': 'uint256'
        },
        {
          'indexed': false,
          'name': 'gasPrice',
          'type': 'uint256'
        },
        {
          'indexed': false,
          'name': 'nonce',
          'type': 'uint256'
        }
      ],
      'name': 'CancelSubscription',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': false,
          'name': 'oldOwner',
          'type': 'address'
        },
        {
          'indexed': false,
          'name': 'newOwner',
          'type': 'address'
        }
      ],
      'name': 'ownershipChanged',
      'type': 'event'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': '_newOwner',
          'type': 'address'
        }
      ],
      'name': 'changeOwnership',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [
        {
          'name': 'subscriptionHash',
          'type': 'bytes32'
        },
        {
          'name': 'gracePeriodSeconds',
          'type': 'uint256'
        }
      ],
      'name': 'isSubscriptionActive',
      'outputs': [
        {
          'name': '',
          'type': 'bool'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [
        {
          'name': 'from',
          'type': 'address'
        },
        {
          'name': 'to',
          'type': 'address'
        },
        {
          'name': 'tokenAddress',
          'type': 'address'
        },
        {
          'name': 'tokenAmount',
          'type': 'uint256'
        },
        {
          'name': 'periodSeconds',
          'type': 'uint256'
        },
        {
          'name': 'gasPrice',
          'type': 'uint256'
        },
        {
          'name': 'nonce',
          'type': 'uint256'
        }
      ],
      'name': 'getSubscriptionHash',
      'outputs': [
        {
          'name': '',
          'type': 'bytes32'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [
        {
          'name': 'subscriptionHash',
          'type': 'bytes32'
        },
        {
          'name': 'signature',
          'type': 'bytes'
        }
      ],
      'name': 'getSubscriptionSigner',
      'outputs': [
        {
          'name': '',
          'type': 'address'
        }
      ],
      'payable': false,
      'stateMutability': 'pure',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [
        {
          'name': 'from',
          'type': 'address'
        },
        {
          'name': 'to',
          'type': 'address'
        },
        {
          'name': 'tokenAddress',
          'type': 'address'
        },
        {
          'name': 'tokenAmount',
          'type': 'uint256'
        },
        {
          'name': 'periodSeconds',
          'type': 'uint256'
        },
        {
          'name': 'gasPrice',
          'type': 'uint256'
        },
        {
          'name': 'nonce',
          'type': 'uint256'
        },
        {
          'name': 'signature',
          'type': 'bytes'
        }
      ],
      'name': 'isSubscriptionReady',
      'outputs': [
        {
          'name': '',
          'type': 'bool'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': 'from',
          'type': 'address'
        },
        {
          'name': 'to',
          'type': 'address'
        },
        {
          'name': 'tokenAddress',
          'type': 'address'
        },
        {
          'name': 'tokenAmount',
          'type': 'uint256'
        },
        {
          'name': 'periodSeconds',
          'type': 'uint256'
        },
        {
          'name': 'gasPrice',
          'type': 'uint256'
        },
        {
          'name': 'nonce',
          'type': 'uint256'
        },
        {
          'name': 'signature',
          'type': 'bytes'
        }
      ],
      'name': 'cancelSubscription',
      'outputs': [
        {
          'name': 'success',
          'type': 'bool'
        }
      ],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': 'from',
          'type': 'address'
        },
        {
          'name': 'to',
          'type': 'address'
        },
        {
          'name': 'tokenAddress',
          'type': 'address'
        },
        {
          'name': 'tokenAmount',
          'type': 'uint256'
        },
        {
          'name': 'periodSeconds',
          'type': 'uint256'
        },
        {
          'name': 'gasPrice',
          'type': 'uint256'
        },
        {
          'name': 'nonce',
          'type': 'uint256'
        },
        {
          'name': 'signature',
          'type': 'bytes'
        }
      ],
      'name': 'executeSubscription',
      'outputs': [
        {
          'name': 'success',
          'type': 'bool'
        }
      ],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [],
      'name': 'endContract',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    }
  ],
  'metadata': '{\'compiler\':{\'version\':\'0.5.2+commit.1df8f40c\'},\'language\':\'Solidity\',\'output\':{\'abi\':[{\'constant\':true,\'inputs\':[],\'name\':\'requiredGasPrice\',\'outputs\':[{\'name\':\'\',\'type\':\'uint256\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[{\'name\':\'subscriptionHash\',\'type\':\'bytes32\'},{\'name\':\'signature\',\'type\':\'bytes\'}],\'name\':\'getSubscriptionSigner\',\'outputs\':[{\'name\':\'\',\'type\':\'address\'}],\'payable\':false,\'stateMutability\':\'pure\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[],\'name\':\'requiredTokenAmount\',\'outputs\':[{\'name\':\'\',\'type\':\'uint256\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'constant\':false,\'inputs\':[{\'name\':\'_newOwner\',\'type\':\'address\'}],\'name\':\'changeOwnership\',\'outputs\':[],\'payable\':false,\'stateMutability\':\'nonpayable\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[],\'name\':\'requiredToAddress\',\'outputs\':[{\'name\':\'\',\'type\':\'address\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[],\'name\':\'requiredPeriodSeconds\',\'outputs\':[{\'name\':\'\',\'type\':\'uint256\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[],\'name\':\'requiredTokenAddress\',\'outputs\':[{\'name\':\'\',\'type\':\'address\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'constant\':false,\'inputs\':[{\'name\':\'from\',\'type\':\'address\'},{\'name\':\'to\',\'type\':\'address\'},{\'name\':\'tokenAddress\',\'type\':\'address\'},{\'name\':\'tokenAmount\',\'type\':\'uint256\'},{\'name\':\'periodSeconds\',\'type\':\'uint256\'},{\'name\':\'gasPrice\',\'type\':\'uint256\'},{\'name\':\'nonce\',\'type\':\'uint256\'},{\'name\':\'signature\',\'type\':\'bytes\'}],\'name\':\'cancelSubscription\',\'outputs\':[{\'name\':\'success\',\'type\':\'bool\'}],\'payable\':false,\'stateMutability\':\'nonpayable\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[],\'name\':\'relayer\',\'outputs\':[{\'name\':\'\',\'type\':\'address\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[],\'name\':\'owner\',\'outputs\':[{\'name\':\'\',\'type\':\'address\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[],\'name\':\'contractVersion\',\'outputs\':[{\'name\':\'\',\'type\':\'uint8\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[{\'name\':\'\',\'type\':\'address\'}],\'name\':\'extraNonce\',\'outputs\':[{\'name\':\'\',\'type\':\'uint256\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[{\'name\':\'subscriptionHash\',\'type\':\'bytes32\'},{\'name\':\'gracePeriodSeconds\',\'type\':\'uint256\'}],\'name\':\'isSubscriptionActive\',\'outputs\':[{\'name\':\'\',\'type\':\'bool\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'constant\':false,\'inputs\':[],\'name\':\'endContract\',\'outputs\':[],\'payable\':false,\'stateMutability\':\'nonpayable\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[{\'name\':\'from\',\'type\':\'address\'},{\'name\':\'to\',\'type\':\'address\'},{\'name\':\'tokenAddress\',\'type\':\'address\'},{\'name\':\'tokenAmount\',\'type\':\'uint256\'},{\'name\':\'periodSeconds\',\'type\':\'uint256\'},{\'name\':\'gasPrice\',\'type\':\'uint256\'},{\'name\':\'nonce\',\'type\':\'uint256\'}],\'name\':\'getSubscriptionHash\',\'outputs\':[{\'name\':\'\',\'type\':\'bytes32\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'constant\':false,\'inputs\':[{\'name\':\'from\',\'type\':\'address\'},{\'name\':\'to\',\'type\':\'address\'},{\'name\':\'tokenAddress\',\'type\':\'address\'},{\'name\':\'tokenAmount\',\'type\':\'uint256\'},{\'name\':\'periodSeconds\',\'type\':\'uint256\'},{\'name\':\'gasPrice\',\'type\':\'uint256\'},{\'name\':\'nonce\',\'type\':\'uint256\'},{\'name\':\'signature\',\'type\':\'bytes\'}],\'name\':\'executeSubscription\',\'outputs\':[{\'name\':\'success\',\'type\':\'bool\'}],\'payable\':false,\'stateMutability\':\'nonpayable\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[{\'name\':\'from\',\'type\':\'address\'},{\'name\':\'to\',\'type\':\'address\'},{\'name\':\'tokenAddress\',\'type\':\'address\'},{\'name\':\'tokenAmount\',\'type\':\'uint256\'},{\'name\':\'periodSeconds\',\'type\':\'uint256\'},{\'name\':\'gasPrice\',\'type\':\'uint256\'},{\'name\':\'nonce\',\'type\':\'uint256\'},{\'name\':\'signature\',\'type\':\'bytes\'}],\'name\':\'isSubscriptionReady\',\'outputs\':[{\'name\':\'\',\'type\':\'bool\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[{\'name\':\'\',\'type\':\'bytes32\'}],\'name\':\'nextValidTimestamp\',\'outputs\':[{\'name\':\'\',\'type\':\'uint256\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'inputs\':[{\'name\':\'_toAddress\',\'type\':\'address\'},{\'name\':\'_tokenAddress\',\'type\':\'address\'},{\'name\':\'_tokenAmount\',\'type\':\'uint256\'},{\'name\':\'_periodSeconds\',\'type\':\'uint256\'},{\'name\':\'_gasPrice\',\'type\':\'uint256\'},{\'name\':\'_version\',\'type\':\'uint8\'},{\'name\':\'_relayer\',\'type\':\'address\'}],\'payable\':false,\'stateMutability\':\'nonpayable\',\'type\':\'constructor\'},{\'payable\':true,\'stateMutability\':\'payable\',\'type\':\'fallback\'},{\'anonymous\':false,\'inputs\':[{\'indexed\':true,\'name\':\'from\',\'type\':\'address\'},{\'indexed\':true,\'name\':\'to\',\'type\':\'address\'},{\'indexed\':false,\'name\':\'tokenAddress\',\'type\':\'address\'},{\'indexed\':false,\'name\':\'tokenAmount\',\'type\':\'uint256\'},{\'indexed\':false,\'name\':\'periodSeconds\',\'type\':\'uint256\'},{\'indexed\':false,\'name\':\'gasPrice\',\'type\':\'uint256\'},{\'indexed\':false,\'name\':\'nonce\',\'type\':\'uint256\'}],\'name\':\'ExecuteSubscription\',\'type\':\'event\'},{\'anonymous\':false,\'inputs\':[{\'indexed\':true,\'name\':\'from\',\'type\':\'address\'},{\'indexed\':true,\'name\':\'to\',\'type\':\'address\'},{\'indexed\':false,\'name\':\'tokenAddress\',\'type\':\'address\'},{\'indexed\':false,\'name\':\'tokenAmount\',\'type\':\'uint256\'},{\'indexed\':false,\'name\':\'periodSeconds\',\'type\':\'uint256\'},{\'indexed\':false,\'name\':\'gasPrice\',\'type\':\'uint256\'},{\'indexed\':false,\'name\':\'nonce\',\'type\':\'uint256\'}],\'name\':\'CancelSubscription\',\'type\':\'event\'},{\'anonymous\':false,\'inputs\':[{\'indexed\':false,\'name\':\'oldOwner\',\'type\':\'address\'},{\'indexed\':false,\'name\':\'newOwner\',\'type\':\'address\'}],\'name\':\'ownershipChanged\',\'type\':\'event\'}],\'devdoc\':{\'methods\':{}},\'userdoc\':{\'methods\':{}}},\'settings\':{\'compilationTarget\':{\'/Users/danlipert/gitcoin/grants1337/contracts/Subscription.sol\':\'Subscription\'},\'evmVersion\':\'byzantium\',\'libraries\':{},\'optimizer\':{\'enabled\':false,\'runs\':200},\'remappings\':[]},\'sources\':{\'/Users/danlipert/gitcoin/grants1337/contracts/Subscription.sol\':{\'keccak256\':\'0x43c85edd952b07c020951e8722803e352346d9de2d4e238986ebcdd542c526be\',\'urls\':[\'bzzr://cc97df4fc13be767dbd247833986b668b9622c4fa0fa231292af8a70ef20a8a1\']},\'openzeppelin-solidity/contracts/cryptography/ECDSA.sol\':{\'keccak256\':\'0x0cbeb7f69b70ff62eb5536caebbc8701b6490ae7ee2e252d77891cf6eba11326\',\'urls\':[\'bzzr://58a443499466ee0706d22af81b43ab6779b519255fbc66276546386ec00a30d7\']},\'openzeppelin-solidity/contracts/math/SafeMath.sol\':{\'keccak256\':\'0xc2a200a877c4a9b2475c246c54ffecc69ffde3e11af83319c63c2dc5458bac80\',\'urls\':[\'bzzr://c8876e2c39b60f155d748d71d715c8f3903fae5a405ac599adcb6ad2f9a583f9\']},\'openzeppelin-solidity/contracts/token/ERC20/ERC20.sol\':{\'keccak256\':\'0x3dceb7e4aa237a56111c13f77d7efadeceda7271d62bfac94ac79afab7c1f411\',\'urls\':[\'bzzr://2f34152a5bec385352002c31bc89f5e9935f628f1923ccea45c2281e0084a4db\']},\'openzeppelin-solidity/contracts/token/ERC20/IERC20.sol\':{\'keccak256\':\'0x59e7df16169a498cb8837963b2f5461d88e63bd1eb6c7d58b814d76b84ccbe61\',\'urls\':[\'bzzr://e572c9c4e02e37349702451bf3b5dcbbc86a19da5a51695b5b3e1bfe1e7825dc\']}},\'version\':1}',
  'bytecode': '0x608060405234801561001057600080fd5b5060405160e080612562833981018060405260e081101561003057600080fd5b810190808051906020019092919080519060200190929190805190602001909291908051906020019092919080519060200190929190805190602001909291908051906020019092919050505086600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555085600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550846004819055508360058190555082600681905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600060146101000a81548160ff021916908360ff1602179055505050505050505061239b806101c76000396000f3fe608060405260043610610126576000357c0100000000000000000000000000000000000000000000000000000000900480638da5cb5b116100b2578063bb6e7de911610081578063bb6e7de9146106c7578063c8147865146106de578063d3c576cd146107ab578063d933c06614610914578063ff59bff814610a7d57610126565b80638da5cb5b1461057d578063a0a8e460146105d4578063a3d53d1814610605578063ae702ba41461066a57610126565b8063384c3335116100f9578063384c3335146102e45780636b40bba11461033b5780636f264b2e1461036657806371d22d4d146103bd5780638406c0791461052657610126565b806310d920601461012b57806318f321a31461015657806329d428ca146102685780632af4c31e14610293575b600080fd5b34801561013757600080fd5b50610140610acc565b6040518082815260200191505060405180910390f35b34801561016257600080fd5b506102266004803603604081101561017957600080fd5b8101908080359060200190929190803590602001906401000000008111156101a057600080fd5b8201836020820111156101b257600080fd5b803590602001918460018302840111640100000000831117156101d457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610ad2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561027457600080fd5b5061027d610af7565b6040518082815260200191505060405180910390f35b34801561029f57600080fd5b506102e2600480360360208110156102b657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610afd565b005b3480156102f057600080fd5b506102f9610c53565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561034757600080fd5b50610350610c79565b6040518082815260200191505060405180910390f35b34801561037257600080fd5b5061037b610c7f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156103c957600080fd5b5061050c60048036036101008110156103e157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019092919080359060200190929190803590602001909291908035906020019064010000000081111561048657600080fd5b82018360208201111561049857600080fd5b803590602001918460018302840111640100000000831117156104ba57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610ca5565b604051808215151515815260200191505060405180910390f35b34801561053257600080fd5b5061053b610eeb565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561058957600080fd5b50610592610f11565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156105e057600080fd5b506105e9610f36565b604051808260ff1660ff16815260200191505060405180910390f35b34801561061157600080fd5b506106546004803603602081101561062857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f49565b6040518082815260200191505060405180910390f35b34801561067657600080fd5b506106ad6004803603604081101561068d57600080fd5b810190808035906020019092919080359060200190929190505050610f61565b604051808215151515815260200191505060405180910390f35b3480156106d357600080fd5b506106dc610fd9565b005b3480156106ea57600080fd5b50610795600480360360e081101561070157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190803590602001909291908035906020019092919050505061106e565b6040518082815260200191505060405180910390f35b3480156107b757600080fd5b506108fa60048036036101008110156107cf57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019092919080359060200190929190803590602001909291908035906020019064010000000081111561087457600080fd5b82018360208201111561088657600080fd5b803590602001918460018302840111640100000000831117156108a857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061166b565b604051808215151515815260200191505060405180910390f35b34801561092057600080fd5b50610a63600480360361010081101561093857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001909291908035906020019092919080359060200190929190803590602001906401000000008111156109dd57600080fd5b8201836020820111156109ef57600080fd5b80359060200191846001830284011164010000000083111715610a1157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611db1565b604051808215151515815260200191505060405180910390f35b348015610a8957600080fd5b50610ab660048036036020811015610aa057600080fd5b810190808035906020019092919050505061208b565b6040518082815260200191505060405180910390f35b60065481565b6000610aef82610ae1856120a3565b6120fb90919063ffffffff16565b905092915050565b60045481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610b5857600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f5d92051b4a9b6e7154c5be37e18edd17bfd2e650a3a6dbf8c3eded0ef431ff0e336000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a150565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60055481565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080610cb78a8a8a8a8a8a8a61106e565b90506000610cc58285610ad2565b90508a73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515610d4d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180612262602f913960400191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168b73ffffffffffffffffffffffffffffffffffffffff16141515610df0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f6d73672e73656e646572206973206e6f7420746865207375627363726962657281525060200191505060405180910390fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60076000848152602001908152602001600020819055508973ffffffffffffffffffffffffffffffffffffffff168b73ffffffffffffffffffffffffffffffffffffffff167f51a97a25211c2be9b0b1dd64ee1de490cdb047390e6eba984e6a1d126e6ac4568b8b8b8b8b604051808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018481526020018381526020018281526020019550505050505060405180910390a360019250505098975050505050505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060149054906101000a900460ff1681565b60086020528060005260406000206000915090505481565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60076000858152602001908152602001600020541415610fa75760009050610fd3565b610fcd82600760008681526020019081526020016000205461220290919063ffffffff16565b42111590505b92915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561103457600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b60008073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614806111195750600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff16145b151561118d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f7265717569726564546f41646472657373204661696c7572650000000000000081525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614806112375750600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16145b15156112ab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f7265717569726564546f6b656e41646472657373204661696c7572650000000081525060200191505060405180910390fd5b600060045414806112bd575060045485145b1515611331576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f7265717569726564546f6b656e416d6f756e74204661696c757265000000000081525060200191505060405180910390fd5b60006005541480611343575060055484145b15156113b7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f7265717569726564506572696f645365636f6e6473204661696c75726500000081525060200191505060405180910390fd5b600060065414806113c9575060065483145b151561143d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f72657175697265644761735072696365204661696c757265000000000000000081525060200191505060405180910390fd5b60197f01000000000000000000000000000000000000000000000000000000000000000260007f010000000000000000000000000000000000000000000000000000000000000002308a8a8a8a8a8a604051602001808a7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152600101897effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526001018873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018481526020018381526020018281526020019950505050505050505050604051602081830303815290604052805190602001209050979650505050505050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156116c957600080fd5b60006116da8a8a8a8a8a8a8a61106e565b90506116ec8a8a8a8a8a8a8a8a611db1565b1515611743576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260418152602001806123096041913960600191505060405180910390fd5b611756864261220290919063ffffffff16565b6007600083815260200190815260200160002081905550600860008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548411156117f95783600860008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b60008873ffffffffffffffffffffffffffffffffffffffff166370a082318b6040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561189457600080fd5b505afa1580156118a8573d6000803e3d6000fd5b505050506040513d60208110156118be57600080fd5b810190808051906020019092919050505090508873ffffffffffffffffffffffffffffffffffffffff166323b872dd8c8c8b6040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b1580156119a857600080fd5b505af11580156119bc573d6000803e3d6000fd5b505050506040513d60208110156119d257600080fd5b8101908080519060200190929190505050508873ffffffffffffffffffffffffffffffffffffffff166370a082318b6040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611a7d57600080fd5b505afa158015611a91573d6000803e3d6000fd5b505050506040513d6020811015611aa757600080fd5b8101908080519060200190929190505050888201141515611b13576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061234a6026913960400191505060405180910390fd5b611b1b612223565b1515611b72576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260358152602001806122916035913960400191505060405180910390fd5b8973ffffffffffffffffffffffffffffffffffffffff168b73ffffffffffffffffffffffffffffffffffffffff167f96d296c945eee0618d3cc6f435f4d59f14bcefd708eab22c3de30df20b1347938b8b8b8b8b604051808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018481526020018381526020018281526020019550505050505060405180910390a36000861115611d9f578873ffffffffffffffffffffffffffffffffffffffff166323b872dd8c33896040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015611d0357600080fd5b505af1158015611d17573d6000803e3d6000fd5b505050506040513d6020811015611d2d57600080fd5b810190808051906020019092919050505050611d47612223565b1515611d9e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260438152602001806122c66043913960600191505060405180910390fd5b5b60019250505098975050505050505050565b600080611dc38a8a8a8a8a8a8a61106e565b90506000611dd18285610ad2565b905060008973ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e8d306040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b158015611ea257600080fd5b505afa158015611eb6573d6000803e3d6000fd5b505050506040513d6020811015611ecc57600080fd5b8101908080519060200190929190505050905060008a73ffffffffffffffffffffffffffffffffffffffff166370a082318e6040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611f7a57600080fd5b505afa158015611f8e573d6000803e3d6000fd5b505050506040513d6020811015611fa457600080fd5b810190808051906020019092919050505090508c73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614801561201e57508b73ffffffffffffffffffffffffffffffffffffffff168d73ffffffffffffffffffffffffffffffffffffffff1614155b801561203d575060076000858152602001908152602001600020544210155b801561205b5750612057888b61220290919063ffffffff16565b8210155b80156120795750612075888b61220290919063ffffffff16565b8110155b94505050505098975050505050505050565b60076020528060005260406000206000915090505481565b60008160405160200180807f19457468657265756d205369676e6564204d6573736167653a0a333200000000815250601c01828152602001915050604051602081830303815290604052805190602001209050919050565b60006041825114151561211157600090506121fc565b60008060006020850151925060408501519150606085015160001a90507f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08260019004111561216657600093505050506121fc565b601b8160ff161415801561217e5750601c8160ff1614155b1561218f57600093505050506121fc565b60018682858560405160008152602001604052604051808581526020018460ff1660ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa1580156121ec573d6000803e3d6000fd5b5050506020604051035193505050505b92915050565b600080828401905083811015151561221957600080fd5b8091505092915050565b600080600090503d60008114612240576020811461224957612255565b60019150612255565b60206000803e60005191505b5060008114159150509056fe496e76616c6964205369676e617475726520666f7220737562736372697074696f6e2063616e63656c6c6174696f6e537562736372697074696f6e3a3a65786563757465537562736372697074696f6e205472616e7366657246726f6d206661696c6564537562736372697074696f6e3a3a65786563757465537562736372697074696f6e204661696c656420746f20706179206761732061732066726f6d206163636f756e74537562736372697074696f6e206973206e6f74207265616479206f7220636f6e646974696f6e73206f66207472616e736374696f6e20617265206e6f74206d657445524332302042616c616e636520646964206e6f74206368616e676520636f72726563746c79a165627a7a723058202df60f746d4c742afa80c2f5e3dcb8e55b1f61d5cef42378807b775d5e0a17660029',
  'deployedBytecode': '0x608060405260043610610126576000357c0100000000000000000000000000000000000000000000000000000000900480638da5cb5b116100b2578063bb6e7de911610081578063bb6e7de9146106c7578063c8147865146106de578063d3c576cd146107ab578063d933c06614610914578063ff59bff814610a7d57610126565b80638da5cb5b1461057d578063a0a8e460146105d4578063a3d53d1814610605578063ae702ba41461066a57610126565b8063384c3335116100f9578063384c3335146102e45780636b40bba11461033b5780636f264b2e1461036657806371d22d4d146103bd5780638406c0791461052657610126565b806310d920601461012b57806318f321a31461015657806329d428ca146102685780632af4c31e14610293575b600080fd5b34801561013757600080fd5b50610140610acc565b6040518082815260200191505060405180910390f35b34801561016257600080fd5b506102266004803603604081101561017957600080fd5b8101908080359060200190929190803590602001906401000000008111156101a057600080fd5b8201836020820111156101b257600080fd5b803590602001918460018302840111640100000000831117156101d457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610ad2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561027457600080fd5b5061027d610af7565b6040518082815260200191505060405180910390f35b34801561029f57600080fd5b506102e2600480360360208110156102b657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610afd565b005b3480156102f057600080fd5b506102f9610c53565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561034757600080fd5b50610350610c79565b6040518082815260200191505060405180910390f35b34801561037257600080fd5b5061037b610c7f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156103c957600080fd5b5061050c60048036036101008110156103e157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019092919080359060200190929190803590602001909291908035906020019064010000000081111561048657600080fd5b82018360208201111561049857600080fd5b803590602001918460018302840111640100000000831117156104ba57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610ca5565b604051808215151515815260200191505060405180910390f35b34801561053257600080fd5b5061053b610eeb565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561058957600080fd5b50610592610f11565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156105e057600080fd5b506105e9610f36565b604051808260ff1660ff16815260200191505060405180910390f35b34801561061157600080fd5b506106546004803603602081101561062857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f49565b6040518082815260200191505060405180910390f35b34801561067657600080fd5b506106ad6004803603604081101561068d57600080fd5b810190808035906020019092919080359060200190929190505050610f61565b604051808215151515815260200191505060405180910390f35b3480156106d357600080fd5b506106dc610fd9565b005b3480156106ea57600080fd5b50610795600480360360e081101561070157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190803590602001909291908035906020019092919050505061106e565b6040518082815260200191505060405180910390f35b3480156107b757600080fd5b506108fa60048036036101008110156107cf57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019092919080359060200190929190803590602001909291908035906020019064010000000081111561087457600080fd5b82018360208201111561088657600080fd5b803590602001918460018302840111640100000000831117156108a857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061166b565b604051808215151515815260200191505060405180910390f35b34801561092057600080fd5b50610a63600480360361010081101561093857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001909291908035906020019092919080359060200190929190803590602001906401000000008111156109dd57600080fd5b8201836020820111156109ef57600080fd5b80359060200191846001830284011164010000000083111715610a1157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611db1565b604051808215151515815260200191505060405180910390f35b348015610a8957600080fd5b50610ab660048036036020811015610aa057600080fd5b810190808035906020019092919050505061208b565b6040518082815260200191505060405180910390f35b60065481565b6000610aef82610ae1856120a3565b6120fb90919063ffffffff16565b905092915050565b60045481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610b5857600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f5d92051b4a9b6e7154c5be37e18edd17bfd2e650a3a6dbf8c3eded0ef431ff0e336000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a150565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60055481565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080610cb78a8a8a8a8a8a8a61106e565b90506000610cc58285610ad2565b90508a73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515610d4d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180612262602f913960400191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168b73ffffffffffffffffffffffffffffffffffffffff16141515610df0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f6d73672e73656e646572206973206e6f7420746865207375627363726962657281525060200191505060405180910390fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60076000848152602001908152602001600020819055508973ffffffffffffffffffffffffffffffffffffffff168b73ffffffffffffffffffffffffffffffffffffffff167f51a97a25211c2be9b0b1dd64ee1de490cdb047390e6eba984e6a1d126e6ac4568b8b8b8b8b604051808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018481526020018381526020018281526020019550505050505060405180910390a360019250505098975050505050505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060149054906101000a900460ff1681565b60086020528060005260406000206000915090505481565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60076000858152602001908152602001600020541415610fa75760009050610fd3565b610fcd82600760008681526020019081526020016000205461220290919063ffffffff16565b42111590505b92915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561103457600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b60008073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614806111195750600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff16145b151561118d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f7265717569726564546f41646472657373204661696c7572650000000000000081525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614806112375750600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16145b15156112ab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f7265717569726564546f6b656e41646472657373204661696c7572650000000081525060200191505060405180910390fd5b600060045414806112bd575060045485145b1515611331576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f7265717569726564546f6b656e416d6f756e74204661696c757265000000000081525060200191505060405180910390fd5b60006005541480611343575060055484145b15156113b7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f7265717569726564506572696f645365636f6e6473204661696c75726500000081525060200191505060405180910390fd5b600060065414806113c9575060065483145b151561143d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f72657175697265644761735072696365204661696c757265000000000000000081525060200191505060405180910390fd5b60197f01000000000000000000000000000000000000000000000000000000000000000260007f010000000000000000000000000000000000000000000000000000000000000002308a8a8a8a8a8a604051602001808a7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152600101897effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526001018873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018481526020018381526020018281526020019950505050505050505050604051602081830303815290604052805190602001209050979650505050505050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156116c957600080fd5b60006116da8a8a8a8a8a8a8a61106e565b90506116ec8a8a8a8a8a8a8a8a611db1565b1515611743576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260418152602001806123096041913960600191505060405180910390fd5b611756864261220290919063ffffffff16565b6007600083815260200190815260200160002081905550600860008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548411156117f95783600860008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b60008873ffffffffffffffffffffffffffffffffffffffff166370a082318b6040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561189457600080fd5b505afa1580156118a8573d6000803e3d6000fd5b505050506040513d60208110156118be57600080fd5b810190808051906020019092919050505090508873ffffffffffffffffffffffffffffffffffffffff166323b872dd8c8c8b6040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b1580156119a857600080fd5b505af11580156119bc573d6000803e3d6000fd5b505050506040513d60208110156119d257600080fd5b8101908080519060200190929190505050508873ffffffffffffffffffffffffffffffffffffffff166370a082318b6040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611a7d57600080fd5b505afa158015611a91573d6000803e3d6000fd5b505050506040513d6020811015611aa757600080fd5b8101908080519060200190929190505050888201141515611b13576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061234a6026913960400191505060405180910390fd5b611b1b612223565b1515611b72576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260358152602001806122916035913960400191505060405180910390fd5b8973ffffffffffffffffffffffffffffffffffffffff168b73ffffffffffffffffffffffffffffffffffffffff167f96d296c945eee0618d3cc6f435f4d59f14bcefd708eab22c3de30df20b1347938b8b8b8b8b604051808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018481526020018381526020018281526020019550505050505060405180910390a36000861115611d9f578873ffffffffffffffffffffffffffffffffffffffff166323b872dd8c33896040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015611d0357600080fd5b505af1158015611d17573d6000803e3d6000fd5b505050506040513d6020811015611d2d57600080fd5b810190808051906020019092919050505050611d47612223565b1515611d9e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260438152602001806122c66043913960600191505060405180910390fd5b5b60019250505098975050505050505050565b600080611dc38a8a8a8a8a8a8a61106e565b90506000611dd18285610ad2565b905060008973ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e8d306040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b158015611ea257600080fd5b505afa158015611eb6573d6000803e3d6000fd5b505050506040513d6020811015611ecc57600080fd5b8101908080519060200190929190505050905060008a73ffffffffffffffffffffffffffffffffffffffff166370a082318e6040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611f7a57600080fd5b505afa158015611f8e573d6000803e3d6000fd5b505050506040513d6020811015611fa457600080fd5b810190808051906020019092919050505090508c73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614801561201e57508b73ffffffffffffffffffffffffffffffffffffffff168d73ffffffffffffffffffffffffffffffffffffffff1614155b801561203d575060076000858152602001908152602001600020544210155b801561205b5750612057888b61220290919063ffffffff16565b8210155b80156120795750612075888b61220290919063ffffffff16565b8110155b94505050505098975050505050505050565b60076020528060005260406000206000915090505481565b60008160405160200180807f19457468657265756d205369676e6564204d6573736167653a0a333200000000815250601c01828152602001915050604051602081830303815290604052805190602001209050919050565b60006041825114151561211157600090506121fc565b60008060006020850151925060408501519150606085015160001a90507f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08260019004111561216657600093505050506121fc565b601b8160ff161415801561217e5750601c8160ff1614155b1561218f57600093505050506121fc565b60018682858560405160008152602001604052604051808581526020018460ff1660ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa1580156121ec573d6000803e3d6000fd5b5050506020604051035193505050505b92915050565b600080828401905083811015151561221957600080fd5b8091505092915050565b600080600090503d60008114612240576020811461224957612255565b60019150612255565b60206000803e60005191505b5060008114159150509056fe496e76616c6964205369676e617475726520666f7220737562736372697074696f6e2063616e63656c6c6174696f6e537562736372697074696f6e3a3a65786563757465537562736372697074696f6e205472616e7366657246726f6d206661696c6564537562736372697074696f6e3a3a65786563757465537562736372697074696f6e204661696c656420746f20706179206761732061732066726f6d206163636f756e74537562736372697074696f6e206973206e6f74207265616479206f7220636f6e646974696f6e73206f66207472616e736374696f6e20617265206e6f74206d657445524332302042616c616e636520646964206e6f74206368616e676520636f72726563746c79a165627a7a723058202df60f746d4c742afa80c2f5e3dcb8e55b1f61d5cef42378807b775d5e0a17660029',
  'sourceMap': '1091:13546:1:-;;;3265:515;8:9:-1;5:2;;;30:1;27;20:12;5:2;3265:515:1;;;;;;;;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;3265:515:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3516:10;3498:17;;:28;;;;;;;;;;;;;;;;;;3557:13;3536:20;;:34;;;;;;;;;;;;;;;;;;3600:12;3580:19;:32;;;;3644:14;3622:21;:36;;;;3685:9;3668:16;:26;;;;3710:10;3704:5;;:16;;;;;;;;;;;;;;;;;;3738:8;3730:7;;:16;;;;;;;;;;;;;;;;;;3772:1;3756:15;;:17;;;;;;;;;;;;;;;;;;3265:515;;;;;;;1091:13546;;;;;;',
  'deployedSourceMap': '1091:13546:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14619:9;;;1664:31;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1664:31:1;;;:::i;:::-;;;;;;;;;;;;;;;;;;;6364:318;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6364:318:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6364:318:1;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;6364:318:1;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;6364:318:1;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;6364:318:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;6364:318:1;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1582:34;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1582:34:1;;;:::i;:::-;;;;;;;;;;;;;;;;;;;3786:183;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3786:183:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3786:183:1;;;;;;;;;;;;;;;;;;;:::i;:::-;;1503:32;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1503:32:1;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1622:36;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1622:36:1;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1541:35;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1541:35:1;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;8320:1423;;8:9:-1;5:2;;;30:1;27;20:12;5:2;8320:1423:1;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;8320:1423:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;8320:1423:1;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;8320:1423:1;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;8320:1423:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;8320:1423:1;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1321:22;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1321:22:1;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1212:28;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1212:28:1;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1246;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1246:28:1;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;2121:45;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2121:45:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2121:45:1;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;4209:390;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4209:390:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4209:390:1;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;14392:112;;8:9:-1;5:2;;;30:1;27;20:12;5:2;14392:112:1;;;:::i;:::-;;4755:1548;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4755:1548:1;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;4755:1548:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;9901:3091;;8:9:-1;5:2;;;30:1;27;20:12;5:2;9901:3091:1;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;9901:3091:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;9901:3091:1;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;9901:3091:1;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;9901:3091:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;9901:3091:1;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;6805:1261;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6805:1261:1;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;6805:1261:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;6805:1261:1;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;6805:1261:1;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;6805:1261:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;6805:1261:1;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1887:53;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1887:53:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1887:53:1;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1664:31;;;;:::o;6364:318::-;6585:7;6615:60;6665:9;6615:41;:16;:39;:41::i;:::-;:49;;:60;;;;:::i;:::-;6608:67;;6364:318;;;;:::o;1582:34::-;;;;:::o;3786:183::-;3883:5;;;;;;;;;;;3871:17;;:10;:17;;;3863:26;;;;;;;;3905:9;3897:5;;:17;;;;;;;;;;;;;;;;;;3927:35;3944:10;3956:5;;;;;;;;;;;3927:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3786:183;:::o;1503:32::-;;;;;;;;;;;;;:::o;1622:36::-;;;;:::o;1541:35::-;;;;;;;;;;;;;:::o;8320:1423::-;8923:12;8951:24;8978:110;9011:4;9017:2;9021:12;9035:11;9048:13;9063:8;9073:5;8978:19;:110::i;:::-;8951:137;;9098:14;9115:50;9137:16;9155:9;9115:21;:50::i;:::-;9098:67;;9232:4;9222:14;;:6;:14;;;9214:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9355:10;9347:18;;:4;:18;;;9339:63;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9586:2;9541:18;:36;9560:16;9541:36;;;;;;;;;;;:48;;;;9643:2;9605:109;;9637:4;9605:109;;;9647:12;9661:11;9674:13;9689:8;9699:5;9605:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9732:4;9725:11;;;;8320:1423;;;;;;;;;;:::o;1321:22::-;;;;;;;;;;;;;:::o;1212:28::-;;;;;;;;;;;;;:::o;1246:::-;;;;;;;;;;;;;:::o;2121:45::-;;;;;;;;;;;;;;;;;:::o;4209:390::-;4362:4;4431:2;4385:18;:36;4404:16;4385:36;;;;;;;;;;;;:49;4382:88;;;4454:5;4447:12;;;;4382:88;4522:60;4563:18;4522;:36;4541:16;4522:36;;;;;;;;;;;;:40;;:60;;;;:::i;:::-;4487:15;:95;;4479:113;;4209:390;;;;;:::o;14392:112::-;14464:5;;;;;;;;;;;14452:17;;:10;:17;;;14444:26;;;;;;;;14491:5;;;;;;;;;;;14478:19;;;4755:1548;5291:7;5457:1;5428:31;;:17;;;;;;;;;;;:31;;;:58;;;;5469:17;;;;;;;;;;;5463:23;;:2;:23;;;5428:58;5419:98;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5568:1;5536:34;;:20;;;;;;;;;;;:34;;;:74;;;;5590:20;;;;;;;;;;;5574:36;;:12;:36;;;5536:74;5527:118;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5687:1;5664:19;;:24;:62;;;;5707:19;;5692:11;:34;5664:62;5655:105;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5804:1;5779:21;;:26;:68;;;;5826:21;;5809:13;:38;5779:68;5770:113;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5922:1;5902:16;;:21;:53;;;;5939:16;;5927:8;:28;5902:53;5893:93;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6066:4;6061:10;;6094:1;6089:7;;6122:4;6145;6167:2;6187:12;6217:11;6246:13;6277:8;6027:268;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;6027:268:1;;;6004:292;;;;;;5997:299;;4755:1548;;;;;;;;;:::o;9901:3091::-;10506:12;10556:7;;;;;;;;;;;10542:21;;:10;:21;;;10534:30;;;;;;;;10574:24;10601:110;10634:4;10640:2;10644:12;10658:11;10671:13;10686:8;10696:5;10601:19;:110::i;:::-;10574:137;;10788:99;10808:4;10814:2;10818:12;10832:11;10845:13;10860:8;10870:5;10877:9;10788:19;:99::i;:::-;10779:179;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11087:34;11107:13;11087:15;:19;;:34;;;;:::i;:::-;11048:18;:36;11067:16;11048:36;;;;;;;;;;;:73;;;;11248:10;:16;11259:4;11248:16;;;;;;;;;;;;;;;;11240:5;:24;11237:75;;;11296:5;11277:10;:16;11288:4;11277:16;;;;;;;;;;;;;;;:24;;;;11237:75;11397:23;11429:12;11423:29;;;11453:2;11423:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;11423:33:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;11423:33:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;11423:33:1;;;;;;;;;;;;;;;;11397:59;;11472:12;11466:32;;;11499:4;11504:2;11507:11;11466:53;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;11466:53:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;11466:53:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;11466:53:1;;;;;;;;;;;;;;;;;11587:12;11581:29;;;11611:2;11581:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;11581:33:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;11581:33:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;11581:33:1;;;;;;;;;;;;;;;;11565:11;11549:15;:27;11548:66;11529:147;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11706:14;:12;:14::i;:::-;11687:112;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11855:2;11816:110;;11849:4;11816:110;;;11859:12;11873:11;11886:13;11901:8;11911:5;11816:110;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12157:1;12146:8;:12;12142:822;;;12745:12;12739:32;;;12772:4;12778:10;12790:8;12739:60;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;12739:60:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;12739:60:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;12739:60:1;;;;;;;;;;;;;;;;;12838:14;:12;:14::i;:::-;12813:140;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12142:822;12981:4;12974:11;;;;9901:3091;;;;;;;;;;:::o;6805:1261::-;7423:4;7443:24;7470:110;7503:4;7509:2;7513:12;7527:11;7540:13;7555:8;7565:5;7470:19;:110::i;:::-;7443:137;;7590:14;7607:50;7629:16;7647:9;7607:21;:50::i;:::-;7590:67;;7667:17;7693:12;7687:29;;;7717:4;7731;7687:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;7687:50:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;7687:50:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7687:50:1;;;;;;;;;;;;;;;;7667:70;;7747:15;7771:12;7765:29;;;7795:4;7765:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;7765:35:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;7765:35:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7765:35:1;;;;;;;;;;;;;;;;7747:53;;7842:4;7832:14;;:6;:14;;;:40;;;;;7870:2;7862:10;;:4;:10;;;;7832:40;:111;;;;;7907:18;:36;7926:16;7907:36;;;;;;;;;;;;7888:15;:55;;7832:111;:165;;;;;7972:25;7988:8;7972:11;:15;;:25;;;;:::i;:::-;7959:9;:38;;7832:165;:217;;;;;8024:25;8040:8;8024:11;:15;;:25;;;;:::i;:::-;8013:7;:36;;7832:217;7811:248;;;;;;6805:1261;;;;;;;;;;:::o;1887:53::-;;;;;;;;;;;;;;;;;:::o;2650:265:2:-;2719:7;2902:4;2849:58;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;2849:58:2;;;2839:69;;;;;;2832:76;;2650:265;;;:::o;609:1891::-;687:7;768:2;748:9;:16;:22;;744:72;;;802:1;786:19;;;;744:72;882:9;901;920:7;1166:4;1155:9;1151:20;1145:27;1140:32;;1211:4;1200:9;1196:20;1190:27;1185:32;;1264:4;1253:9;1249:20;1243:27;1240:1;1235:36;1230:41;;2182:66;2177:1;2169:10;;;:79;2165:127;;;2279:1;2264:17;;;;;;;2165:127;2311:2;2306:1;:7;;;;:18;;;;;2322:2;2317:1;:7;;;;2306:18;2302:66;;;2355:1;2340:17;;;;;;;2302:66;2469:24;2479:4;2485:1;2488;2491;2469:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2469:24:2;;;;;;;;2462:31;;;;;609:1891;;;;;:::o;1439:145:3:-;1497:7;1516:9;1532:1;1528;:5;1516:17;;1556:1;1551;:6;;1543:15;;;;;;;;1576:1;1569:8;;;1439:145;;;;:::o;13407:855:1:-;13482:4;13502:19;13524:1;13502:23;;13703:14;13785:3;13780:57;;;;13908:4;13903:220;;;;13696:516;;13780:57;13822:1;13807:16;;13780:57;;13903:220;14008:4;14003:3;13998;13983:30;14105:3;14099:10;14084:25;;13696:516;;14254:1;14239:11;:16;;14232:23;;;13407:855;:::o',
  'source': 'pragma solidity ^0.5.2;\n\n/*\n  Super Simple Token Subscriptions - https://tokensubscription.com\n  //// Breakin’ Through @ University of Wyoming ////\n  Austin Thomas Griffith - https://austingriffith.com\n  Building on previous works:\n    https://github.com/austintgriffith/token-subscription\n    https://gist.github.com/androolloyd/0a62ef48887be00a5eff5c17f2be849a\n    https://media.consensys.net/subscription-services-on-the-blockchain-erc-948-6ef64b083a36\n    https://medium.com/gitcoin/technical-deep-dive-architecture-choices-for-subscriptions-on-the-blockchain-erc948-5fae89cabc7a\n    https://github.com/ethereum/EIPs/pull/1337\n    https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1077.md\n    https://github.com/gnosis/safe-contracts\n  Earlier Meta Transaction Demo:\n    https://github.com/austintgriffith/bouncer-proxy\n  Huge thanks, as always, to OpenZeppelin for the rad contracts:\n */\n\nimport \"openzeppelin-solidity/contracts/cryptography/ECDSA.sol\";\nimport \"openzeppelin-solidity/contracts/math/SafeMath.sol\";\nimport \"openzeppelin-solidity/contracts/token/ERC20/ERC20.sol\";\n\n\ncontract Subscription {\n    using ECDSA for bytes32;\n    using SafeMath for uint256;\n\n    //who deploys the contract\n    address payable public owner;\n    uint8 public contractVersion;\n\n    //restrict who can relay the metatx\n    address public relayer;\n\n    // the publisher may optionally deploy requirements for the subscription\n    // so only meta transactions that match the requirements can be relayed\n    address public requiredToAddress;\n    address public requiredTokenAddress;\n    uint256 public requiredTokenAmount;\n    uint256 public requiredPeriodSeconds;\n    uint256 public requiredGasPrice;\n\n\n    // similar to a nonce that avoids replay attacks this allows a single execution\n    // every x seconds for a given subscription\n    // subscriptionHash  => next valid block number\n    mapping(bytes32 => uint256) public nextValidTimestamp;\n\n    //we"ll use a nonce for each from but because transactions can go through\n    //multiple times, we allow anything but users can use this as a signal for\n    //uniqueness\n    mapping(address => uint256) public extraNonce;\n\n    event ExecuteSubscription(\n        address indexed from, //the subscriber\n        address indexed to, //the publisher\n        address tokenAddress, //the token address paid to the publisher\n        uint256 tokenAmount, //the token amount paid to the publisher\n        uint256 periodSeconds, //the period in seconds between payments\n        uint256 gasPrice, //the amount of tokens to pay relayer (0 for free)\n        uint256 nonce // to allow multiple subscriptions with the same parameters\n    );\n\n    event CancelSubscription(\n        address indexed from, //the subscriber\n        address indexed to, //the publisher\n        address tokenAddress, //the token address paid to the publisher\n        uint256 tokenAmount, //the token amount paid to the publisher\n        uint256 periodSeconds, //the period in seconds between payments\n        uint256 gasPrice, //the amount of tokens to pay relayer (0 for free)\n        uint256 nonce // to allow multiple subscriptions with the same parameters\n    );\n\n    event ownershipChanged(\n        address oldOwner,\n        address newOwner\n    );\n\n    constructor(\n        address _toAddress,\n        address _tokenAddress,\n        uint256 _tokenAmount,\n        uint256 _periodSeconds,\n        uint256 _gasPrice,\n        uint8 _version,\n        address _relayer\n    ) public {\n        requiredToAddress=_toAddress;\n        requiredTokenAddress=_tokenAddress;\n        requiredTokenAmount=_tokenAmount;\n        requiredPeriodSeconds=_periodSeconds;\n        requiredGasPrice=_gasPrice;\n        owner=msg.sender;\n        relayer=_relayer;\n        contractVersion=1;\n    }\n\n    function changeOwnership(address payable _newOwner)\n      public\n    {\n      require(msg.sender==owner);\n      owner = _newOwner;\n      emit ownershipChanged(msg.sender, owner);\n    }\n\n    // this is used by external smart contracts to verify on-chain that a\n    // particular subscription is \"paid\" and \"active\"\n    // there must be a small grace period added to allow the publisher\n    // or desktop miner to execute\n    function isSubscriptionActive(\n        bytes32 subscriptionHash,\n        uint256 gracePeriodSeconds\n    )\n        external\n        view\n        returns (bool)\n    {\n        if(nextValidTimestamp[subscriptionHash]==uint256(-1)){\n          return false;\n        }\n        return (block.timestamp <=\n                nextValidTimestamp[subscriptionHash].add(gracePeriodSeconds)\n        );\n    }\n\n    // given the subscription details, generate a hash and try to kind of follow\n    // the eip-191 standard and eip-1077 standard from my dude @avsa\n    function getSubscriptionHash(\n        address from, //the subscriber\n        address to, //the publisher\n        address tokenAddress, //the token address paid to the publisher\n        uint256 tokenAmount, //the token amount paid to the publisher\n        uint256 periodSeconds, //the period in seconds between payments\n        uint256 gasPrice, //the amount of tokens or eth to pay relayer (0 for free)\n        uint256 nonce // to allow multiple subscriptions with the same parameters\n    )\n        public\n        view\n        returns (bytes32)\n    {\n        // if there are requirements from the deployer, let"s make sure\n        // those are met exactly\n        require( requiredToAddress == address(0) || to == requiredToAddress, \"requiredToAddress Failure\" );\n        require( requiredTokenAddress == address(0) || tokenAddress == requiredTokenAddress, \"requiredTokenAddress Failure\"  );\n        require( requiredTokenAmount == 0 || tokenAmount == requiredTokenAmount, \"requiredTokenAmount Failure\"  );\n        require( requiredPeriodSeconds == 0 || periodSeconds == requiredPeriodSeconds, \"requiredPeriodSeconds Failure\"  );\n        require( requiredGasPrice == 0 || gasPrice == requiredGasPrice, \"requiredGasPrice Failure\"  );\n\n        return keccak256(\n            abi.encodePacked(\n                byte(0x19),\n                byte(0),\n                address(this),\n                from,\n                to,\n                tokenAddress,\n                tokenAmount,\n                periodSeconds,\n                gasPrice\n        ));\n    }\n\n    //ecrecover the signer from hash and the signature\n    function getSubscriptionSigner(\n        bytes32 subscriptionHash, //hash of subscription\n        bytes memory signature //proof the subscriber signed the meta trasaction\n    )\n        public\n        pure\n        returns (address)\n    {\n        return subscriptionHash.toEthSignedMessageHash().recover(signature);\n    }\n\n    //check if a subscription is signed correctly and the timestamp is ready for\n    // the next execution to happen\n    function isSubscriptionReady(\n        address from, //the subscriber\n        address to, //the publisher\n        address tokenAddress, //the token address paid to the publisher\n        uint256 tokenAmount, //the token amount paid to the publisher\n        uint256 periodSeconds, //the period in seconds between payments\n        uint256 gasPrice, //the amount of the token to incentivize the relay network\n        uint256 nonce,// to allow multiple subscriptions with the same parameters\n        bytes memory signature //proof the subscriber signed the meta trasaction\n    )\n        public\n        view\n        returns (bool)\n    {\n        bytes32 subscriptionHash = getSubscriptionHash(\n            from, to, tokenAddress, tokenAmount, periodSeconds, gasPrice, nonce\n        );\n        address signer = getSubscriptionSigner(subscriptionHash, signature);\n        uint256 allowance = ERC20(tokenAddress).allowance(from, address(this));\n        uint256 balance = ERC20(tokenAddress).balanceOf(from);\n\n        return (\n            signer == from &&\n            from != to &&\n            block.timestamp >= nextValidTimestamp[subscriptionHash] &&\n            allowance >= tokenAmount.add(gasPrice) &&\n            balance >= tokenAmount.add(gasPrice)\n        );\n    }\n\n    // you don"t really need this if you are using the approve/transferFrom method\n    // because you control the flow of tokens by approving this contract address,\n    // but to make the contract an extensible example for later user I"ll add this\n    function cancelSubscription(\n        address from, //the subscriber\n        address to, //the publisher\n        address tokenAddress, //the token address paid to the publisher\n        uint256 tokenAmount, //the token amount paid to the publisher\n        uint256 periodSeconds, //the period in seconds between payments\n        uint256 gasPrice, //the amount of tokens or eth to pay relayer (0 for free)\n        uint256 nonce, //to allow multiple subscriptions with the same parameters\n        bytes memory signature //proof the subscriber signed the meta trasaction\n    )\n        public\n        returns (bool success)\n    {\n        bytes32 subscriptionHash = getSubscriptionHash(\n            from, to, tokenAddress, tokenAmount, periodSeconds, gasPrice, nonce\n        );\n        address signer = getSubscriptionSigner(subscriptionHash, signature);\n\n        //the signature must be valid\n        require(signer == from, \"Invalid Signature for subscription cancellation\");\n\n        //make sure it"s the subscriber\n        require(from == msg.sender, "msg.sender is not the subscriber");\n\n        //nextValidTimestamp should be a timestamp that will never\n        //be reached during the brief window human existence\n        nextValidTimestamp[subscriptionHash]=uint256(-1);\n\n        emit CancelSubscription(\n            from, to, tokenAddress, tokenAmount, periodSeconds, gasPrice, nonce\n        );\n\n        return true;\n    }\n\n    // execute the transferFrom to pay the publisher from the subscriber\n    // the subscriber has full control by approving this contract an allowance\n    function executeSubscription(\n        address from, //the subscriber\n        address to, //the publisher\n        address tokenAddress, //the token address paid to the publisher\n        uint256 tokenAmount, //the token amount paid to the publisher\n        uint256 periodSeconds, //the period in seconds between payments\n        uint256 gasPrice, //the amount of tokens or eth to pay relayer (0 for free)\n        uint256 nonce, // to allow multiple subscriptions with the same parameters\n        bytes memory signature //proof the subscriber signed the meta trasaction\n    )\n        public\n        returns (bool success)\n    {\n        require(msg.sender == relayer);\n        bytes32 subscriptionHash = getSubscriptionHash(\n            from, to, tokenAddress, tokenAmount, periodSeconds, gasPrice, nonce\n        );\n\n        // make sure the subscription is valid and ready\n        require( isSubscriptionReady(from, to, tokenAddress, tokenAmount, periodSeconds, gasPrice, nonce, signature), \"Subscription is not ready or conditions of transction are not met\" );\n\n        //increment the timestamp by the period so it wont be valid until then\n        nextValidTimestamp[subscriptionHash] = block.timestamp.add(periodSeconds);\n\n        //check to see if this nonce is larger than the current count and we"ll set that for this "from"\n        if(nonce > extraNonce[from]){\n          extraNonce[from] = nonce;\n        }\n\n        // now, let make the transfer from the subscriber to the publisher\n        uint256 startingBalance = ERC20(tokenAddress).balanceOf(to);\n        ERC20(tokenAddress).transferFrom(from,to,tokenAmount);\n        require(\n          (startingBalance+tokenAmount) == ERC20(tokenAddress).balanceOf(to),\n          \"ERC20 Balance did not change correctly\"\n        );\n\n        require(\n          checkSuccess(),\n          \"Subscription::executeSubscription TransferFrom failed\"\n          );\n\n\n        emit ExecuteSubscription(\n            from, to, tokenAddress, tokenAmount, periodSeconds, gasPrice, nonce\n        );\n\n        // it is possible for the subscription execution to be run by a third party\n        // incentivized in the terms of the subscription with a gasPrice of the tokens\n        //  - pay that out now...\n        if (gasPrice > 0) {\n            //the relayer is incentivized by a little of the same token from\n            // the subscriber ... as far as the subscriber knows, they are\n            // just sending X tokens to the publisher, but the publisher can\n            // choose to send Y of those X to a relayer to run their transactions\n            // the publisher will receive X - Y tokens\n            // this must all be setup in the constructor\n            // if not, the subscriber chooses all the params including what goes\n            // to the publisher and what goes to the relayer\n            ERC20(tokenAddress).transferFrom(from, msg.sender, gasPrice);\n            require(\n                checkSuccess(),\n                \"Subscription::executeSubscription Failed to pay gas as from account\"\n            );\n        }\n\n        return true;\n    }\n\n    // because of issues with non-standard erc20s the transferFrom can always return false\n    // to fix this we run it and then check the return of the previous function:\n    //    https://github.com/ethereum/solidity/issues/4116\n    /**\n     * Checks the return value of the previous function. Returns true if the previous function\n     * function returned 32 non-zero bytes or returned zero bytes.\n     */\n    function checkSuccess(\n    )\n        private\n        pure\n        returns (bool)\n    {\n        uint256 returnValue = 0;\n\n        /* solium-disable-next-line security/no-inline-assembly */\n        assembly {\n            // check number of bytes returned from last function call\n            switch returndatasize\n\n            // no bytes returned: assume success\n            case 0x0 {\n                returnValue := 1\n            }\n\n            // 32 bytes returned: check if non-zero\n            case 0x20 {\n                // copy 32 bytes into scratch space\n                returndatacopy(0x0, 0x0, 0x20)\n\n                // load those bytes into returnValue\n                returnValue := mload(0x0)\n            }\n\n            // not sure what was returned: dont mark as success\n            default { }\n        }\n\n        return returnValue != 0;\n    }\n\n    //we would like a way for the author to completly destroy the subscription\n    // contract to prevent further transfers\n    function endContract()\n        external\n    {\n      require(msg.sender==owner);\n      selfdestruct(owner);\n    }\n\n    // let"s go ahead and revert any ETH sent directly to the contract\n    function () external payable {\n       revert ();\n    }\n}\n',
  'sourcePath': '/Users/danlipert/gitcoin/grants1337/contracts/Subscription.sol',
  'ast': {
    'absolutePath': '/Users/danlipert/gitcoin/grants1337/contracts/Subscription.sol',
    'exportedSymbols': {
      'Subscription': [
        710
      ]
    },
    'id': 711,
    'nodeType': 'SourceUnit',
    'nodes': [
      {
        'id': 58,
        'literals': [
          'solidity',
          '^',
          '0.5',
          '.2'
        ],
        'nodeType': 'PragmaDirective',
        'src': '0:23:1'
      },
      {
        'absolutePath': 'openzeppelin-solidity/contracts/cryptography/ECDSA.sol',
        'file': 'openzeppelin-solidity/contracts/cryptography/ECDSA.sol',
        'id': 59,
        'nodeType': 'ImportDirective',
        'scope': 711,
        'sourceUnit': 792,
        'src': '900:64:1',
        'symbolAliases': [],
        'unitAlias': ''
      },
      {
        'absolutePath': 'openzeppelin-solidity/contracts/math/SafeMath.sol',
        'file': 'openzeppelin-solidity/contracts/math/SafeMath.sol',
        'id': 60,
        'nodeType': 'ImportDirective',
        'scope': 711,
        'sourceUnit': 920,
        'src': '965:59:1',
        'symbolAliases': [],
        'unitAlias': ''
      },
      {
        'absolutePath': 'openzeppelin-solidity/contracts/token/ERC20/ERC20.sol',
        'file': 'openzeppelin-solidity/contracts/token/ERC20/ERC20.sol',
        'id': 61,
        'nodeType': 'ImportDirective',
        'scope': 711,
        'sourceUnit': 1303,
        'src': '1025:63:1',
        'symbolAliases': [],
        'unitAlias': ''
      },
      {
        'baseContracts': [],
        'contractDependencies': [],
        'contractKind': 'contract',
        'documentation': null,
        'fullyImplemented': true,
        'id': 710,
        'linearizedBaseContracts': [
          710
        ],
        'name': 'Subscription',
        'nodeType': 'ContractDefinition',
        'nodes': [
          {
            'id': 64,
            'libraryName': {
              'contractScope': null,
              'id': 62,
              'name': 'ECDSA',
              'nodeType': 'UserDefinedTypeName',
              'referencedDeclaration': 791,
              'src': '1125:5:1',
              'typeDescriptions': {
                'typeIdentifier': 't_contract$_ECDSA_$791',
                'typeString': 'library ECDSA'
              }
            },
            'nodeType': 'UsingForDirective',
            'src': '1119:24:1',
            'typeName': {
              'id': 63,
              'name': 'bytes32',
              'nodeType': 'ElementaryTypeName',
              'src': '1135:7:1',
              'typeDescriptions': {
                'typeIdentifier': 't_bytes32',
                'typeString': 'bytes32'
              }
            }
          },
          {
            'id': 67,
            'libraryName': {
              'contractScope': null,
              'id': 65,
              'name': 'SafeMath',
              'nodeType': 'UserDefinedTypeName',
              'referencedDeclaration': 919,
              'src': '1154:8:1',
              'typeDescriptions': {
                'typeIdentifier': 't_contract$_SafeMath_$919',
                'typeString': 'library SafeMath'
              }
            },
            'nodeType': 'UsingForDirective',
            'src': '1148:27:1',
            'typeName': {
              'id': 66,
              'name': 'uint256',
              'nodeType': 'ElementaryTypeName',
              'src': '1167:7:1',
              'typeDescriptions': {
                'typeIdentifier': 't_uint256',
                'typeString': 'uint256'
              }
            }
          },
          {
            'constant': false,
            'id': 69,
            'name': 'owner',
            'nodeType': 'VariableDeclaration',
            'scope': 710,
            'src': '1212:28:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_address_payable',
              'typeString': 'address payable'
            },
            'typeName': {
              'id': 68,
              'name': 'address',
              'nodeType': 'ElementaryTypeName',
              'src': '1212:15:1',
              'stateMutability': 'payable',
              'typeDescriptions': {
                'typeIdentifier': 't_address_payable',
                'typeString': 'address payable'
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 71,
            'name': 'contractVersion',
            'nodeType': 'VariableDeclaration',
            'scope': 710,
            'src': '1246:28:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_uint8',
              'typeString': 'uint8'
            },
            'typeName': {
              'id': 70,
              'name': 'uint8',
              'nodeType': 'ElementaryTypeName',
              'src': '1246:5:1',
              'typeDescriptions': {
                'typeIdentifier': 't_uint8',
                'typeString': 'uint8'
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 73,
            'name': 'relayer',
            'nodeType': 'VariableDeclaration',
            'scope': 710,
            'src': '1321:22:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_address',
              'typeString': 'address'
            },
            'typeName': {
              'id': 72,
              'name': 'address',
              'nodeType': 'ElementaryTypeName',
              'src': '1321:7:1',
              'stateMutability': 'nonpayable',
              'typeDescriptions': {
                'typeIdentifier': 't_address',
                'typeString': 'address'
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 75,
            'name': 'requiredToAddress',
            'nodeType': 'VariableDeclaration',
            'scope': 710,
            'src': '1503:32:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_address',
              'typeString': 'address'
            },
            'typeName': {
              'id': 74,
              'name': 'address',
              'nodeType': 'ElementaryTypeName',
              'src': '1503:7:1',
              'stateMutability': 'nonpayable',
              'typeDescriptions': {
                'typeIdentifier': 't_address',
                'typeString': 'address'
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 77,
            'name': 'requiredTokenAddress',
            'nodeType': 'VariableDeclaration',
            'scope': 710,
            'src': '1541:35:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_address',
              'typeString': 'address'
            },
            'typeName': {
              'id': 76,
              'name': 'address',
              'nodeType': 'ElementaryTypeName',
              'src': '1541:7:1',
              'stateMutability': 'nonpayable',
              'typeDescriptions': {
                'typeIdentifier': 't_address',
                'typeString': 'address'
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 79,
            'name': 'requiredTokenAmount',
            'nodeType': 'VariableDeclaration',
            'scope': 710,
            'src': '1582:34:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_uint256',
              'typeString': 'uint256'
            },
            'typeName': {
              'id': 78,
              'name': 'uint256',
              'nodeType': 'ElementaryTypeName',
              'src': '1582:7:1',
              'typeDescriptions': {
                'typeIdentifier': 't_uint256',
                'typeString': 'uint256'
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 81,
            'name': 'requiredPeriodSeconds',
            'nodeType': 'VariableDeclaration',
            'scope': 710,
            'src': '1622:36:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_uint256',
              'typeString': 'uint256'
            },
            'typeName': {
              'id': 80,
              'name': 'uint256',
              'nodeType': 'ElementaryTypeName',
              'src': '1622:7:1',
              'typeDescriptions': {
                'typeIdentifier': 't_uint256',
                'typeString': 'uint256'
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 83,
            'name': 'requiredGasPrice',
            'nodeType': 'VariableDeclaration',
            'scope': 710,
            'src': '1664:31:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_uint256',
              'typeString': 'uint256'
            },
            'typeName': {
              'id': 82,
              'name': 'uint256',
              'nodeType': 'ElementaryTypeName',
              'src': '1664:7:1',
              'typeDescriptions': {
                'typeIdentifier': 't_uint256',
                'typeString': 'uint256'
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 87,
            'name': 'nextValidTimestamp',
            'nodeType': 'VariableDeclaration',
            'scope': 710,
            'src': '1887:53:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_mapping$_t_bytes32_$_t_uint256_$',
              'typeString': 'mapping(bytes32 => uint256)'
            },
            'typeName': {
              'id': 86,
              'keyType': {
                'id': 84,
                'name': 'bytes32',
                'nodeType': 'ElementaryTypeName',
                'src': '1895:7:1',
                'typeDescriptions': {
                  'typeIdentifier': 't_bytes32',
                  'typeString': 'bytes32'
                }
              },
              'nodeType': 'Mapping',
              'src': '1887:27:1',
              'typeDescriptions': {
                'typeIdentifier': 't_mapping$_t_bytes32_$_t_uint256_$',
                'typeString': 'mapping(bytes32 => uint256)'
              },
              'valueType': {
                'id': 85,
                'name': 'uint256',
                'nodeType': 'ElementaryTypeName',
                'src': '1906:7:1',
                'typeDescriptions': {
                  'typeIdentifier': 't_uint256',
                  'typeString': 'uint256'
                }
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 91,
            'name': 'extraNonce',
            'nodeType': 'VariableDeclaration',
            'scope': 710,
            'src': '2121:45:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_mapping$_t_address_$_t_uint256_$',
              'typeString': 'mapping(address => uint256)'
            },
            'typeName': {
              'id': 90,
              'keyType': {
                'id': 88,
                'name': 'address',
                'nodeType': 'ElementaryTypeName',
                'src': '2129:7:1',
                'typeDescriptions': {
                  'typeIdentifier': 't_address',
                  'typeString': 'address'
                }
              },
              'nodeType': 'Mapping',
              'src': '2121:27:1',
              'typeDescriptions': {
                'typeIdentifier': 't_mapping$_t_address_$_t_uint256_$',
                'typeString': 'mapping(address => uint256)'
              },
              'valueType': {
                'id': 89,
                'name': 'uint256',
                'nodeType': 'ElementaryTypeName',
                'src': '2140:7:1',
                'typeDescriptions': {
                  'typeIdentifier': 't_uint256',
                  'typeString': 'uint256'
                }
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'anonymous': false,
            'documentation': null,
            'id': 107,
            'name': 'ExecuteSubscription',
            'nodeType': 'EventDefinition',
            'parameters': {
              'id': 106,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 93,
                  'indexed': true,
                  'name': 'from',
                  'nodeType': 'VariableDeclaration',
                  'scope': 107,
                  'src': '2208:20:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 92,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2208:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 95,
                  'indexed': true,
                  'name': 'to',
                  'nodeType': 'VariableDeclaration',
                  'scope': 107,
                  'src': '2255:18:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 94,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2255:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 97,
                  'indexed': false,
                  'name': 'tokenAddress',
                  'nodeType': 'VariableDeclaration',
                  'scope': 107,
                  'src': '2299:20:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 96,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2299:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 99,
                  'indexed': false,
                  'name': 'tokenAmount',
                  'nodeType': 'VariableDeclaration',
                  'scope': 107,
                  'src': '2371:19:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 98,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2371:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 101,
                  'indexed': false,
                  'name': 'periodSeconds',
                  'nodeType': 'VariableDeclaration',
                  'scope': 107,
                  'src': '2441:21:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 100,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2441:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 103,
                  'indexed': false,
                  'name': 'gasPrice',
                  'nodeType': 'VariableDeclaration',
                  'scope': 107,
                  'src': '2513:16:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 102,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2513:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 105,
                  'indexed': false,
                  'name': 'nonce',
                  'nodeType': 'VariableDeclaration',
                  'scope': 107,
                  'src': '2590:13:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 104,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2590:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '2198:471:1'
            },
            'src': '2173:497:1'
          },
          {
            'anonymous': false,
            'documentation': null,
            'id': 123,
            'name': 'CancelSubscription',
            'nodeType': 'EventDefinition',
            'parameters': {
              'id': 122,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 109,
                  'indexed': true,
                  'name': 'from',
                  'nodeType': 'VariableDeclaration',
                  'scope': 123,
                  'src': '2710:20:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 108,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2710:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 111,
                  'indexed': true,
                  'name': 'to',
                  'nodeType': 'VariableDeclaration',
                  'scope': 123,
                  'src': '2757:18:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 110,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2757:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 113,
                  'indexed': false,
                  'name': 'tokenAddress',
                  'nodeType': 'VariableDeclaration',
                  'scope': 123,
                  'src': '2801:20:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 112,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2801:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 115,
                  'indexed': false,
                  'name': 'tokenAmount',
                  'nodeType': 'VariableDeclaration',
                  'scope': 123,
                  'src': '2873:19:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 114,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2873:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 117,
                  'indexed': false,
                  'name': 'periodSeconds',
                  'nodeType': 'VariableDeclaration',
                  'scope': 123,
                  'src': '2943:21:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 116,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2943:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 119,
                  'indexed': false,
                  'name': 'gasPrice',
                  'nodeType': 'VariableDeclaration',
                  'scope': 123,
                  'src': '3015:16:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 118,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3015:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 121,
                  'indexed': false,
                  'name': 'nonce',
                  'nodeType': 'VariableDeclaration',
                  'scope': 123,
                  'src': '3092:13:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 120,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3092:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '2700:471:1'
            },
            'src': '2676:496:1'
          },
          {
            'anonymous': false,
            'documentation': null,
            'id': 129,
            'name': 'ownershipChanged',
            'nodeType': 'EventDefinition',
            'parameters': {
              'id': 128,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 125,
                  'indexed': false,
                  'name': 'oldOwner',
                  'nodeType': 'VariableDeclaration',
                  'scope': 129,
                  'src': '3210:16:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 124,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3210:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 127,
                  'indexed': false,
                  'name': 'newOwner',
                  'nodeType': 'VariableDeclaration',
                  'scope': 129,
                  'src': '3236:16:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 126,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3236:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '3200:58:1'
            },
            'src': '3178:81:1'
          },
          {
            'body': {
              'id': 179,
              'nodeType': 'Block',
              'src': '3488:292:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 148,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 146,
                      'name': 'requiredToAddress',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 75,
                      'src': '3498:17:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address',
                        'typeString': 'address'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'id': 147,
                      'name': '_toAddress',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 131,
                      'src': '3516:10:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address',
                        'typeString': 'address'
                      }
                    },
                    'src': '3498:28:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'id': 149,
                  'nodeType': 'ExpressionStatement',
                  'src': '3498:28:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 152,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 150,
                      'name': 'requiredTokenAddress',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 77,
                      'src': '3536:20:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address',
                        'typeString': 'address'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'id': 151,
                      'name': '_tokenAddress',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 133,
                      'src': '3557:13:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address',
                        'typeString': 'address'
                      }
                    },
                    'src': '3536:34:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'id': 153,
                  'nodeType': 'ExpressionStatement',
                  'src': '3536:34:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 156,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 154,
                      'name': 'requiredTokenAmount',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 79,
                      'src': '3580:19:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'id': 155,
                      'name': '_tokenAmount',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 135,
                      'src': '3600:12:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '3580:32:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'id': 157,
                  'nodeType': 'ExpressionStatement',
                  'src': '3580:32:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 160,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 158,
                      'name': 'requiredPeriodSeconds',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 81,
                      'src': '3622:21:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'id': 159,
                      'name': '_periodSeconds',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 137,
                      'src': '3644:14:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '3622:36:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'id': 161,
                  'nodeType': 'ExpressionStatement',
                  'src': '3622:36:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 164,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 162,
                      'name': 'requiredGasPrice',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 83,
                      'src': '3668:16:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'id': 163,
                      'name': '_gasPrice',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 139,
                      'src': '3685:9:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '3668:26:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'id': 165,
                  'nodeType': 'ExpressionStatement',
                  'src': '3668:26:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 169,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 166,
                      'name': 'owner',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 69,
                      'src': '3704:5:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address_payable',
                        'typeString': 'address payable'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'expression': {
                        'argumentTypes': null,
                        'id': 167,
                        'name': 'msg',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 1386,
                        'src': '3710:3:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_magic_message',
                          'typeString': 'msg'
                        }
                      },
                      'id': 168,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'sender',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': null,
                      'src': '3710:10:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address_payable',
                        'typeString': 'address payable'
                      }
                    },
                    'src': '3704:16:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address_payable',
                      'typeString': 'address payable'
                    }
                  },
                  'id': 170,
                  'nodeType': 'ExpressionStatement',
                  'src': '3704:16:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 173,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 171,
                      'name': 'relayer',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 73,
                      'src': '3730:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address',
                        'typeString': 'address'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'id': 172,
                      'name': '_relayer',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 143,
                      'src': '3738:8:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address',
                        'typeString': 'address'
                      }
                    },
                    'src': '3730:16:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'id': 174,
                  'nodeType': 'ExpressionStatement',
                  'src': '3730:16:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 177,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 175,
                      'name': 'contractVersion',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 71,
                      'src': '3756:15:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint8',
                        'typeString': 'uint8'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'hexValue': '31',
                      'id': 176,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': true,
                      'kind': 'number',
                      'lValueRequested': false,
                      'nodeType': 'Literal',
                      'src': '3772:1:1',
                      'subdenomination': null,
                      'typeDescriptions': {
                        'typeIdentifier': 't_rational_1_by_1',
                        'typeString': 'int_const 1'
                      },
                      'value': '1'
                    },
                    'src': '3756:17:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint8',
                      'typeString': 'uint8'
                    }
                  },
                  'id': 178,
                  'nodeType': 'ExpressionStatement',
                  'src': '3756:17:1'
                }
              ]
            },
            'documentation': null,
            'id': 180,
            'implemented': true,
            'kind': 'constructor',
            'modifiers': [],
            'name': '',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 144,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 131,
                  'name': '_toAddress',
                  'nodeType': 'VariableDeclaration',
                  'scope': 180,
                  'src': '3286:18:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 130,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3286:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 133,
                  'name': '_tokenAddress',
                  'nodeType': 'VariableDeclaration',
                  'scope': 180,
                  'src': '3314:21:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 132,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3314:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 135,
                  'name': '_tokenAmount',
                  'nodeType': 'VariableDeclaration',
                  'scope': 180,
                  'src': '3345:20:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 134,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3345:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 137,
                  'name': '_periodSeconds',
                  'nodeType': 'VariableDeclaration',
                  'scope': 180,
                  'src': '3375:22:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 136,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3375:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 139,
                  'name': '_gasPrice',
                  'nodeType': 'VariableDeclaration',
                  'scope': 180,
                  'src': '3407:17:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 138,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3407:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 141,
                  'name': '_version',
                  'nodeType': 'VariableDeclaration',
                  'scope': 180,
                  'src': '3434:14:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint8',
                    'typeString': 'uint8'
                  },
                  'typeName': {
                    'id': 140,
                    'name': 'uint8',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3434:5:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint8',
                      'typeString': 'uint8'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 143,
                  'name': '_relayer',
                  'nodeType': 'VariableDeclaration',
                  'scope': 180,
                  'src': '3458:16:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 142,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3458:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '3276:204:1'
            },
            'returnParameters': {
              'id': 145,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '3488:0:1'
            },
            'scope': 710,
            'src': '3265:515:1',
            'stateMutability': 'nonpayable',
            'superFunction': null,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 202,
              'nodeType': 'Block',
              'src': '3855:114:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        },
                        'id': 189,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'expression': {
                            'argumentTypes': null,
                            'id': 186,
                            'name': 'msg',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 1386,
                            'src': '3871:3:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_magic_message',
                              'typeString': 'msg'
                            }
                          },
                          'id': 187,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'memberName': 'sender',
                          'nodeType': 'MemberAccess',
                          'referencedDeclaration': null,
                          'src': '3871:10:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address_payable',
                            'typeString': 'address payable'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '==',
                        'rightExpression': {
                          'argumentTypes': null,
                          'id': 188,
                          'name': 'owner',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 69,
                          'src': '3883:5:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address_payable',
                            'typeString': 'address payable'
                          }
                        },
                        'src': '3871:17:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      ],
                      'id': 185,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1389,
                        1390
                      ],
                      'referencedDeclaration': 1389,
                      'src': '3863:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$returns$__$',
                        'typeString': 'function (bool) pure'
                      }
                    },
                    'id': 190,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '3863:26:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 191,
                  'nodeType': 'ExpressionStatement',
                  'src': '3863:26:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 194,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 192,
                      'name': 'owner',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 69,
                      'src': '3897:5:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address_payable',
                        'typeString': 'address payable'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'id': 193,
                      'name': '_newOwner',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 182,
                      'src': '3905:9:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address_payable',
                        'typeString': 'address payable'
                      }
                    },
                    'src': '3897:17:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address_payable',
                      'typeString': 'address payable'
                    }
                  },
                  'id': 195,
                  'nodeType': 'ExpressionStatement',
                  'src': '3897:17:1'
                },
                {
                  'eventCall': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'expression': {
                          'argumentTypes': null,
                          'id': 197,
                          'name': 'msg',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 1386,
                          'src': '3944:3:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_magic_message',
                            'typeString': 'msg'
                          }
                        },
                        'id': 198,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'memberName': 'sender',
                        'nodeType': 'MemberAccess',
                        'referencedDeclaration': null,
                        'src': '3944:10:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 199,
                        'name': 'owner',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 69,
                        'src': '3956:5:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        },
                        {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        }
                      ],
                      'id': 196,
                      'name': 'ownershipChanged',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 129,
                      'src': '3927:16:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_event_nonpayable$_t_address_$_t_address_$returns$__$',
                        'typeString': 'function (address,address)'
                      }
                    },
                    'id': 200,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '3927:35:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 201,
                  'nodeType': 'EmitStatement',
                  'src': '3922:40:1'
                }
              ]
            },
            'documentation': null,
            'id': 203,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'changeOwnership',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 183,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 182,
                  'name': '_newOwner',
                  'nodeType': 'VariableDeclaration',
                  'scope': 203,
                  'src': '3811:25:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address_payable',
                    'typeString': 'address payable'
                  },
                  'typeName': {
                    'id': 181,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3811:15:1',
                    'stateMutability': 'payable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address_payable',
                      'typeString': 'address payable'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '3810:27:1'
            },
            'returnParameters': {
              'id': 184,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '3855:0:1'
            },
            'scope': 710,
            'src': '3786:183:1',
            'stateMutability': 'nonpayable',
            'superFunction': null,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 235,
              'nodeType': 'Block',
              'src': '4372:227:1',
              'statements': [
                {
                  'condition': {
                    'argumentTypes': null,
                    'commonType': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    },
                    'id': 219,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftExpression': {
                      'argumentTypes': null,
                      'baseExpression': {
                        'argumentTypes': null,
                        'id': 212,
                        'name': 'nextValidTimestamp',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 87,
                        'src': '4385:18:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_mapping$_t_bytes32_$_t_uint256_$',
                          'typeString': 'mapping(bytes32 => uint256)'
                        }
                      },
                      'id': 214,
                      'indexExpression': {
                        'argumentTypes': null,
                        'id': 213,
                        'name': 'subscriptionHash',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 205,
                        'src': '4404:16:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        }
                      },
                      'isConstant': false,
                      'isLValue': true,
                      'isPure': false,
                      'lValueRequested': false,
                      'nodeType': 'IndexAccess',
                      'src': '4385:36:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'BinaryOperation',
                    'operator': '==',
                    'rightExpression': {
                      'argumentTypes': null,
                      'arguments': [
                        {
                          'argumentTypes': null,
                          'id': 217,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': true,
                          'lValueRequested': false,
                          'nodeType': 'UnaryOperation',
                          'operator': '-',
                          'prefix': true,
                          'src': '4431:2:1',
                          'subExpression': {
                            'argumentTypes': null,
                            'hexValue': '31',
                            'id': 216,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': true,
                            'kind': 'number',
                            'lValueRequested': false,
                            'nodeType': 'Literal',
                            'src': '4432:1:1',
                            'subdenomination': null,
                            'typeDescriptions': {
                              'typeIdentifier': 't_rational_1_by_1',
                              'typeString': 'int_const 1'
                            },
                            'value': '1'
                          },
                          'typeDescriptions': {
                            'typeIdentifier': 't_rational_minus_1_by_1',
                            'typeString': 'int_const -1'
                          }
                        }
                      ],
                      'expression': {
                        'argumentTypes': [
                          {
                            'typeIdentifier': 't_rational_minus_1_by_1',
                            'typeString': 'int_const -1'
                          }
                        ],
                        'id': 215,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'lValueRequested': false,
                        'nodeType': 'ElementaryTypeNameExpression',
                        'src': '4423:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_type$_t_uint256_$',
                          'typeString': 'type(uint256)'
                        },
                        'typeName': 'uint256'
                      },
                      'id': 218,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': true,
                      'kind': 'typeConversion',
                      'lValueRequested': false,
                      'names': [],
                      'nodeType': 'FunctionCall',
                      'src': '4423:11:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '4385:49:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'falseBody': null,
                  'id': 223,
                  'nodeType': 'IfStatement',
                  'src': '4382:88:1',
                  'trueBody': {
                    'id': 222,
                    'nodeType': 'Block',
                    'src': '4435:35:1',
                    'statements': [
                      {
                        'expression': {
                          'argumentTypes': null,
                          'hexValue': '66616c7365',
                          'id': 220,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': true,
                          'kind': 'bool',
                          'lValueRequested': false,
                          'nodeType': 'Literal',
                          'src': '4454:5:1',
                          'subdenomination': null,
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          },
                          'value': 'false'
                        },
                        'functionReturnParameters': 211,
                        'id': 221,
                        'nodeType': 'Return',
                        'src': '4447:12:1'
                      }
                    ]
                  }
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'components': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        'id': 232,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'expression': {
                            'argumentTypes': null,
                            'id': 224,
                            'name': 'block',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 1376,
                            'src': '4487:5:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_magic_block',
                              'typeString': 'block'
                            }
                          },
                          'id': 225,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'memberName': 'timestamp',
                          'nodeType': 'MemberAccess',
                          'referencedDeclaration': null,
                          'src': '4487:15:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '<=',
                        'rightExpression': {
                          'argumentTypes': null,
                          'arguments': [
                            {
                              'argumentTypes': null,
                              'id': 230,
                              'name': 'gracePeriodSeconds',
                              'nodeType': 'Identifier',
                              'overloadedDeclarations': [],
                              'referencedDeclaration': 207,
                              'src': '4563:18:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_uint256',
                                'typeString': 'uint256'
                              }
                            }
                          ],
                          'expression': {
                            'argumentTypes': [
                              {
                                'typeIdentifier': 't_uint256',
                                'typeString': 'uint256'
                              }
                            ],
                            'expression': {
                              'argumentTypes': null,
                              'baseExpression': {
                                'argumentTypes': null,
                                'id': 226,
                                'name': 'nextValidTimestamp',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 87,
                                'src': '4522:18:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_mapping$_t_bytes32_$_t_uint256_$',
                                  'typeString': 'mapping(bytes32 => uint256)'
                                }
                              },
                              'id': 228,
                              'indexExpression': {
                                'argumentTypes': null,
                                'id': 227,
                                'name': 'subscriptionHash',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 205,
                                'src': '4541:16:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_bytes32',
                                  'typeString': 'bytes32'
                                }
                              },
                              'isConstant': false,
                              'isLValue': true,
                              'isPure': false,
                              'lValueRequested': false,
                              'nodeType': 'IndexAccess',
                              'src': '4522:36:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_uint256',
                                'typeString': 'uint256'
                              }
                            },
                            'id': 229,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': false,
                            'lValueRequested': false,
                            'memberName': 'add',
                            'nodeType': 'MemberAccess',
                            'referencedDeclaration': 898,
                            'src': '4522:40:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$',
                              'typeString': 'function (uint256,uint256) pure returns (uint256)'
                            }
                          },
                          'id': 231,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'kind': 'functionCall',
                          'lValueRequested': false,
                          'names': [],
                          'nodeType': 'FunctionCall',
                          'src': '4522:60:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        },
                        'src': '4487:95:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      }
                    ],
                    'id': 233,
                    'isConstant': false,
                    'isInlineArray': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'nodeType': 'TupleExpression',
                    'src': '4486:106:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'functionReturnParameters': 211,
                  'id': 234,
                  'nodeType': 'Return',
                  'src': '4479:113:1'
                }
              ]
            },
            'documentation': null,
            'id': 236,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'isSubscriptionActive',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 208,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 205,
                  'name': 'subscriptionHash',
                  'nodeType': 'VariableDeclaration',
                  'scope': 236,
                  'src': '4248:24:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bytes32',
                    'typeString': 'bytes32'
                  },
                  'typeName': {
                    'id': 204,
                    'name': 'bytes32',
                    'nodeType': 'ElementaryTypeName',
                    'src': '4248:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes32',
                      'typeString': 'bytes32'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 207,
                  'name': 'gracePeriodSeconds',
                  'nodeType': 'VariableDeclaration',
                  'scope': 236,
                  'src': '4282:26:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 206,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '4282:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '4238:76:1'
            },
            'returnParameters': {
              'id': 211,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 210,
                  'name': '',
                  'nodeType': 'VariableDeclaration',
                  'scope': 236,
                  'src': '4362:4:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bool',
                    'typeString': 'bool'
                  },
                  'typeName': {
                    'id': 209,
                    'name': 'bool',
                    'nodeType': 'ElementaryTypeName',
                    'src': '4362:4:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '4361:6:1'
            },
            'scope': 710,
            'src': '4209:390:1',
            'stateMutability': 'view',
            'superFunction': null,
            'visibility': 'external'
          },
          {
            'body': {
              'id': 335,
              'nodeType': 'Block',
              'src': '5304:999:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        'id': 264,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          },
                          'id': 260,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 256,
                            'name': 'requiredToAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 75,
                            'src': '5428:17:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '==',
                          'rightExpression': {
                            'argumentTypes': null,
                            'arguments': [
                              {
                                'argumentTypes': null,
                                'hexValue': '30',
                                'id': 258,
                                'isConstant': false,
                                'isLValue': false,
                                'isPure': true,
                                'kind': 'number',
                                'lValueRequested': false,
                                'nodeType': 'Literal',
                                'src': '5457:1:1',
                                'subdenomination': null,
                                'typeDescriptions': {
                                  'typeIdentifier': 't_rational_0_by_1',
                                  'typeString': 'int_const 0'
                                },
                                'value': '0'
                              }
                            ],
                            'expression': {
                              'argumentTypes': [
                                {
                                  'typeIdentifier': 't_rational_0_by_1',
                                  'typeString': 'int_const 0'
                                }
                              ],
                              'id': 257,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': true,
                              'lValueRequested': false,
                              'nodeType': 'ElementaryTypeNameExpression',
                              'src': '5449:7:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_type$_t_address_$',
                                'typeString': 'type(address)'
                              },
                              'typeName': 'address'
                            },
                            'id': 259,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': true,
                            'kind': 'typeConversion',
                            'lValueRequested': false,
                            'names': [],
                            'nodeType': 'FunctionCall',
                            'src': '5449:10:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address_payable',
                              'typeString': 'address payable'
                            }
                          },
                          'src': '5428:31:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '||',
                        'rightExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          },
                          'id': 263,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 261,
                            'name': 'to',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 240,
                            'src': '5463:2:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '==',
                          'rightExpression': {
                            'argumentTypes': null,
                            'id': 262,
                            'name': 'requiredToAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 75,
                            'src': '5469:17:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          'src': '5463:23:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'src': '5428:58:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '7265717569726564546f41646472657373204661696c757265',
                        'id': 265,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '5488:27:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_1780bcf794aab203f72828cdd8822e2720f64bbe143d842ce30f054eabc78430',
                          'typeString': 'literal_string \'requiredToAddress Failure\''
                        },
                        'value': 'requiredToAddress Failure'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_1780bcf794aab203f72828cdd8822e2720f64bbe143d842ce30f054eabc78430',
                          'typeString': 'literal_string \'requiredToAddress Failure\''
                        }
                      ],
                      'id': 255,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1389,
                        1390
                      ],
                      'referencedDeclaration': 1390,
                      'src': '5419:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 266,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '5419:98:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 267,
                  'nodeType': 'ExpressionStatement',
                  'src': '5419:98:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        'id': 277,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          },
                          'id': 273,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 269,
                            'name': 'requiredTokenAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 77,
                            'src': '5536:20:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '==',
                          'rightExpression': {
                            'argumentTypes': null,
                            'arguments': [
                              {
                                'argumentTypes': null,
                                'hexValue': '30',
                                'id': 271,
                                'isConstant': false,
                                'isLValue': false,
                                'isPure': true,
                                'kind': 'number',
                                'lValueRequested': false,
                                'nodeType': 'Literal',
                                'src': '5568:1:1',
                                'subdenomination': null,
                                'typeDescriptions': {
                                  'typeIdentifier': 't_rational_0_by_1',
                                  'typeString': 'int_const 0'
                                },
                                'value': '0'
                              }
                            ],
                            'expression': {
                              'argumentTypes': [
                                {
                                  'typeIdentifier': 't_rational_0_by_1',
                                  'typeString': 'int_const 0'
                                }
                              ],
                              'id': 270,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': true,
                              'lValueRequested': false,
                              'nodeType': 'ElementaryTypeNameExpression',
                              'src': '5560:7:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_type$_t_address_$',
                                'typeString': 'type(address)'
                              },
                              'typeName': 'address'
                            },
                            'id': 272,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': true,
                            'kind': 'typeConversion',
                            'lValueRequested': false,
                            'names': [],
                            'nodeType': 'FunctionCall',
                            'src': '5560:10:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address_payable',
                              'typeString': 'address payable'
                            }
                          },
                          'src': '5536:34:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '||',
                        'rightExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          },
                          'id': 276,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 274,
                            'name': 'tokenAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 242,
                            'src': '5574:12:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '==',
                          'rightExpression': {
                            'argumentTypes': null,
                            'id': 275,
                            'name': 'requiredTokenAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 77,
                            'src': '5590:20:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          'src': '5574:36:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'src': '5536:74:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '7265717569726564546f6b656e41646472657373204661696c757265',
                        'id': 278,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '5612:30:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_0a4155ffffdaca064dc0492130d948bbabedf9b4a3c7b4dba7701d2aa083061c',
                          'typeString': 'literal_string \'requiredTokenAddress Failure\''
                        },
                        'value': 'requiredTokenAddress Failure'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_0a4155ffffdaca064dc0492130d948bbabedf9b4a3c7b4dba7701d2aa083061c',
                          'typeString': 'literal_string \'requiredTokenAddress Failure\''
                        }
                      ],
                      'id': 268,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1389,
                        1390
                      ],
                      'referencedDeclaration': 1390,
                      'src': '5527:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 279,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '5527:118:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 280,
                  'nodeType': 'ExpressionStatement',
                  'src': '5527:118:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        'id': 288,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          },
                          'id': 284,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 282,
                            'name': 'requiredTokenAmount',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 79,
                            'src': '5664:19:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '==',
                          'rightExpression': {
                            'argumentTypes': null,
                            'hexValue': '30',
                            'id': 283,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': true,
                            'kind': 'number',
                            'lValueRequested': false,
                            'nodeType': 'Literal',
                            'src': '5687:1:1',
                            'subdenomination': null,
                            'typeDescriptions': {
                              'typeIdentifier': 't_rational_0_by_1',
                              'typeString': 'int_const 0'
                            },
                            'value': '0'
                          },
                          'src': '5664:24:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '||',
                        'rightExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          },
                          'id': 287,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 285,
                            'name': 'tokenAmount',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 244,
                            'src': '5692:11:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '==',
                          'rightExpression': {
                            'argumentTypes': null,
                            'id': 286,
                            'name': 'requiredTokenAmount',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 79,
                            'src': '5707:19:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'src': '5692:34:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'src': '5664:62:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '7265717569726564546f6b656e416d6f756e74204661696c757265',
                        'id': 289,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '5728:29:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_0dfea9330de22cf3a44a9f589d334e51ce03eb93b887fccb426b90a5cf902785',
                          'typeString': 'literal_string \'requiredTokenAmount Failure\''
                        },
                        'value': 'requiredTokenAmount Failure'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_0dfea9330de22cf3a44a9f589d334e51ce03eb93b887fccb426b90a5cf902785',
                          'typeString': 'literal_string \'requiredTokenAmount Failure\''
                        }
                      ],
                      'id': 281,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1389,
                        1390
                      ],
                      'referencedDeclaration': 1390,
                      'src': '5655:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 290,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '5655:105:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 291,
                  'nodeType': 'ExpressionStatement',
                  'src': '5655:105:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        'id': 299,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          },
                          'id': 295,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 293,
                            'name': 'requiredPeriodSeconds',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 81,
                            'src': '5779:21:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '==',
                          'rightExpression': {
                            'argumentTypes': null,
                            'hexValue': '30',
                            'id': 294,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': true,
                            'kind': 'number',
                            'lValueRequested': false,
                            'nodeType': 'Literal',
                            'src': '5804:1:1',
                            'subdenomination': null,
                            'typeDescriptions': {
                              'typeIdentifier': 't_rational_0_by_1',
                              'typeString': 'int_const 0'
                            },
                            'value': '0'
                          },
                          'src': '5779:26:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '||',
                        'rightExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          },
                          'id': 298,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 296,
                            'name': 'periodSeconds',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 246,
                            'src': '5809:13:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '==',
                          'rightExpression': {
                            'argumentTypes': null,
                            'id': 297,
                            'name': 'requiredPeriodSeconds',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 81,
                            'src': '5826:21:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'src': '5809:38:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'src': '5779:68:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '7265717569726564506572696f645365636f6e6473204661696c757265',
                        'id': 300,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '5849:31:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_829576bc6f2a6cbacb797e1e609350189547b06e13145f9ac8afe9b515c8265b',
                          'typeString': 'literal_string \'requiredPeriodSeconds Failure\''
                        },
                        'value': 'requiredPeriodSeconds Failure'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_829576bc6f2a6cbacb797e1e609350189547b06e13145f9ac8afe9b515c8265b',
                          'typeString': 'literal_string \'requiredPeriodSeconds Failure\''
                        }
                      ],
                      'id': 292,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1389,
                        1390
                      ],
                      'referencedDeclaration': 1390,
                      'src': '5770:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 301,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '5770:113:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 302,
                  'nodeType': 'ExpressionStatement',
                  'src': '5770:113:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        'id': 310,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          },
                          'id': 306,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 304,
                            'name': 'requiredGasPrice',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 83,
                            'src': '5902:16:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '==',
                          'rightExpression': {
                            'argumentTypes': null,
                            'hexValue': '30',
                            'id': 305,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': true,
                            'kind': 'number',
                            'lValueRequested': false,
                            'nodeType': 'Literal',
                            'src': '5922:1:1',
                            'subdenomination': null,
                            'typeDescriptions': {
                              'typeIdentifier': 't_rational_0_by_1',
                              'typeString': 'int_const 0'
                            },
                            'value': '0'
                          },
                          'src': '5902:21:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '||',
                        'rightExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          },
                          'id': 309,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 307,
                            'name': 'gasPrice',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 248,
                            'src': '5927:8:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '==',
                          'rightExpression': {
                            'argumentTypes': null,
                            'id': 308,
                            'name': 'requiredGasPrice',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 83,
                            'src': '5939:16:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'src': '5927:28:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'src': '5902:53:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '72657175697265644761735072696365204661696c757265',
                        'id': 311,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '5957:26:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_0549ea7d3e61063659accdb56e119c83714b122fe72a3eca04edb4ce124397bb',
                          'typeString': 'literal_string \'requiredGasPrice Failure\''
                        },
                        'value': 'requiredGasPrice Failure'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_0549ea7d3e61063659accdb56e119c83714b122fe72a3eca04edb4ce124397bb',
                          'typeString': 'literal_string \'requiredGasPrice Failure\''
                        }
                      ],
                      'id': 303,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1389,
                        1390
                      ],
                      'referencedDeclaration': 1390,
                      'src': '5893:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 312,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '5893:93:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 313,
                  'nodeType': 'ExpressionStatement',
                  'src': '5893:93:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'arguments': [
                          {
                            'argumentTypes': null,
                            'arguments': [
                              {
                                'argumentTypes': null,
                                'hexValue': '30783139',
                                'id': 318,
                                'isConstant': false,
                                'isLValue': false,
                                'isPure': true,
                                'kind': 'number',
                                'lValueRequested': false,
                                'nodeType': 'Literal',
                                'src': '6066:4:1',
                                'subdenomination': null,
                                'typeDescriptions': {
                                  'typeIdentifier': 't_rational_25_by_1',
                                  'typeString': 'int_const 25'
                                },
                                'value': '0x19'
                              }
                            ],
                            'expression': {
                              'argumentTypes': [
                                {
                                  'typeIdentifier': 't_rational_25_by_1',
                                  'typeString': 'int_const 25'
                                }
                              ],
                              'id': 317,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': true,
                              'lValueRequested': false,
                              'nodeType': 'ElementaryTypeNameExpression',
                              'src': '6061:4:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_type$_t_bytes1_$',
                                'typeString': 'type(bytes1)'
                              },
                              'typeName': 'byte'
                            },
                            'id': 319,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': true,
                            'kind': 'typeConversion',
                            'lValueRequested': false,
                            'names': [],
                            'nodeType': 'FunctionCall',
                            'src': '6061:10:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_bytes1',
                              'typeString': 'bytes1'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'arguments': [
                              {
                                'argumentTypes': null,
                                'hexValue': '30',
                                'id': 321,
                                'isConstant': false,
                                'isLValue': false,
                                'isPure': true,
                                'kind': 'number',
                                'lValueRequested': false,
                                'nodeType': 'Literal',
                                'src': '6094:1:1',
                                'subdenomination': null,
                                'typeDescriptions': {
                                  'typeIdentifier': 't_rational_0_by_1',
                                  'typeString': 'int_const 0'
                                },
                                'value': '0'
                              }
                            ],
                            'expression': {
                              'argumentTypes': [
                                {
                                  'typeIdentifier': 't_rational_0_by_1',
                                  'typeString': 'int_const 0'
                                }
                              ],
                              'id': 320,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': true,
                              'lValueRequested': false,
                              'nodeType': 'ElementaryTypeNameExpression',
                              'src': '6089:4:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_type$_t_bytes1_$',
                                'typeString': 'type(bytes1)'
                              },
                              'typeName': 'byte'
                            },
                            'id': 322,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': true,
                            'kind': 'typeConversion',
                            'lValueRequested': false,
                            'names': [],
                            'nodeType': 'FunctionCall',
                            'src': '6089:7:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_bytes1',
                              'typeString': 'bytes1'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'arguments': [
                              {
                                'argumentTypes': null,
                                'id': 324,
                                'name': 'this',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 1409,
                                'src': '6122:4:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_contract$_Subscription_$710',
                                  'typeString': 'contract Subscription'
                                }
                              }
                            ],
                            'expression': {
                              'argumentTypes': [
                                {
                                  'typeIdentifier': 't_contract$_Subscription_$710',
                                  'typeString': 'contract Subscription'
                                }
                              ],
                              'id': 323,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': true,
                              'lValueRequested': false,
                              'nodeType': 'ElementaryTypeNameExpression',
                              'src': '6114:7:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_type$_t_address_$',
                                'typeString': 'type(address)'
                              },
                              'typeName': 'address'
                            },
                            'id': 325,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': false,
                            'kind': 'typeConversion',
                            'lValueRequested': false,
                            'names': [],
                            'nodeType': 'FunctionCall',
                            'src': '6114:13:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address_payable',
                              'typeString': 'address payable'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 326,
                            'name': 'from',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 238,
                            'src': '6145:4:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 327,
                            'name': 'to',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 240,
                            'src': '6167:2:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 328,
                            'name': 'tokenAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 242,
                            'src': '6187:12:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 329,
                            'name': 'tokenAmount',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 244,
                            'src': '6217:11:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 330,
                            'name': 'periodSeconds',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 246,
                            'src': '6246:13:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 331,
                            'name': 'gasPrice',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 248,
                            'src': '6277:8:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          }
                        ],
                        'expression': {
                          'argumentTypes': [
                            {
                              'typeIdentifier': 't_bytes1',
                              'typeString': 'bytes1'
                            },
                            {
                              'typeIdentifier': 't_bytes1',
                              'typeString': 'bytes1'
                            },
                            {
                              'typeIdentifier': 't_address_payable',
                              'typeString': 'address payable'
                            },
                            {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            },
                            {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            },
                            {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            },
                            {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            },
                            {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            },
                            {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          ],
                          'expression': {
                            'argumentTypes': null,
                            'id': 315,
                            'name': 'abi',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 1373,
                            'src': '6027:3:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_magic_abi',
                              'typeString': 'abi'
                            }
                          },
                          'id': 316,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': true,
                          'lValueRequested': false,
                          'memberName': 'encodePacked',
                          'nodeType': 'MemberAccess',
                          'referencedDeclaration': null,
                          'src': '6027:16:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$',
                            'typeString': 'function () pure returns (bytes memory)'
                          }
                        },
                        'id': 332,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'functionCall',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '6027:268:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes_memory_ptr',
                          'typeString': 'bytes memory'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bytes_memory_ptr',
                          'typeString': 'bytes memory'
                        }
                      ],
                      'id': 314,
                      'name': 'keccak256',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 1380,
                      'src': '6004:9:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$',
                        'typeString': 'function (bytes memory) pure returns (bytes32)'
                      }
                    },
                    'id': 333,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '6004:292:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes32',
                      'typeString': 'bytes32'
                    }
                  },
                  'functionReturnParameters': 254,
                  'id': 334,
                  'nodeType': 'Return',
                  'src': '5997:299:1'
                }
              ]
            },
            'documentation': null,
            'id': 336,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'getSubscriptionHash',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 251,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 238,
                  'name': 'from',
                  'nodeType': 'VariableDeclaration',
                  'scope': 336,
                  'src': '4793:12:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 237,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '4793:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 240,
                  'name': 'to',
                  'nodeType': 'VariableDeclaration',
                  'scope': 336,
                  'src': '4832:10:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 239,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '4832:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 242,
                  'name': 'tokenAddress',
                  'nodeType': 'VariableDeclaration',
                  'scope': 336,
                  'src': '4868:20:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 241,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '4868:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 244,
                  'name': 'tokenAmount',
                  'nodeType': 'VariableDeclaration',
                  'scope': 336,
                  'src': '4940:19:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 243,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '4940:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 246,
                  'name': 'periodSeconds',
                  'nodeType': 'VariableDeclaration',
                  'scope': 336,
                  'src': '5010:21:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 245,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '5010:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 248,
                  'name': 'gasPrice',
                  'nodeType': 'VariableDeclaration',
                  'scope': 336,
                  'src': '5082:16:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 247,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '5082:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 250,
                  'name': 'nonce',
                  'nodeType': 'VariableDeclaration',
                  'scope': 336,
                  'src': '5166:13:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 249,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '5166:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '4783:462:1'
            },
            'returnParameters': {
              'id': 254,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 253,
                  'name': '',
                  'nodeType': 'VariableDeclaration',
                  'scope': 336,
                  'src': '5291:7:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bytes32',
                    'typeString': 'bytes32'
                  },
                  'typeName': {
                    'id': 252,
                    'name': 'bytes32',
                    'nodeType': 'ElementaryTypeName',
                    'src': '5291:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes32',
                      'typeString': 'bytes32'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '5290:9:1'
            },
            'scope': 710,
            'src': '4755:1548:1',
            'stateMutability': 'view',
            'superFunction': null,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 352,
              'nodeType': 'Block',
              'src': '6598:84:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 349,
                        'name': 'signature',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 340,
                        'src': '6665:9:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes_memory_ptr',
                          'typeString': 'bytes memory'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bytes_memory_ptr',
                          'typeString': 'bytes memory'
                        }
                      ],
                      'expression': {
                        'argumentTypes': null,
                        'arguments': [],
                        'expression': {
                          'argumentTypes': [],
                          'expression': {
                            'argumentTypes': null,
                            'id': 345,
                            'name': 'subscriptionHash',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 338,
                            'src': '6615:16:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_bytes32',
                              'typeString': 'bytes32'
                            }
                          },
                          'id': 346,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'memberName': 'toEthSignedMessageHash',
                          'nodeType': 'MemberAccess',
                          'referencedDeclaration': 790,
                          'src': '6615:39:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_function_internal_pure$_t_bytes32_$returns$_t_bytes32_$bound_to$_t_bytes32_$',
                            'typeString': 'function (bytes32) pure returns (bytes32)'
                          }
                        },
                        'id': 347,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'functionCall',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '6615:41:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        }
                      },
                      'id': 348,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'recover',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 774,
                      'src': '6615:49:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_pure$_t_bytes32_$_t_bytes_memory_ptr_$returns$_t_address_$bound_to$_t_bytes32_$',
                        'typeString': 'function (bytes32,bytes memory) pure returns (address)'
                      }
                    },
                    'id': 350,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '6615:60:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'functionReturnParameters': 344,
                  'id': 351,
                  'nodeType': 'Return',
                  'src': '6608:67:1'
                }
              ]
            },
            'documentation': null,
            'id': 353,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'getSubscriptionSigner',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 341,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 338,
                  'name': 'subscriptionHash',
                  'nodeType': 'VariableDeclaration',
                  'scope': 353,
                  'src': '6404:24:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bytes32',
                    'typeString': 'bytes32'
                  },
                  'typeName': {
                    'id': 337,
                    'name': 'bytes32',
                    'nodeType': 'ElementaryTypeName',
                    'src': '6404:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes32',
                      'typeString': 'bytes32'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 340,
                  'name': 'signature',
                  'nodeType': 'VariableDeclaration',
                  'scope': 353,
                  'src': '6461:22:1',
                  'stateVariable': false,
                  'storageLocation': 'memory',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bytes_memory_ptr',
                    'typeString': 'bytes'
                  },
                  'typeName': {
                    'id': 339,
                    'name': 'bytes',
                    'nodeType': 'ElementaryTypeName',
                    'src': '6461:5:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes_storage_ptr',
                      'typeString': 'bytes'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '6394:145:1'
            },
            'returnParameters': {
              'id': 344,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 343,
                  'name': '',
                  'nodeType': 'VariableDeclaration',
                  'scope': 353,
                  'src': '6585:7:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 342,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '6585:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '6584:9:1'
            },
            'scope': 710,
            'src': '6364:318:1',
            'stateMutability': 'pure',
            'superFunction': null,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 444,
              'nodeType': 'Block',
              'src': '7433:633:1',
              'statements': [
                {
                  'assignments': [
                    375
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 375,
                      'name': 'subscriptionHash',
                      'nodeType': 'VariableDeclaration',
                      'scope': 444,
                      'src': '7443:24:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_bytes32',
                        'typeString': 'bytes32'
                      },
                      'typeName': {
                        'id': 374,
                        'name': 'bytes32',
                        'nodeType': 'ElementaryTypeName',
                        'src': '7443:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 385,
                  'initialValue': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 377,
                        'name': 'from',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 355,
                        'src': '7503:4:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 378,
                        'name': 'to',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 357,
                        'src': '7509:2:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 379,
                        'name': 'tokenAddress',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 359,
                        'src': '7513:12:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 380,
                        'name': 'tokenAmount',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 361,
                        'src': '7527:11:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 381,
                        'name': 'periodSeconds',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 363,
                        'src': '7540:13:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 382,
                        'name': 'gasPrice',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 365,
                        'src': '7555:8:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 383,
                        'name': 'nonce',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 367,
                        'src': '7565:5:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'id': 376,
                      'name': 'getSubscriptionHash',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 336,
                      'src': '7470:19:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_view$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_bytes32_$',
                        'typeString': 'function (address,address,address,uint256,uint256,uint256,uint256) view returns (bytes32)'
                      }
                    },
                    'id': 384,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '7470:110:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes32',
                      'typeString': 'bytes32'
                    }
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '7443:137:1'
                },
                {
                  'assignments': [
                    387
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 387,
                      'name': 'signer',
                      'nodeType': 'VariableDeclaration',
                      'scope': 444,
                      'src': '7590:14:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address',
                        'typeString': 'address'
                      },
                      'typeName': {
                        'id': 386,
                        'name': 'address',
                        'nodeType': 'ElementaryTypeName',
                        'src': '7590:7:1',
                        'stateMutability': 'nonpayable',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 392,
                  'initialValue': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 389,
                        'name': 'subscriptionHash',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 375,
                        'src': '7629:16:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 390,
                        'name': 'signature',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 369,
                        'src': '7647:9:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes_memory_ptr',
                          'typeString': 'bytes memory'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        },
                        {
                          'typeIdentifier': 't_bytes_memory_ptr',
                          'typeString': 'bytes memory'
                        }
                      ],
                      'id': 388,
                      'name': 'getSubscriptionSigner',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 353,
                      'src': '7607:21:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_pure$_t_bytes32_$_t_bytes_memory_ptr_$returns$_t_address_$',
                        'typeString': 'function (bytes32,bytes memory) pure returns (address)'
                      }
                    },
                    'id': 391,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '7607:50:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '7590:67:1'
                },
                {
                  'assignments': [
                    394
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 394,
                      'name': 'allowance',
                      'nodeType': 'VariableDeclaration',
                      'scope': 444,
                      'src': '7667:17:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      },
                      'typeName': {
                        'id': 393,
                        'name': 'uint256',
                        'nodeType': 'ElementaryTypeName',
                        'src': '7667:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 404,
                  'initialValue': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 399,
                        'name': 'from',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 355,
                        'src': '7717:4:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'arguments': [
                          {
                            'argumentTypes': null,
                            'id': 401,
                            'name': 'this',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 1409,
                            'src': '7731:4:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_contract$_Subscription_$710',
                              'typeString': 'contract Subscription'
                            }
                          }
                        ],
                        'expression': {
                          'argumentTypes': [
                            {
                              'typeIdentifier': 't_contract$_Subscription_$710',
                              'typeString': 'contract Subscription'
                            }
                          ],
                          'id': 400,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': true,
                          'lValueRequested': false,
                          'nodeType': 'ElementaryTypeNameExpression',
                          'src': '7723:7:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_type$_t_address_$',
                            'typeString': 'type(address)'
                          },
                          'typeName': 'address'
                        },
                        'id': 402,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'typeConversion',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '7723:13:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        }
                      ],
                      'expression': {
                        'argumentTypes': null,
                        'arguments': [
                          {
                            'argumentTypes': null,
                            'id': 396,
                            'name': 'tokenAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 359,
                            'src': '7693:12:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          }
                        ],
                        'expression': {
                          'argumentTypes': [
                            {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          ],
                          'id': 395,
                          'name': 'ERC20',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 1302,
                          'src': '7687:5:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_type$_t_contract$_ERC20_$1302_$',
                            'typeString': 'type(contract ERC20)'
                          }
                        },
                        'id': 397,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'typeConversion',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '7687:19:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_contract$_ERC20_$1302',
                          'typeString': 'contract ERC20'
                        }
                      },
                      'id': 398,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'allowance',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 976,
                      'src': '7687:29:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_external_view$_t_address_$_t_address_$returns$_t_uint256_$',
                        'typeString': 'function (address,address) view external returns (uint256)'
                      }
                    },
                    'id': 403,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '7687:50:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '7667:70:1'
                },
                {
                  'assignments': [
                    406
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 406,
                      'name': 'balance',
                      'nodeType': 'VariableDeclaration',
                      'scope': 444,
                      'src': '7747:15:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      },
                      'typeName': {
                        'id': 405,
                        'name': 'uint256',
                        'nodeType': 'ElementaryTypeName',
                        'src': '7747:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 413,
                  'initialValue': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 411,
                        'name': 'from',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 355,
                        'src': '7795:4:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      ],
                      'expression': {
                        'argumentTypes': null,
                        'arguments': [
                          {
                            'argumentTypes': null,
                            'id': 408,
                            'name': 'tokenAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 359,
                            'src': '7771:12:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          }
                        ],
                        'expression': {
                          'argumentTypes': [
                            {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          ],
                          'id': 407,
                          'name': 'ERC20',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 1302,
                          'src': '7765:5:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_type$_t_contract$_ERC20_$1302_$',
                            'typeString': 'type(contract ERC20)'
                          }
                        },
                        'id': 409,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'typeConversion',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '7765:19:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_contract$_ERC20_$1302',
                          'typeString': 'contract ERC20'
                        }
                      },
                      'id': 410,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'balanceOf',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 960,
                      'src': '7765:29:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_external_view$_t_address_$returns$_t_uint256_$',
                        'typeString': 'function (address) view external returns (uint256)'
                      }
                    },
                    'id': 412,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '7765:35:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '7747:53:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'components': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        'id': 441,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          },
                          'id': 434,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'commonType': {
                              'typeIdentifier': 't_bool',
                              'typeString': 'bool'
                            },
                            'id': 427,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': false,
                            'lValueRequested': false,
                            'leftExpression': {
                              'argumentTypes': null,
                              'commonType': {
                                'typeIdentifier': 't_bool',
                                'typeString': 'bool'
                              },
                              'id': 420,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': false,
                              'lValueRequested': false,
                              'leftExpression': {
                                'argumentTypes': null,
                                'commonType': {
                                  'typeIdentifier': 't_address',
                                  'typeString': 'address'
                                },
                                'id': 416,
                                'isConstant': false,
                                'isLValue': false,
                                'isPure': false,
                                'lValueRequested': false,
                                'leftExpression': {
                                  'argumentTypes': null,
                                  'id': 414,
                                  'name': 'signer',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 387,
                                  'src': '7832:6:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_address',
                                    'typeString': 'address'
                                  }
                                },
                                'nodeType': 'BinaryOperation',
                                'operator': '==',
                                'rightExpression': {
                                  'argumentTypes': null,
                                  'id': 415,
                                  'name': 'from',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 355,
                                  'src': '7842:4:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_address',
                                    'typeString': 'address'
                                  }
                                },
                                'src': '7832:14:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_bool',
                                  'typeString': 'bool'
                                }
                              },
                              'nodeType': 'BinaryOperation',
                              'operator': '&&',
                              'rightExpression': {
                                'argumentTypes': null,
                                'commonType': {
                                  'typeIdentifier': 't_address',
                                  'typeString': 'address'
                                },
                                'id': 419,
                                'isConstant': false,
                                'isLValue': false,
                                'isPure': false,
                                'lValueRequested': false,
                                'leftExpression': {
                                  'argumentTypes': null,
                                  'id': 417,
                                  'name': 'from',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 355,
                                  'src': '7862:4:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_address',
                                    'typeString': 'address'
                                  }
                                },
                                'nodeType': 'BinaryOperation',
                                'operator': '!=',
                                'rightExpression': {
                                  'argumentTypes': null,
                                  'id': 418,
                                  'name': 'to',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 357,
                                  'src': '7870:2:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_address',
                                    'typeString': 'address'
                                  }
                                },
                                'src': '7862:10:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_bool',
                                  'typeString': 'bool'
                                }
                              },
                              'src': '7832:40:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_bool',
                                'typeString': 'bool'
                              }
                            },
                            'nodeType': 'BinaryOperation',
                            'operator': '&&',
                            'rightExpression': {
                              'argumentTypes': null,
                              'commonType': {
                                'typeIdentifier': 't_uint256',
                                'typeString': 'uint256'
                              },
                              'id': 426,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': false,
                              'lValueRequested': false,
                              'leftExpression': {
                                'argumentTypes': null,
                                'expression': {
                                  'argumentTypes': null,
                                  'id': 421,
                                  'name': 'block',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 1376,
                                  'src': '7888:5:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_magic_block',
                                    'typeString': 'block'
                                  }
                                },
                                'id': 422,
                                'isConstant': false,
                                'isLValue': false,
                                'isPure': false,
                                'lValueRequested': false,
                                'memberName': 'timestamp',
                                'nodeType': 'MemberAccess',
                                'referencedDeclaration': null,
                                'src': '7888:15:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_uint256',
                                  'typeString': 'uint256'
                                }
                              },
                              'nodeType': 'BinaryOperation',
                              'operator': '>=',
                              'rightExpression': {
                                'argumentTypes': null,
                                'baseExpression': {
                                  'argumentTypes': null,
                                  'id': 423,
                                  'name': 'nextValidTimestamp',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 87,
                                  'src': '7907:18:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_mapping$_t_bytes32_$_t_uint256_$',
                                    'typeString': 'mapping(bytes32 => uint256)'
                                  }
                                },
                                'id': 425,
                                'indexExpression': {
                                  'argumentTypes': null,
                                  'id': 424,
                                  'name': 'subscriptionHash',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 375,
                                  'src': '7926:16:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_bytes32',
                                    'typeString': 'bytes32'
                                  }
                                },
                                'isConstant': false,
                                'isLValue': true,
                                'isPure': false,
                                'lValueRequested': false,
                                'nodeType': 'IndexAccess',
                                'src': '7907:36:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_uint256',
                                  'typeString': 'uint256'
                                }
                              },
                              'src': '7888:55:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_bool',
                                'typeString': 'bool'
                              }
                            },
                            'src': '7832:111:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_bool',
                              'typeString': 'bool'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '&&',
                          'rightExpression': {
                            'argumentTypes': null,
                            'commonType': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            },
                            'id': 433,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': false,
                            'lValueRequested': false,
                            'leftExpression': {
                              'argumentTypes': null,
                              'id': 428,
                              'name': 'allowance',
                              'nodeType': 'Identifier',
                              'overloadedDeclarations': [],
                              'referencedDeclaration': 394,
                              'src': '7959:9:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_uint256',
                                'typeString': 'uint256'
                              }
                            },
                            'nodeType': 'BinaryOperation',
                            'operator': '>=',
                            'rightExpression': {
                              'argumentTypes': null,
                              'arguments': [
                                {
                                  'argumentTypes': null,
                                  'id': 431,
                                  'name': 'gasPrice',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 365,
                                  'src': '7988:8:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_uint256',
                                    'typeString': 'uint256'
                                  }
                                }
                              ],
                              'expression': {
                                'argumentTypes': [
                                  {
                                    'typeIdentifier': 't_uint256',
                                    'typeString': 'uint256'
                                  }
                                ],
                                'expression': {
                                  'argumentTypes': null,
                                  'id': 429,
                                  'name': 'tokenAmount',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 361,
                                  'src': '7972:11:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_uint256',
                                    'typeString': 'uint256'
                                  }
                                },
                                'id': 430,
                                'isConstant': false,
                                'isLValue': false,
                                'isPure': false,
                                'lValueRequested': false,
                                'memberName': 'add',
                                'nodeType': 'MemberAccess',
                                'referencedDeclaration': 898,
                                'src': '7972:15:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$',
                                  'typeString': 'function (uint256,uint256) pure returns (uint256)'
                                }
                              },
                              'id': 432,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': false,
                              'kind': 'functionCall',
                              'lValueRequested': false,
                              'names': [],
                              'nodeType': 'FunctionCall',
                              'src': '7972:25:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_uint256',
                                'typeString': 'uint256'
                              }
                            },
                            'src': '7959:38:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_bool',
                              'typeString': 'bool'
                            }
                          },
                          'src': '7832:165:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '&&',
                        'rightExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          },
                          'id': 440,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 435,
                            'name': 'balance',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 406,
                            'src': '8013:7:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '>=',
                          'rightExpression': {
                            'argumentTypes': null,
                            'arguments': [
                              {
                                'argumentTypes': null,
                                'id': 438,
                                'name': 'gasPrice',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 365,
                                'src': '8040:8:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_uint256',
                                  'typeString': 'uint256'
                                }
                              }
                            ],
                            'expression': {
                              'argumentTypes': [
                                {
                                  'typeIdentifier': 't_uint256',
                                  'typeString': 'uint256'
                                }
                              ],
                              'expression': {
                                'argumentTypes': null,
                                'id': 436,
                                'name': 'tokenAmount',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 361,
                                'src': '8024:11:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_uint256',
                                  'typeString': 'uint256'
                                }
                              },
                              'id': 437,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': false,
                              'lValueRequested': false,
                              'memberName': 'add',
                              'nodeType': 'MemberAccess',
                              'referencedDeclaration': 898,
                              'src': '8024:15:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$',
                                'typeString': 'function (uint256,uint256) pure returns (uint256)'
                              }
                            },
                            'id': 439,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': false,
                            'kind': 'functionCall',
                            'lValueRequested': false,
                            'names': [],
                            'nodeType': 'FunctionCall',
                            'src': '8024:25:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'src': '8013:36:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'src': '7832:217:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      }
                    ],
                    'id': 442,
                    'isConstant': false,
                    'isInlineArray': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'nodeType': 'TupleExpression',
                    'src': '7818:241:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'functionReturnParameters': 373,
                  'id': 443,
                  'nodeType': 'Return',
                  'src': '7811:248:1'
                }
              ]
            },
            'documentation': null,
            'id': 445,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'isSubscriptionReady',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 370,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 355,
                  'name': 'from',
                  'nodeType': 'VariableDeclaration',
                  'scope': 445,
                  'src': '6843:12:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 354,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '6843:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 357,
                  'name': 'to',
                  'nodeType': 'VariableDeclaration',
                  'scope': 445,
                  'src': '6882:10:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 356,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '6882:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 359,
                  'name': 'tokenAddress',
                  'nodeType': 'VariableDeclaration',
                  'scope': 445,
                  'src': '6918:20:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 358,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '6918:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 361,
                  'name': 'tokenAmount',
                  'nodeType': 'VariableDeclaration',
                  'scope': 445,
                  'src': '6990:19:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 360,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '6990:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 363,
                  'name': 'periodSeconds',
                  'nodeType': 'VariableDeclaration',
                  'scope': 445,
                  'src': '7060:21:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 362,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '7060:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 365,
                  'name': 'gasPrice',
                  'nodeType': 'VariableDeclaration',
                  'scope': 445,
                  'src': '7132:16:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 364,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '7132:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 367,
                  'name': 'nonce',
                  'nodeType': 'VariableDeclaration',
                  'scope': 445,
                  'src': '7217:13:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 366,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '7217:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 369,
                  'name': 'signature',
                  'nodeType': 'VariableDeclaration',
                  'scope': 445,
                  'src': '7299:22:1',
                  'stateVariable': false,
                  'storageLocation': 'memory',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bytes_memory_ptr',
                    'typeString': 'bytes'
                  },
                  'typeName': {
                    'id': 368,
                    'name': 'bytes',
                    'nodeType': 'ElementaryTypeName',
                    'src': '7299:5:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes_storage_ptr',
                      'typeString': 'bytes'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '6833:544:1'
            },
            'returnParameters': {
              'id': 373,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 372,
                  'name': '',
                  'nodeType': 'VariableDeclaration',
                  'scope': 445,
                  'src': '7423:4:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bool',
                    'typeString': 'bool'
                  },
                  'typeName': {
                    'id': 371,
                    'name': 'bool',
                    'nodeType': 'ElementaryTypeName',
                    'src': '7423:4:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '7422:6:1'
            },
            'scope': 710,
            'src': '6805:1261:1',
            'stateMutability': 'view',
            'superFunction': null,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 521,
              'nodeType': 'Block',
              'src': '8941:802:1',
              'statements': [
                {
                  'assignments': [
                    467
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 467,
                      'name': 'subscriptionHash',
                      'nodeType': 'VariableDeclaration',
                      'scope': 521,
                      'src': '8951:24:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_bytes32',
                        'typeString': 'bytes32'
                      },
                      'typeName': {
                        'id': 466,
                        'name': 'bytes32',
                        'nodeType': 'ElementaryTypeName',
                        'src': '8951:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 477,
                  'initialValue': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 469,
                        'name': 'from',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 447,
                        'src': '9011:4:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 470,
                        'name': 'to',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 449,
                        'src': '9017:2:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 471,
                        'name': 'tokenAddress',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 451,
                        'src': '9021:12:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 472,
                        'name': 'tokenAmount',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 453,
                        'src': '9035:11:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 473,
                        'name': 'periodSeconds',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 455,
                        'src': '9048:13:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 474,
                        'name': 'gasPrice',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 457,
                        'src': '9063:8:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 475,
                        'name': 'nonce',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 459,
                        'src': '9073:5:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'id': 468,
                      'name': 'getSubscriptionHash',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 336,
                      'src': '8978:19:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_view$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_bytes32_$',
                        'typeString': 'function (address,address,address,uint256,uint256,uint256,uint256) view returns (bytes32)'
                      }
                    },
                    'id': 476,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '8978:110:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes32',
                      'typeString': 'bytes32'
                    }
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '8951:137:1'
                },
                {
                  'assignments': [
                    479
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 479,
                      'name': 'signer',
                      'nodeType': 'VariableDeclaration',
                      'scope': 521,
                      'src': '9098:14:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address',
                        'typeString': 'address'
                      },
                      'typeName': {
                        'id': 478,
                        'name': 'address',
                        'nodeType': 'ElementaryTypeName',
                        'src': '9098:7:1',
                        'stateMutability': 'nonpayable',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 484,
                  'initialValue': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 481,
                        'name': 'subscriptionHash',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 467,
                        'src': '9137:16:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 482,
                        'name': 'signature',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 461,
                        'src': '9155:9:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes_memory_ptr',
                          'typeString': 'bytes memory'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        },
                        {
                          'typeIdentifier': 't_bytes_memory_ptr',
                          'typeString': 'bytes memory'
                        }
                      ],
                      'id': 480,
                      'name': 'getSubscriptionSigner',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 353,
                      'src': '9115:21:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_pure$_t_bytes32_$_t_bytes_memory_ptr_$returns$_t_address_$',
                        'typeString': 'function (bytes32,bytes memory) pure returns (address)'
                      }
                    },
                    'id': 483,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '9115:50:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '9098:67:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        'id': 488,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'id': 486,
                          'name': 'signer',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 479,
                          'src': '9222:6:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '==',
                        'rightExpression': {
                          'argumentTypes': null,
                          'id': 487,
                          'name': 'from',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 447,
                          'src': '9232:4:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          }
                        },
                        'src': '9222:14:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '496e76616c6964205369676e617475726520666f7220737562736372697074696f6e2063616e63656c6c6174696f6e',
                        'id': 489,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '9238:49:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_20f3baa67ddd296dfb8b9e0ec971696cfd8630a4bebb38617aeef0cee76fac0b',
                          'typeString': 'literal_string \'Invalid Signature for subscription cancellation\''
                        },
                        'value': 'Invalid Signature for subscription cancellation'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_20f3baa67ddd296dfb8b9e0ec971696cfd8630a4bebb38617aeef0cee76fac0b',
                          'typeString': 'literal_string \'Invalid Signature for subscription cancellation\''
                        }
                      ],
                      'id': 485,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1389,
                        1390
                      ],
                      'referencedDeclaration': 1390,
                      'src': '9214:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 490,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '9214:74:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 491,
                  'nodeType': 'ExpressionStatement',
                  'src': '9214:74:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        'id': 496,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'id': 493,
                          'name': 'from',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 447,
                          'src': '9347:4:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '==',
                        'rightExpression': {
                          'argumentTypes': null,
                          'expression': {
                            'argumentTypes': null,
                            'id': 494,
                            'name': 'msg',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 1386,
                            'src': '9355:3:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_magic_message',
                              'typeString': 'msg'
                            }
                          },
                          'id': 495,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'memberName': 'sender',
                          'nodeType': 'MemberAccess',
                          'referencedDeclaration': null,
                          'src': '9355:10:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address_payable',
                            'typeString': 'address payable'
                          }
                        },
                        'src': '9347:18:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '6d73672e73656e646572206973206e6f74207468652073756273637269626572',
                        'id': 497,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '9367:34:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_b86252a974ff2529f3bb7d6f22659872d492e2e9d678b8652f19cecd6ad9fd79',
                          'typeString': 'literal_string \'msg.sender is not the subscriber\''
                        },
                        'value': 'msg.sender is not the subscriber'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_b86252a974ff2529f3bb7d6f22659872d492e2e9d678b8652f19cecd6ad9fd79',
                          'typeString': 'literal_string \'msg.sender is not the subscriber\''
                        }
                      ],
                      'id': 492,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1389,
                        1390
                      ],
                      'referencedDeclaration': 1390,
                      'src': '9339:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 498,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '9339:63:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 499,
                  'nodeType': 'ExpressionStatement',
                  'src': '9339:63:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 507,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'baseExpression': {
                        'argumentTypes': null,
                        'id': 500,
                        'name': 'nextValidTimestamp',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 87,
                        'src': '9541:18:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_mapping$_t_bytes32_$_t_uint256_$',
                          'typeString': 'mapping(bytes32 => uint256)'
                        }
                      },
                      'id': 502,
                      'indexExpression': {
                        'argumentTypes': null,
                        'id': 501,
                        'name': 'subscriptionHash',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 467,
                        'src': '9560:16:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        }
                      },
                      'isConstant': false,
                      'isLValue': true,
                      'isPure': false,
                      'lValueRequested': true,
                      'nodeType': 'IndexAccess',
                      'src': '9541:36:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'arguments': [
                        {
                          'argumentTypes': null,
                          'id': 505,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': true,
                          'lValueRequested': false,
                          'nodeType': 'UnaryOperation',
                          'operator': '-',
                          'prefix': true,
                          'src': '9586:2:1',
                          'subExpression': {
                            'argumentTypes': null,
                            'hexValue': '31',
                            'id': 504,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': true,
                            'kind': 'number',
                            'lValueRequested': false,
                            'nodeType': 'Literal',
                            'src': '9587:1:1',
                            'subdenomination': null,
                            'typeDescriptions': {
                              'typeIdentifier': 't_rational_1_by_1',
                              'typeString': 'int_const 1'
                            },
                            'value': '1'
                          },
                          'typeDescriptions': {
                            'typeIdentifier': 't_rational_minus_1_by_1',
                            'typeString': 'int_const -1'
                          }
                        }
                      ],
                      'expression': {
                        'argumentTypes': [
                          {
                            'typeIdentifier': 't_rational_minus_1_by_1',
                            'typeString': 'int_const -1'
                          }
                        ],
                        'id': 503,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'lValueRequested': false,
                        'nodeType': 'ElementaryTypeNameExpression',
                        'src': '9578:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_type$_t_uint256_$',
                          'typeString': 'type(uint256)'
                        },
                        'typeName': 'uint256'
                      },
                      'id': 506,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': true,
                      'kind': 'typeConversion',
                      'lValueRequested': false,
                      'names': [],
                      'nodeType': 'FunctionCall',
                      'src': '9578:11:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '9541:48:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'id': 508,
                  'nodeType': 'ExpressionStatement',
                  'src': '9541:48:1'
                },
                {
                  'eventCall': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 510,
                        'name': 'from',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 447,
                        'src': '9637:4:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 511,
                        'name': 'to',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 449,
                        'src': '9643:2:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 512,
                        'name': 'tokenAddress',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 451,
                        'src': '9647:12:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 513,
                        'name': 'tokenAmount',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 453,
                        'src': '9661:11:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 514,
                        'name': 'periodSeconds',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 455,
                        'src': '9674:13:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 515,
                        'name': 'gasPrice',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 457,
                        'src': '9689:8:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 516,
                        'name': 'nonce',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 459,
                        'src': '9699:5:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'id': 509,
                      'name': 'CancelSubscription',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 123,
                      'src': '9605:18:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_event_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$',
                        'typeString': 'function (address,address,address,uint256,uint256,uint256,uint256)'
                      }
                    },
                    'id': 517,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '9605:109:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 518,
                  'nodeType': 'EmitStatement',
                  'src': '9600:114:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'hexValue': '74727565',
                    'id': 519,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': true,
                    'kind': 'bool',
                    'lValueRequested': false,
                    'nodeType': 'Literal',
                    'src': '9732:4:1',
                    'subdenomination': null,
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    },
                    'value': 'true'
                  },
                  'functionReturnParameters': 465,
                  'id': 520,
                  'nodeType': 'Return',
                  'src': '9725:11:1'
                }
              ]
            },
            'documentation': null,
            'id': 522,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'cancelSubscription',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 462,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 447,
                  'name': 'from',
                  'nodeType': 'VariableDeclaration',
                  'scope': 522,
                  'src': '8357:12:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 446,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '8357:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 449,
                  'name': 'to',
                  'nodeType': 'VariableDeclaration',
                  'scope': 522,
                  'src': '8396:10:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 448,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '8396:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 451,
                  'name': 'tokenAddress',
                  'nodeType': 'VariableDeclaration',
                  'scope': 522,
                  'src': '8432:20:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 450,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '8432:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 453,
                  'name': 'tokenAmount',
                  'nodeType': 'VariableDeclaration',
                  'scope': 522,
                  'src': '8504:19:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 452,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '8504:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 455,
                  'name': 'periodSeconds',
                  'nodeType': 'VariableDeclaration',
                  'scope': 522,
                  'src': '8574:21:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 454,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '8574:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 457,
                  'name': 'gasPrice',
                  'nodeType': 'VariableDeclaration',
                  'scope': 522,
                  'src': '8646:16:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 456,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '8646:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 459,
                  'name': 'nonce',
                  'nodeType': 'VariableDeclaration',
                  'scope': 522,
                  'src': '8730:13:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 458,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '8730:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 461,
                  'name': 'signature',
                  'nodeType': 'VariableDeclaration',
                  'scope': 522,
                  'src': '8812:22:1',
                  'stateVariable': false,
                  'storageLocation': 'memory',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bytes_memory_ptr',
                    'typeString': 'bytes'
                  },
                  'typeName': {
                    'id': 460,
                    'name': 'bytes',
                    'nodeType': 'ElementaryTypeName',
                    'src': '8812:5:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes_storage_ptr',
                      'typeString': 'bytes'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '8347:543:1'
            },
            'returnParameters': {
              'id': 465,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 464,
                  'name': 'success',
                  'nodeType': 'VariableDeclaration',
                  'scope': 522,
                  'src': '8923:12:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bool',
                    'typeString': 'bool'
                  },
                  'typeName': {
                    'id': 463,
                    'name': 'bool',
                    'nodeType': 'ElementaryTypeName',
                    'src': '8923:4:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '8922:14:1'
            },
            'scope': 710,
            'src': '8320:1423:1',
            'stateMutability': 'nonpayable',
            'superFunction': null,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 671,
              'nodeType': 'Block',
              'src': '10524:2468:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        'id': 547,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'expression': {
                            'argumentTypes': null,
                            'id': 544,
                            'name': 'msg',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 1386,
                            'src': '10542:3:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_magic_message',
                              'typeString': 'msg'
                            }
                          },
                          'id': 545,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'memberName': 'sender',
                          'nodeType': 'MemberAccess',
                          'referencedDeclaration': null,
                          'src': '10542:10:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address_payable',
                            'typeString': 'address payable'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '==',
                        'rightExpression': {
                          'argumentTypes': null,
                          'id': 546,
                          'name': 'relayer',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 73,
                          'src': '10556:7:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          }
                        },
                        'src': '10542:21:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      ],
                      'id': 543,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1389,
                        1390
                      ],
                      'referencedDeclaration': 1389,
                      'src': '10534:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$returns$__$',
                        'typeString': 'function (bool) pure'
                      }
                    },
                    'id': 548,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '10534:30:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 549,
                  'nodeType': 'ExpressionStatement',
                  'src': '10534:30:1'
                },
                {
                  'assignments': [
                    551
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 551,
                      'name': 'subscriptionHash',
                      'nodeType': 'VariableDeclaration',
                      'scope': 671,
                      'src': '10574:24:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_bytes32',
                        'typeString': 'bytes32'
                      },
                      'typeName': {
                        'id': 550,
                        'name': 'bytes32',
                        'nodeType': 'ElementaryTypeName',
                        'src': '10574:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 561,
                  'initialValue': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 553,
                        'name': 'from',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 524,
                        'src': '10634:4:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 554,
                        'name': 'to',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 526,
                        'src': '10640:2:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 555,
                        'name': 'tokenAddress',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 528,
                        'src': '10644:12:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 556,
                        'name': 'tokenAmount',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 530,
                        'src': '10658:11:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 557,
                        'name': 'periodSeconds',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 532,
                        'src': '10671:13:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 558,
                        'name': 'gasPrice',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 534,
                        'src': '10686:8:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 559,
                        'name': 'nonce',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 536,
                        'src': '10696:5:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'id': 552,
                      'name': 'getSubscriptionHash',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 336,
                      'src': '10601:19:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_view$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_bytes32_$',
                        'typeString': 'function (address,address,address,uint256,uint256,uint256,uint256) view returns (bytes32)'
                      }
                    },
                    'id': 560,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '10601:110:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes32',
                      'typeString': 'bytes32'
                    }
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '10574:137:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'arguments': [
                          {
                            'argumentTypes': null,
                            'id': 564,
                            'name': 'from',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 524,
                            'src': '10808:4:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 565,
                            'name': 'to',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 526,
                            'src': '10814:2:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 566,
                            'name': 'tokenAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 528,
                            'src': '10818:12:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 567,
                            'name': 'tokenAmount',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 530,
                            'src': '10832:11:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 568,
                            'name': 'periodSeconds',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 532,
                            'src': '10845:13:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 569,
                            'name': 'gasPrice',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 534,
                            'src': '10860:8:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 570,
                            'name': 'nonce',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 536,
                            'src': '10870:5:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 571,
                            'name': 'signature',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 538,
                            'src': '10877:9:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_bytes_memory_ptr',
                              'typeString': 'bytes memory'
                            }
                          }
                        ],
                        'expression': {
                          'argumentTypes': [
                            {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            },
                            {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            },
                            {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            },
                            {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            },
                            {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            },
                            {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            },
                            {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            },
                            {
                              'typeIdentifier': 't_bytes_memory_ptr',
                              'typeString': 'bytes memory'
                            }
                          ],
                          'id': 563,
                          'name': 'isSubscriptionReady',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 445,
                          'src': '10788:19:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_function_internal_view$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bytes_memory_ptr_$returns$_t_bool_$',
                            'typeString': 'function (address,address,address,uint256,uint256,uint256,uint256,bytes memory) view returns (bool)'
                          }
                        },
                        'id': 572,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'functionCall',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '10788:99:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '537562736372697074696f6e206973206e6f74207265616479206f7220636f6e646974696f6e73206f66207472616e736374696f6e20617265206e6f74206d6574',
                        'id': 573,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '10889:67:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_af71f06446e1befab38ec272e173aae8220ce6336c1755fee67e531c43ea91d3',
                          'typeString': 'literal_string \'Subscription is not ready or conditions of transction are not met\''
                        },
                        'value': 'Subscription is not ready or conditions of transction are not met'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_af71f06446e1befab38ec272e173aae8220ce6336c1755fee67e531c43ea91d3',
                          'typeString': 'literal_string \'Subscription is not ready or conditions of transction are not met\''
                        }
                      ],
                      'id': 562,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1389,
                        1390
                      ],
                      'referencedDeclaration': 1390,
                      'src': '10779:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 574,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '10779:179:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 575,
                  'nodeType': 'ExpressionStatement',
                  'src': '10779:179:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 584,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'baseExpression': {
                        'argumentTypes': null,
                        'id': 576,
                        'name': 'nextValidTimestamp',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 87,
                        'src': '11048:18:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_mapping$_t_bytes32_$_t_uint256_$',
                          'typeString': 'mapping(bytes32 => uint256)'
                        }
                      },
                      'id': 578,
                      'indexExpression': {
                        'argumentTypes': null,
                        'id': 577,
                        'name': 'subscriptionHash',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 551,
                        'src': '11067:16:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        }
                      },
                      'isConstant': false,
                      'isLValue': true,
                      'isPure': false,
                      'lValueRequested': true,
                      'nodeType': 'IndexAccess',
                      'src': '11048:36:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'arguments': [
                        {
                          'argumentTypes': null,
                          'id': 582,
                          'name': 'periodSeconds',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 532,
                          'src': '11107:13:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        }
                      ],
                      'expression': {
                        'argumentTypes': [
                          {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        ],
                        'expression': {
                          'argumentTypes': null,
                          'expression': {
                            'argumentTypes': null,
                            'id': 579,
                            'name': 'block',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 1376,
                            'src': '11087:5:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_magic_block',
                              'typeString': 'block'
                            }
                          },
                          'id': 580,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'memberName': 'timestamp',
                          'nodeType': 'MemberAccess',
                          'referencedDeclaration': null,
                          'src': '11087:15:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        },
                        'id': 581,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'memberName': 'add',
                        'nodeType': 'MemberAccess',
                        'referencedDeclaration': 898,
                        'src': '11087:19:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$',
                          'typeString': 'function (uint256,uint256) pure returns (uint256)'
                        }
                      },
                      'id': 583,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'kind': 'functionCall',
                      'lValueRequested': false,
                      'names': [],
                      'nodeType': 'FunctionCall',
                      'src': '11087:34:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '11048:73:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'id': 585,
                  'nodeType': 'ExpressionStatement',
                  'src': '11048:73:1'
                },
                {
                  'condition': {
                    'argumentTypes': null,
                    'commonType': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    },
                    'id': 590,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftExpression': {
                      'argumentTypes': null,
                      'id': 586,
                      'name': 'nonce',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 536,
                      'src': '11240:5:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'BinaryOperation',
                    'operator': '>',
                    'rightExpression': {
                      'argumentTypes': null,
                      'baseExpression': {
                        'argumentTypes': null,
                        'id': 587,
                        'name': 'extraNonce',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 91,
                        'src': '11248:10:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_mapping$_t_address_$_t_uint256_$',
                          'typeString': 'mapping(address => uint256)'
                        }
                      },
                      'id': 589,
                      'indexExpression': {
                        'argumentTypes': null,
                        'id': 588,
                        'name': 'from',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 524,
                        'src': '11259:4:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      'isConstant': false,
                      'isLValue': true,
                      'isPure': false,
                      'lValueRequested': false,
                      'nodeType': 'IndexAccess',
                      'src': '11248:16:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '11240:24:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'falseBody': null,
                  'id': 598,
                  'nodeType': 'IfStatement',
                  'src': '11237:75:1',
                  'trueBody': {
                    'id': 597,
                    'nodeType': 'Block',
                    'src': '11265:47:1',
                    'statements': [
                      {
                        'expression': {
                          'argumentTypes': null,
                          'id': 595,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftHandSide': {
                            'argumentTypes': null,
                            'baseExpression': {
                              'argumentTypes': null,
                              'id': 591,
                              'name': 'extraNonce',
                              'nodeType': 'Identifier',
                              'overloadedDeclarations': [],
                              'referencedDeclaration': 91,
                              'src': '11277:10:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_mapping$_t_address_$_t_uint256_$',
                                'typeString': 'mapping(address => uint256)'
                              }
                            },
                            'id': 593,
                            'indexExpression': {
                              'argumentTypes': null,
                              'id': 592,
                              'name': 'from',
                              'nodeType': 'Identifier',
                              'overloadedDeclarations': [],
                              'referencedDeclaration': 524,
                              'src': '11288:4:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_address',
                                'typeString': 'address'
                              }
                            },
                            'isConstant': false,
                            'isLValue': true,
                            'isPure': false,
                            'lValueRequested': true,
                            'nodeType': 'IndexAccess',
                            'src': '11277:16:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'nodeType': 'Assignment',
                          'operator': '=',
                          'rightHandSide': {
                            'argumentTypes': null,
                            'id': 594,
                            'name': 'nonce',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 536,
                            'src': '11296:5:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'src': '11277:24:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        },
                        'id': 596,
                        'nodeType': 'ExpressionStatement',
                        'src': '11277:24:1'
                      }
                    ]
                  }
                },
                {
                  'assignments': [
                    600
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 600,
                      'name': 'startingBalance',
                      'nodeType': 'VariableDeclaration',
                      'scope': 671,
                      'src': '11397:23:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      },
                      'typeName': {
                        'id': 599,
                        'name': 'uint256',
                        'nodeType': 'ElementaryTypeName',
                        'src': '11397:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 607,
                  'initialValue': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 605,
                        'name': 'to',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 526,
                        'src': '11453:2:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      ],
                      'expression': {
                        'argumentTypes': null,
                        'arguments': [
                          {
                            'argumentTypes': null,
                            'id': 602,
                            'name': 'tokenAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 528,
                            'src': '11429:12:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          }
                        ],
                        'expression': {
                          'argumentTypes': [
                            {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          ],
                          'id': 601,
                          'name': 'ERC20',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 1302,
                          'src': '11423:5:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_type$_t_contract$_ERC20_$1302_$',
                            'typeString': 'type(contract ERC20)'
                          }
                        },
                        'id': 603,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'typeConversion',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '11423:19:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_contract$_ERC20_$1302',
                          'typeString': 'contract ERC20'
                        }
                      },
                      'id': 604,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'balanceOf',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 960,
                      'src': '11423:29:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_external_view$_t_address_$returns$_t_uint256_$',
                        'typeString': 'function (address) view external returns (uint256)'
                      }
                    },
                    'id': 606,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '11423:33:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '11397:59:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 612,
                        'name': 'from',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 524,
                        'src': '11499:4:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 613,
                        'name': 'to',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 526,
                        'src': '11504:2:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 614,
                        'name': 'tokenAmount',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 530,
                        'src': '11507:11:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'expression': {
                        'argumentTypes': null,
                        'arguments': [
                          {
                            'argumentTypes': null,
                            'id': 609,
                            'name': 'tokenAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 528,
                            'src': '11472:12:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          }
                        ],
                        'expression': {
                          'argumentTypes': [
                            {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          ],
                          'id': 608,
                          'name': 'ERC20',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 1302,
                          'src': '11466:5:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_type$_t_contract$_ERC20_$1302_$',
                            'typeString': 'type(contract ERC20)'
                          }
                        },
                        'id': 610,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'typeConversion',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '11466:19:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_contract$_ERC20_$1302',
                          'typeString': 'contract ERC20'
                        }
                      },
                      'id': 611,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'transferFrom',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 1049,
                      'src': '11466:32:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$',
                        'typeString': 'function (address,address,uint256) external returns (bool)'
                      }
                    },
                    'id': 615,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '11466:53:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'id': 616,
                  'nodeType': 'ExpressionStatement',
                  'src': '11466:53:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        'id': 628,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'components': [
                            {
                              'argumentTypes': null,
                              'commonType': {
                                'typeIdentifier': 't_uint256',
                                'typeString': 'uint256'
                              },
                              'id': 620,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': false,
                              'lValueRequested': false,
                              'leftExpression': {
                                'argumentTypes': null,
                                'id': 618,
                                'name': 'startingBalance',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 600,
                                'src': '11549:15:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_uint256',
                                  'typeString': 'uint256'
                                }
                              },
                              'nodeType': 'BinaryOperation',
                              'operator': '+',
                              'rightExpression': {
                                'argumentTypes': null,
                                'id': 619,
                                'name': 'tokenAmount',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 530,
                                'src': '11565:11:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_uint256',
                                  'typeString': 'uint256'
                                }
                              },
                              'src': '11549:27:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_uint256',
                                'typeString': 'uint256'
                              }
                            }
                          ],
                          'id': 621,
                          'isConstant': false,
                          'isInlineArray': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'nodeType': 'TupleExpression',
                          'src': '11548:29:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '==',
                        'rightExpression': {
                          'argumentTypes': null,
                          'arguments': [
                            {
                              'argumentTypes': null,
                              'id': 626,
                              'name': 'to',
                              'nodeType': 'Identifier',
                              'overloadedDeclarations': [],
                              'referencedDeclaration': 526,
                              'src': '11611:2:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_address',
                                'typeString': 'address'
                              }
                            }
                          ],
                          'expression': {
                            'argumentTypes': [
                              {
                                'typeIdentifier': 't_address',
                                'typeString': 'address'
                              }
                            ],
                            'expression': {
                              'argumentTypes': null,
                              'arguments': [
                                {
                                  'argumentTypes': null,
                                  'id': 623,
                                  'name': 'tokenAddress',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 528,
                                  'src': '11587:12:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_address',
                                    'typeString': 'address'
                                  }
                                }
                              ],
                              'expression': {
                                'argumentTypes': [
                                  {
                                    'typeIdentifier': 't_address',
                                    'typeString': 'address'
                                  }
                                ],
                                'id': 622,
                                'name': 'ERC20',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 1302,
                                'src': '11581:5:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_type$_t_contract$_ERC20_$1302_$',
                                  'typeString': 'type(contract ERC20)'
                                }
                              },
                              'id': 624,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': false,
                              'kind': 'typeConversion',
                              'lValueRequested': false,
                              'names': [],
                              'nodeType': 'FunctionCall',
                              'src': '11581:19:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_contract$_ERC20_$1302',
                                'typeString': 'contract ERC20'
                              }
                            },
                            'id': 625,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': false,
                            'lValueRequested': false,
                            'memberName': 'balanceOf',
                            'nodeType': 'MemberAccess',
                            'referencedDeclaration': 960,
                            'src': '11581:29:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_function_external_view$_t_address_$returns$_t_uint256_$',
                              'typeString': 'function (address) view external returns (uint256)'
                            }
                          },
                          'id': 627,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'kind': 'functionCall',
                          'lValueRequested': false,
                          'names': [],
                          'nodeType': 'FunctionCall',
                          'src': '11581:33:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        },
                        'src': '11548:66:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '45524332302042616c616e636520646964206e6f74206368616e676520636f72726563746c79',
                        'id': 629,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '11626:40:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_ded71a89e8fc5dbd375e97b6164c08c2ea5d981bb8fdce6588c0434f53d059b7',
                          'typeString': 'literal_string \'ERC20 Balance did not change correctly\''
                        },
                        'value': 'ERC20 Balance did not change correctly'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_ded71a89e8fc5dbd375e97b6164c08c2ea5d981bb8fdce6588c0434f53d059b7',
                          'typeString': 'literal_string \'ERC20 Balance did not change correctly\''
                        }
                      ],
                      'id': 617,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1389,
                        1390
                      ],
                      'referencedDeclaration': 1390,
                      'src': '11529:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 630,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '11529:147:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 631,
                  'nodeType': 'ExpressionStatement',
                  'src': '11529:147:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'arguments': [],
                        'expression': {
                          'argumentTypes': [],
                          'id': 633,
                          'name': 'checkSuccess',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 687,
                          'src': '11706:12:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_function_internal_pure$__$returns$_t_bool_$',
                            'typeString': 'function () pure returns (bool)'
                          }
                        },
                        'id': 634,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'functionCall',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '11706:14:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '537562736372697074696f6e3a3a65786563757465537562736372697074696f6e205472616e7366657246726f6d206661696c6564',
                        'id': 635,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '11732:55:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_22fda53c4160a201b6c6b94643fa6d7525aa15a7f4ec1af5c52f0db455252a28',
                          'typeString': 'literal_string \'Subscription::executeSubscription TransferFrom failed\''
                        },
                        'value': 'Subscription::executeSubscription TransferFrom failed'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_22fda53c4160a201b6c6b94643fa6d7525aa15a7f4ec1af5c52f0db455252a28',
                          'typeString': 'literal_string \'Subscription::executeSubscription TransferFrom failed\''
                        }
                      ],
                      'id': 632,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1389,
                        1390
                      ],
                      'referencedDeclaration': 1390,
                      'src': '11687:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 636,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '11687:112:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 637,
                  'nodeType': 'ExpressionStatement',
                  'src': '11687:112:1'
                },
                {
                  'eventCall': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 639,
                        'name': 'from',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 524,
                        'src': '11849:4:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 640,
                        'name': 'to',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 526,
                        'src': '11855:2:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 641,
                        'name': 'tokenAddress',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 528,
                        'src': '11859:12:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 642,
                        'name': 'tokenAmount',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 530,
                        'src': '11873:11:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 643,
                        'name': 'periodSeconds',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 532,
                        'src': '11886:13:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 644,
                        'name': 'gasPrice',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 534,
                        'src': '11901:8:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 645,
                        'name': 'nonce',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 536,
                        'src': '11911:5:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'id': 638,
                      'name': 'ExecuteSubscription',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 107,
                      'src': '11816:19:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_event_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$',
                        'typeString': 'function (address,address,address,uint256,uint256,uint256,uint256)'
                      }
                    },
                    'id': 646,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '11816:110:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 647,
                  'nodeType': 'EmitStatement',
                  'src': '11811:115:1'
                },
                {
                  'condition': {
                    'argumentTypes': null,
                    'commonType': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    },
                    'id': 650,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftExpression': {
                      'argumentTypes': null,
                      'id': 648,
                      'name': 'gasPrice',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 534,
                      'src': '12146:8:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'BinaryOperation',
                    'operator': '>',
                    'rightExpression': {
                      'argumentTypes': null,
                      'hexValue': '30',
                      'id': 649,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': true,
                      'kind': 'number',
                      'lValueRequested': false,
                      'nodeType': 'Literal',
                      'src': '12157:1:1',
                      'subdenomination': null,
                      'typeDescriptions': {
                        'typeIdentifier': 't_rational_0_by_1',
                        'typeString': 'int_const 0'
                      },
                      'value': '0'
                    },
                    'src': '12146:12:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'falseBody': null,
                  'id': 668,
                  'nodeType': 'IfStatement',
                  'src': '12142:822:1',
                  'trueBody': {
                    'id': 667,
                    'nodeType': 'Block',
                    'src': '12160:804:1',
                    'statements': [
                      {
                        'expression': {
                          'argumentTypes': null,
                          'arguments': [
                            {
                              'argumentTypes': null,
                              'id': 655,
                              'name': 'from',
                              'nodeType': 'Identifier',
                              'overloadedDeclarations': [],
                              'referencedDeclaration': 524,
                              'src': '12772:4:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_address',
                                'typeString': 'address'
                              }
                            },
                            {
                              'argumentTypes': null,
                              'expression': {
                                'argumentTypes': null,
                                'id': 656,
                                'name': 'msg',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 1386,
                                'src': '12778:3:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_magic_message',
                                  'typeString': 'msg'
                                }
                              },
                              'id': 657,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': false,
                              'lValueRequested': false,
                              'memberName': 'sender',
                              'nodeType': 'MemberAccess',
                              'referencedDeclaration': null,
                              'src': '12778:10:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_address_payable',
                                'typeString': 'address payable'
                              }
                            },
                            {
                              'argumentTypes': null,
                              'id': 658,
                              'name': 'gasPrice',
                              'nodeType': 'Identifier',
                              'overloadedDeclarations': [],
                              'referencedDeclaration': 534,
                              'src': '12790:8:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_uint256',
                                'typeString': 'uint256'
                              }
                            }
                          ],
                          'expression': {
                            'argumentTypes': [
                              {
                                'typeIdentifier': 't_address',
                                'typeString': 'address'
                              },
                              {
                                'typeIdentifier': 't_address_payable',
                                'typeString': 'address payable'
                              },
                              {
                                'typeIdentifier': 't_uint256',
                                'typeString': 'uint256'
                              }
                            ],
                            'expression': {
                              'argumentTypes': null,
                              'arguments': [
                                {
                                  'argumentTypes': null,
                                  'id': 652,
                                  'name': 'tokenAddress',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 528,
                                  'src': '12745:12:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_address',
                                    'typeString': 'address'
                                  }
                                }
                              ],
                              'expression': {
                                'argumentTypes': [
                                  {
                                    'typeIdentifier': 't_address',
                                    'typeString': 'address'
                                  }
                                ],
                                'id': 651,
                                'name': 'ERC20',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 1302,
                                'src': '12739:5:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_type$_t_contract$_ERC20_$1302_$',
                                  'typeString': 'type(contract ERC20)'
                                }
                              },
                              'id': 653,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': false,
                              'kind': 'typeConversion',
                              'lValueRequested': false,
                              'names': [],
                              'nodeType': 'FunctionCall',
                              'src': '12739:19:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_contract$_ERC20_$1302',
                                'typeString': 'contract ERC20'
                              }
                            },
                            'id': 654,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': false,
                            'lValueRequested': false,
                            'memberName': 'transferFrom',
                            'nodeType': 'MemberAccess',
                            'referencedDeclaration': 1049,
                            'src': '12739:32:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$',
                              'typeString': 'function (address,address,uint256) external returns (bool)'
                            }
                          },
                          'id': 659,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'kind': 'functionCall',
                          'lValueRequested': false,
                          'names': [],
                          'nodeType': 'FunctionCall',
                          'src': '12739:60:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'id': 660,
                        'nodeType': 'ExpressionStatement',
                        'src': '12739:60:1'
                      },
                      {
                        'expression': {
                          'argumentTypes': null,
                          'arguments': [
                            {
                              'argumentTypes': null,
                              'arguments': [],
                              'expression': {
                                'argumentTypes': [],
                                'id': 662,
                                'name': 'checkSuccess',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 687,
                                'src': '12838:12:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_function_internal_pure$__$returns$_t_bool_$',
                                  'typeString': 'function () pure returns (bool)'
                                }
                              },
                              'id': 663,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': false,
                              'kind': 'functionCall',
                              'lValueRequested': false,
                              'names': [],
                              'nodeType': 'FunctionCall',
                              'src': '12838:14:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_bool',
                                'typeString': 'bool'
                              }
                            },
                            {
                              'argumentTypes': null,
                              'hexValue': '537562736372697074696f6e3a3a65786563757465537562736372697074696f6e204661696c656420746f20706179206761732061732066726f6d206163636f756e74',
                              'id': 664,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': true,
                              'kind': 'string',
                              'lValueRequested': false,
                              'nodeType': 'Literal',
                              'src': '12870:69:1',
                              'subdenomination': null,
                              'typeDescriptions': {
                                'typeIdentifier': 't_stringliteral_91dfd8b130e56d88b0bb875283dbd7a93ad5846177fd31c98ad56f2a5bd9d2f7',
                                'typeString': 'literal_string \'Subscription::executeSubscription Failed to pay gas as from account\''
                              },
                              'value': 'Subscription::executeSubscription Failed to pay gas as from account'
                            }
                          ],
                          'expression': {
                            'argumentTypes': [
                              {
                                'typeIdentifier': 't_bool',
                                'typeString': 'bool'
                              },
                              {
                                'typeIdentifier': 't_stringliteral_91dfd8b130e56d88b0bb875283dbd7a93ad5846177fd31c98ad56f2a5bd9d2f7',
                                'typeString': 'literal_string \'Subscription::executeSubscription Failed to pay gas as from account\''
                              }
                            ],
                            'id': 661,
                            'name': 'require',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [
                              1389,
                              1390
                            ],
                            'referencedDeclaration': 1390,
                            'src': '12813:7:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                              'typeString': 'function (bool,string memory) pure'
                            }
                          },
                          'id': 665,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'kind': 'functionCall',
                          'lValueRequested': false,
                          'names': [],
                          'nodeType': 'FunctionCall',
                          'src': '12813:140:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_tuple$__$',
                            'typeString': 'tuple()'
                          }
                        },
                        'id': 666,
                        'nodeType': 'ExpressionStatement',
                        'src': '12813:140:1'
                      }
                    ]
                  }
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'hexValue': '74727565',
                    'id': 669,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': true,
                    'kind': 'bool',
                    'lValueRequested': false,
                    'nodeType': 'Literal',
                    'src': '12981:4:1',
                    'subdenomination': null,
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    },
                    'value': 'true'
                  },
                  'functionReturnParameters': 542,
                  'id': 670,
                  'nodeType': 'Return',
                  'src': '12974:11:1'
                }
              ]
            },
            'documentation': null,
            'id': 672,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'executeSubscription',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 539,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 524,
                  'name': 'from',
                  'nodeType': 'VariableDeclaration',
                  'scope': 672,
                  'src': '9939:12:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 523,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '9939:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 526,
                  'name': 'to',
                  'nodeType': 'VariableDeclaration',
                  'scope': 672,
                  'src': '9978:10:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 525,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '9978:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 528,
                  'name': 'tokenAddress',
                  'nodeType': 'VariableDeclaration',
                  'scope': 672,
                  'src': '10014:20:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 527,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '10014:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 530,
                  'name': 'tokenAmount',
                  'nodeType': 'VariableDeclaration',
                  'scope': 672,
                  'src': '10086:19:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 529,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '10086:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 532,
                  'name': 'periodSeconds',
                  'nodeType': 'VariableDeclaration',
                  'scope': 672,
                  'src': '10156:21:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 531,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '10156:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 534,
                  'name': 'gasPrice',
                  'nodeType': 'VariableDeclaration',
                  'scope': 672,
                  'src': '10228:16:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 533,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '10228:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 536,
                  'name': 'nonce',
                  'nodeType': 'VariableDeclaration',
                  'scope': 672,
                  'src': '10312:13:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 535,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '10312:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 538,
                  'name': 'signature',
                  'nodeType': 'VariableDeclaration',
                  'scope': 672,
                  'src': '10395:22:1',
                  'stateVariable': false,
                  'storageLocation': 'memory',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bytes_memory_ptr',
                    'typeString': 'bytes'
                  },
                  'typeName': {
                    'id': 537,
                    'name': 'bytes',
                    'nodeType': 'ElementaryTypeName',
                    'src': '10395:5:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes_storage_ptr',
                      'typeString': 'bytes'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '9929:544:1'
            },
            'returnParameters': {
              'id': 542,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 541,
                  'name': 'success',
                  'nodeType': 'VariableDeclaration',
                  'scope': 672,
                  'src': '10506:12:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bool',
                    'typeString': 'bool'
                  },
                  'typeName': {
                    'id': 540,
                    'name': 'bool',
                    'nodeType': 'ElementaryTypeName',
                    'src': '10506:4:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '10505:14:1'
            },
            'scope': 710,
            'src': '9901:3091:1',
            'stateMutability': 'nonpayable',
            'superFunction': null,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 686,
              'nodeType': 'Block',
              'src': '13492:770:1',
              'statements': [
                {
                  'assignments': [
                    678
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 678,
                      'name': 'returnValue',
                      'nodeType': 'VariableDeclaration',
                      'scope': 686,
                      'src': '13502:19:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      },
                      'typeName': {
                        'id': 677,
                        'name': 'uint256',
                        'nodeType': 'ElementaryTypeName',
                        'src': '13502:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 680,
                  'initialValue': {
                    'argumentTypes': null,
                    'hexValue': '30',
                    'id': 679,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': true,
                    'kind': 'number',
                    'lValueRequested': false,
                    'nodeType': 'Literal',
                    'src': '13524:1:1',
                    'subdenomination': null,
                    'typeDescriptions': {
                      'typeIdentifier': 't_rational_0_by_1',
                      'typeString': 'int_const 0'
                    },
                    'value': '0'
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '13502:23:1'
                },
                {
                  'externalReferences': [
                    {
                      'returnValue': {
                        'declaration': 678,
                        'isOffset': false,
                        'isSlot': false,
                        'src': '13807:11:1',
                        'valueSize': 1
                      }
                    },
                    {
                      'returnValue': {
                        'declaration': 678,
                        'isOffset': false,
                        'isSlot': false,
                        'src': '14084:11:1',
                        'valueSize': 1
                      }
                    }
                  ],
                  'id': 681,
                  'nodeType': 'InlineAssembly',
                  'operations': '{\n    switch returndatasize()\n    case 0x0 {\n        returnValue := 1\n    }\n    case 0x20 {\n        returndatacopy(0x0, 0x0, 0x20)\n        returnValue := mload(0x0)\n    }\n    default {\n    }\n}',
                  'src': '13603:635:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'commonType': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    },
                    'id': 684,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftExpression': {
                      'argumentTypes': null,
                      'id': 682,
                      'name': 'returnValue',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 678,
                      'src': '14239:11:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'BinaryOperation',
                    'operator': '!=',
                    'rightExpression': {
                      'argumentTypes': null,
                      'hexValue': '30',
                      'id': 683,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': true,
                      'kind': 'number',
                      'lValueRequested': false,
                      'nodeType': 'Literal',
                      'src': '14254:1:1',
                      'subdenomination': null,
                      'typeDescriptions': {
                        'typeIdentifier': 't_rational_0_by_1',
                        'typeString': 'int_const 0'
                      },
                      'value': '0'
                    },
                    'src': '14239:16:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'functionReturnParameters': 676,
                  'id': 685,
                  'nodeType': 'Return',
                  'src': '14232:23:1'
                }
              ]
            },
            'documentation': 'Checks the return value of the previous function. Returns true if the previous function\nfunction returned 32 non-zero bytes or returned zero bytes.',
            'id': 687,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'checkSuccess',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 673,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '13428:7:1'
            },
            'returnParameters': {
              'id': 676,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 675,
                  'name': '',
                  'nodeType': 'VariableDeclaration',
                  'scope': 687,
                  'src': '13482:4:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bool',
                    'typeString': 'bool'
                  },
                  'typeName': {
                    'id': 674,
                    'name': 'bool',
                    'nodeType': 'ElementaryTypeName',
                    'src': '13482:4:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '13481:6:1'
            },
            'scope': 710,
            'src': '13407:855:1',
            'stateMutability': 'pure',
            'superFunction': null,
            'visibility': 'private'
          },
          {
            'body': {
              'id': 701,
              'nodeType': 'Block',
              'src': '14436:68:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        },
                        'id': 694,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'expression': {
                            'argumentTypes': null,
                            'id': 691,
                            'name': 'msg',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 1386,
                            'src': '14452:3:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_magic_message',
                              'typeString': 'msg'
                            }
                          },
                          'id': 692,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'memberName': 'sender',
                          'nodeType': 'MemberAccess',
                          'referencedDeclaration': null,
                          'src': '14452:10:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address_payable',
                            'typeString': 'address payable'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '==',
                        'rightExpression': {
                          'argumentTypes': null,
                          'id': 693,
                          'name': 'owner',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 69,
                          'src': '14464:5:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address_payable',
                            'typeString': 'address payable'
                          }
                        },
                        'src': '14452:17:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      ],
                      'id': 690,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1389,
                        1390
                      ],
                      'referencedDeclaration': 1389,
                      'src': '14444:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$returns$__$',
                        'typeString': 'function (bool) pure'
                      }
                    },
                    'id': 695,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '14444:26:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 696,
                  'nodeType': 'ExpressionStatement',
                  'src': '14444:26:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 698,
                        'name': 'owner',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 69,
                        'src': '14491:5:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        }
                      ],
                      'id': 697,
                      'name': 'selfdestruct',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 1394,
                      'src': '14478:12:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_selfdestruct_nonpayable$_t_address_payable_$returns$__$',
                        'typeString': 'function (address payable)'
                      }
                    },
                    'id': 699,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '14478:19:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 700,
                  'nodeType': 'ExpressionStatement',
                  'src': '14478:19:1'
                }
              ]
            },
            'documentation': null,
            'id': 702,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'endContract',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 688,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '14412:2:1'
            },
            'returnParameters': {
              'id': 689,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '14436:0:1'
            },
            'scope': 710,
            'src': '14392:112:1',
            'stateMutability': 'nonpayable',
            'superFunction': null,
            'visibility': 'external'
          },
          {
            'body': {
              'id': 708,
              'nodeType': 'Block',
              'src': '14610:25:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [],
                    'expression': {
                      'argumentTypes': [],
                      'id': 705,
                      'name': 'revert',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1391,
                        1392
                      ],
                      'referencedDeclaration': 1391,
                      'src': '14619:6:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_revert_pure$__$returns$__$',
                        'typeString': 'function () pure'
                      }
                    },
                    'id': 706,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '14619:9:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 707,
                  'nodeType': 'ExpressionStatement',
                  'src': '14619:9:1'
                }
              ]
            },
            'documentation': null,
            'id': 709,
            'implemented': true,
            'kind': 'fallback',
            'modifiers': [],
            'name': '',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 703,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '14590:2:1'
            },
            'returnParameters': {
              'id': 704,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '14610:0:1'
            },
            'scope': 710,
            'src': '14581:54:1',
            'stateMutability': 'payable',
            'superFunction': null,
            'visibility': 'external'
          }
        ],
        'scope': 711,
        'src': '1091:13546:1'
      }
    ],
    'src': '0:14638:1'
  },
  'legacyAST': {
    'absolutePath': '/Users/danlipert/gitcoin/grants1337/contracts/Subscription.sol',
    'exportedSymbols': {
      'Subscription': [
        710
      ]
    },
    'id': 711,
    'nodeType': 'SourceUnit',
    'nodes': [
      {
        'id': 58,
        'literals': [
          'solidity',
          '^',
          '0.5',
          '.2'
        ],
        'nodeType': 'PragmaDirective',
        'src': '0:23:1'
      },
      {
        'absolutePath': 'openzeppelin-solidity/contracts/cryptography/ECDSA.sol',
        'file': 'openzeppelin-solidity/contracts/cryptography/ECDSA.sol',
        'id': 59,
        'nodeType': 'ImportDirective',
        'scope': 711,
        'sourceUnit': 792,
        'src': '900:64:1',
        'symbolAliases': [],
        'unitAlias': ''
      },
      {
        'absolutePath': 'openzeppelin-solidity/contracts/math/SafeMath.sol',
        'file': 'openzeppelin-solidity/contracts/math/SafeMath.sol',
        'id': 60,
        'nodeType': 'ImportDirective',
        'scope': 711,
        'sourceUnit': 920,
        'src': '965:59:1',
        'symbolAliases': [],
        'unitAlias': ''
      },
      {
        'absolutePath': 'openzeppelin-solidity/contracts/token/ERC20/ERC20.sol',
        'file': 'openzeppelin-solidity/contracts/token/ERC20/ERC20.sol',
        'id': 61,
        'nodeType': 'ImportDirective',
        'scope': 711,
        'sourceUnit': 1303,
        'src': '1025:63:1',
        'symbolAliases': [],
        'unitAlias': ''
      },
      {
        'baseContracts': [],
        'contractDependencies': [],
        'contractKind': 'contract',
        'documentation': null,
        'fullyImplemented': true,
        'id': 710,
        'linearizedBaseContracts': [
          710
        ],
        'name': 'Subscription',
        'nodeType': 'ContractDefinition',
        'nodes': [
          {
            'id': 64,
            'libraryName': {
              'contractScope': null,
              'id': 62,
              'name': 'ECDSA',
              'nodeType': 'UserDefinedTypeName',
              'referencedDeclaration': 791,
              'src': '1125:5:1',
              'typeDescriptions': {
                'typeIdentifier': 't_contract$_ECDSA_$791',
                'typeString': 'library ECDSA'
              }
            },
            'nodeType': 'UsingForDirective',
            'src': '1119:24:1',
            'typeName': {
              'id': 63,
              'name': 'bytes32',
              'nodeType': 'ElementaryTypeName',
              'src': '1135:7:1',
              'typeDescriptions': {
                'typeIdentifier': 't_bytes32',
                'typeString': 'bytes32'
              }
            }
          },
          {
            'id': 67,
            'libraryName': {
              'contractScope': null,
              'id': 65,
              'name': 'SafeMath',
              'nodeType': 'UserDefinedTypeName',
              'referencedDeclaration': 919,
              'src': '1154:8:1',
              'typeDescriptions': {
                'typeIdentifier': 't_contract$_SafeMath_$919',
                'typeString': 'library SafeMath'
              }
            },
            'nodeType': 'UsingForDirective',
            'src': '1148:27:1',
            'typeName': {
              'id': 66,
              'name': 'uint256',
              'nodeType': 'ElementaryTypeName',
              'src': '1167:7:1',
              'typeDescriptions': {
                'typeIdentifier': 't_uint256',
                'typeString': 'uint256'
              }
            }
          },
          {
            'constant': false,
            'id': 69,
            'name': 'owner',
            'nodeType': 'VariableDeclaration',
            'scope': 710,
            'src': '1212:28:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_address_payable',
              'typeString': 'address payable'
            },
            'typeName': {
              'id': 68,
              'name': 'address',
              'nodeType': 'ElementaryTypeName',
              'src': '1212:15:1',
              'stateMutability': 'payable',
              'typeDescriptions': {
                'typeIdentifier': 't_address_payable',
                'typeString': 'address payable'
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 71,
            'name': 'contractVersion',
            'nodeType': 'VariableDeclaration',
            'scope': 710,
            'src': '1246:28:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_uint8',
              'typeString': 'uint8'
            },
            'typeName': {
              'id': 70,
              'name': 'uint8',
              'nodeType': 'ElementaryTypeName',
              'src': '1246:5:1',
              'typeDescriptions': {
                'typeIdentifier': 't_uint8',
                'typeString': 'uint8'
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 73,
            'name': 'relayer',
            'nodeType': 'VariableDeclaration',
            'scope': 710,
            'src': '1321:22:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_address',
              'typeString': 'address'
            },
            'typeName': {
              'id': 72,
              'name': 'address',
              'nodeType': 'ElementaryTypeName',
              'src': '1321:7:1',
              'stateMutability': 'nonpayable',
              'typeDescriptions': {
                'typeIdentifier': 't_address',
                'typeString': 'address'
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 75,
            'name': 'requiredToAddress',
            'nodeType': 'VariableDeclaration',
            'scope': 710,
            'src': '1503:32:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_address',
              'typeString': 'address'
            },
            'typeName': {
              'id': 74,
              'name': 'address',
              'nodeType': 'ElementaryTypeName',
              'src': '1503:7:1',
              'stateMutability': 'nonpayable',
              'typeDescriptions': {
                'typeIdentifier': 't_address',
                'typeString': 'address'
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 77,
            'name': 'requiredTokenAddress',
            'nodeType': 'VariableDeclaration',
            'scope': 710,
            'src': '1541:35:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_address',
              'typeString': 'address'
            },
            'typeName': {
              'id': 76,
              'name': 'address',
              'nodeType': 'ElementaryTypeName',
              'src': '1541:7:1',
              'stateMutability': 'nonpayable',
              'typeDescriptions': {
                'typeIdentifier': 't_address',
                'typeString': 'address'
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 79,
            'name': 'requiredTokenAmount',
            'nodeType': 'VariableDeclaration',
            'scope': 710,
            'src': '1582:34:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_uint256',
              'typeString': 'uint256'
            },
            'typeName': {
              'id': 78,
              'name': 'uint256',
              'nodeType': 'ElementaryTypeName',
              'src': '1582:7:1',
              'typeDescriptions': {
                'typeIdentifier': 't_uint256',
                'typeString': 'uint256'
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 81,
            'name': 'requiredPeriodSeconds',
            'nodeType': 'VariableDeclaration',
            'scope': 710,
            'src': '1622:36:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_uint256',
              'typeString': 'uint256'
            },
            'typeName': {
              'id': 80,
              'name': 'uint256',
              'nodeType': 'ElementaryTypeName',
              'src': '1622:7:1',
              'typeDescriptions': {
                'typeIdentifier': 't_uint256',
                'typeString': 'uint256'
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 83,
            'name': 'requiredGasPrice',
            'nodeType': 'VariableDeclaration',
            'scope': 710,
            'src': '1664:31:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_uint256',
              'typeString': 'uint256'
            },
            'typeName': {
              'id': 82,
              'name': 'uint256',
              'nodeType': 'ElementaryTypeName',
              'src': '1664:7:1',
              'typeDescriptions': {
                'typeIdentifier': 't_uint256',
                'typeString': 'uint256'
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 87,
            'name': 'nextValidTimestamp',
            'nodeType': 'VariableDeclaration',
            'scope': 710,
            'src': '1887:53:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_mapping$_t_bytes32_$_t_uint256_$',
              'typeString': 'mapping(bytes32 => uint256)'
            },
            'typeName': {
              'id': 86,
              'keyType': {
                'id': 84,
                'name': 'bytes32',
                'nodeType': 'ElementaryTypeName',
                'src': '1895:7:1',
                'typeDescriptions': {
                  'typeIdentifier': 't_bytes32',
                  'typeString': 'bytes32'
                }
              },
              'nodeType': 'Mapping',
              'src': '1887:27:1',
              'typeDescriptions': {
                'typeIdentifier': 't_mapping$_t_bytes32_$_t_uint256_$',
                'typeString': 'mapping(bytes32 => uint256)'
              },
              'valueType': {
                'id': 85,
                'name': 'uint256',
                'nodeType': 'ElementaryTypeName',
                'src': '1906:7:1',
                'typeDescriptions': {
                  'typeIdentifier': 't_uint256',
                  'typeString': 'uint256'
                }
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 91,
            'name': 'extraNonce',
            'nodeType': 'VariableDeclaration',
            'scope': 710,
            'src': '2121:45:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_mapping$_t_address_$_t_uint256_$',
              'typeString': 'mapping(address => uint256)'
            },
            'typeName': {
              'id': 90,
              'keyType': {
                'id': 88,
                'name': 'address',
                'nodeType': 'ElementaryTypeName',
                'src': '2129:7:1',
                'typeDescriptions': {
                  'typeIdentifier': 't_address',
                  'typeString': 'address'
                }
              },
              'nodeType': 'Mapping',
              'src': '2121:27:1',
              'typeDescriptions': {
                'typeIdentifier': 't_mapping$_t_address_$_t_uint256_$',
                'typeString': 'mapping(address => uint256)'
              },
              'valueType': {
                'id': 89,
                'name': 'uint256',
                'nodeType': 'ElementaryTypeName',
                'src': '2140:7:1',
                'typeDescriptions': {
                  'typeIdentifier': 't_uint256',
                  'typeString': 'uint256'
                }
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'anonymous': false,
            'documentation': null,
            'id': 107,
            'name': 'ExecuteSubscription',
            'nodeType': 'EventDefinition',
            'parameters': {
              'id': 106,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 93,
                  'indexed': true,
                  'name': 'from',
                  'nodeType': 'VariableDeclaration',
                  'scope': 107,
                  'src': '2208:20:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 92,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2208:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 95,
                  'indexed': true,
                  'name': 'to',
                  'nodeType': 'VariableDeclaration',
                  'scope': 107,
                  'src': '2255:18:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 94,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2255:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 97,
                  'indexed': false,
                  'name': 'tokenAddress',
                  'nodeType': 'VariableDeclaration',
                  'scope': 107,
                  'src': '2299:20:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 96,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2299:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 99,
                  'indexed': false,
                  'name': 'tokenAmount',
                  'nodeType': 'VariableDeclaration',
                  'scope': 107,
                  'src': '2371:19:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 98,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2371:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 101,
                  'indexed': false,
                  'name': 'periodSeconds',
                  'nodeType': 'VariableDeclaration',
                  'scope': 107,
                  'src': '2441:21:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 100,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2441:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 103,
                  'indexed': false,
                  'name': 'gasPrice',
                  'nodeType': 'VariableDeclaration',
                  'scope': 107,
                  'src': '2513:16:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 102,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2513:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 105,
                  'indexed': false,
                  'name': 'nonce',
                  'nodeType': 'VariableDeclaration',
                  'scope': 107,
                  'src': '2590:13:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 104,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2590:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '2198:471:1'
            },
            'src': '2173:497:1'
          },
          {
            'anonymous': false,
            'documentation': null,
            'id': 123,
            'name': 'CancelSubscription',
            'nodeType': 'EventDefinition',
            'parameters': {
              'id': 122,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 109,
                  'indexed': true,
                  'name': 'from',
                  'nodeType': 'VariableDeclaration',
                  'scope': 123,
                  'src': '2710:20:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 108,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2710:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 111,
                  'indexed': true,
                  'name': 'to',
                  'nodeType': 'VariableDeclaration',
                  'scope': 123,
                  'src': '2757:18:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 110,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2757:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 113,
                  'indexed': false,
                  'name': 'tokenAddress',
                  'nodeType': 'VariableDeclaration',
                  'scope': 123,
                  'src': '2801:20:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 112,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2801:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 115,
                  'indexed': false,
                  'name': 'tokenAmount',
                  'nodeType': 'VariableDeclaration',
                  'scope': 123,
                  'src': '2873:19:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 114,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2873:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 117,
                  'indexed': false,
                  'name': 'periodSeconds',
                  'nodeType': 'VariableDeclaration',
                  'scope': 123,
                  'src': '2943:21:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 116,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2943:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 119,
                  'indexed': false,
                  'name': 'gasPrice',
                  'nodeType': 'VariableDeclaration',
                  'scope': 123,
                  'src': '3015:16:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 118,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3015:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 121,
                  'indexed': false,
                  'name': 'nonce',
                  'nodeType': 'VariableDeclaration',
                  'scope': 123,
                  'src': '3092:13:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 120,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3092:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '2700:471:1'
            },
            'src': '2676:496:1'
          },
          {
            'anonymous': false,
            'documentation': null,
            'id': 129,
            'name': 'ownershipChanged',
            'nodeType': 'EventDefinition',
            'parameters': {
              'id': 128,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 125,
                  'indexed': false,
                  'name': 'oldOwner',
                  'nodeType': 'VariableDeclaration',
                  'scope': 129,
                  'src': '3210:16:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 124,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3210:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 127,
                  'indexed': false,
                  'name': 'newOwner',
                  'nodeType': 'VariableDeclaration',
                  'scope': 129,
                  'src': '3236:16:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 126,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3236:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '3200:58:1'
            },
            'src': '3178:81:1'
          },
          {
            'body': {
              'id': 179,
              'nodeType': 'Block',
              'src': '3488:292:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 148,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 146,
                      'name': 'requiredToAddress',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 75,
                      'src': '3498:17:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address',
                        'typeString': 'address'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'id': 147,
                      'name': '_toAddress',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 131,
                      'src': '3516:10:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address',
                        'typeString': 'address'
                      }
                    },
                    'src': '3498:28:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'id': 149,
                  'nodeType': 'ExpressionStatement',
                  'src': '3498:28:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 152,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 150,
                      'name': 'requiredTokenAddress',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 77,
                      'src': '3536:20:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address',
                        'typeString': 'address'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'id': 151,
                      'name': '_tokenAddress',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 133,
                      'src': '3557:13:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address',
                        'typeString': 'address'
                      }
                    },
                    'src': '3536:34:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'id': 153,
                  'nodeType': 'ExpressionStatement',
                  'src': '3536:34:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 156,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 154,
                      'name': 'requiredTokenAmount',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 79,
                      'src': '3580:19:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'id': 155,
                      'name': '_tokenAmount',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 135,
                      'src': '3600:12:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '3580:32:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'id': 157,
                  'nodeType': 'ExpressionStatement',
                  'src': '3580:32:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 160,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 158,
                      'name': 'requiredPeriodSeconds',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 81,
                      'src': '3622:21:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'id': 159,
                      'name': '_periodSeconds',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 137,
                      'src': '3644:14:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '3622:36:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'id': 161,
                  'nodeType': 'ExpressionStatement',
                  'src': '3622:36:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 164,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 162,
                      'name': 'requiredGasPrice',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 83,
                      'src': '3668:16:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'id': 163,
                      'name': '_gasPrice',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 139,
                      'src': '3685:9:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '3668:26:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'id': 165,
                  'nodeType': 'ExpressionStatement',
                  'src': '3668:26:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 169,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 166,
                      'name': 'owner',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 69,
                      'src': '3704:5:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address_payable',
                        'typeString': 'address payable'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'expression': {
                        'argumentTypes': null,
                        'id': 167,
                        'name': 'msg',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 1386,
                        'src': '3710:3:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_magic_message',
                          'typeString': 'msg'
                        }
                      },
                      'id': 168,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'sender',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': null,
                      'src': '3710:10:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address_payable',
                        'typeString': 'address payable'
                      }
                    },
                    'src': '3704:16:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address_payable',
                      'typeString': 'address payable'
                    }
                  },
                  'id': 170,
                  'nodeType': 'ExpressionStatement',
                  'src': '3704:16:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 173,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 171,
                      'name': 'relayer',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 73,
                      'src': '3730:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address',
                        'typeString': 'address'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'id': 172,
                      'name': '_relayer',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 143,
                      'src': '3738:8:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address',
                        'typeString': 'address'
                      }
                    },
                    'src': '3730:16:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'id': 174,
                  'nodeType': 'ExpressionStatement',
                  'src': '3730:16:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 177,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 175,
                      'name': 'contractVersion',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 71,
                      'src': '3756:15:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint8',
                        'typeString': 'uint8'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'hexValue': '31',
                      'id': 176,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': true,
                      'kind': 'number',
                      'lValueRequested': false,
                      'nodeType': 'Literal',
                      'src': '3772:1:1',
                      'subdenomination': null,
                      'typeDescriptions': {
                        'typeIdentifier': 't_rational_1_by_1',
                        'typeString': 'int_const 1'
                      },
                      'value': '1'
                    },
                    'src': '3756:17:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint8',
                      'typeString': 'uint8'
                    }
                  },
                  'id': 178,
                  'nodeType': 'ExpressionStatement',
                  'src': '3756:17:1'
                }
              ]
            },
            'documentation': null,
            'id': 180,
            'implemented': true,
            'kind': 'constructor',
            'modifiers': [],
            'name': '',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 144,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 131,
                  'name': '_toAddress',
                  'nodeType': 'VariableDeclaration',
                  'scope': 180,
                  'src': '3286:18:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 130,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3286:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 133,
                  'name': '_tokenAddress',
                  'nodeType': 'VariableDeclaration',
                  'scope': 180,
                  'src': '3314:21:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 132,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3314:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 135,
                  'name': '_tokenAmount',
                  'nodeType': 'VariableDeclaration',
                  'scope': 180,
                  'src': '3345:20:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 134,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3345:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 137,
                  'name': '_periodSeconds',
                  'nodeType': 'VariableDeclaration',
                  'scope': 180,
                  'src': '3375:22:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 136,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3375:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 139,
                  'name': '_gasPrice',
                  'nodeType': 'VariableDeclaration',
                  'scope': 180,
                  'src': '3407:17:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 138,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3407:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 141,
                  'name': '_version',
                  'nodeType': 'VariableDeclaration',
                  'scope': 180,
                  'src': '3434:14:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint8',
                    'typeString': 'uint8'
                  },
                  'typeName': {
                    'id': 140,
                    'name': 'uint8',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3434:5:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint8',
                      'typeString': 'uint8'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 143,
                  'name': '_relayer',
                  'nodeType': 'VariableDeclaration',
                  'scope': 180,
                  'src': '3458:16:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 142,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3458:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '3276:204:1'
            },
            'returnParameters': {
              'id': 145,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '3488:0:1'
            },
            'scope': 710,
            'src': '3265:515:1',
            'stateMutability': 'nonpayable',
            'superFunction': null,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 202,
              'nodeType': 'Block',
              'src': '3855:114:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        },
                        'id': 189,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'expression': {
                            'argumentTypes': null,
                            'id': 186,
                            'name': 'msg',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 1386,
                            'src': '3871:3:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_magic_message',
                              'typeString': 'msg'
                            }
                          },
                          'id': 187,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'memberName': 'sender',
                          'nodeType': 'MemberAccess',
                          'referencedDeclaration': null,
                          'src': '3871:10:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address_payable',
                            'typeString': 'address payable'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '==',
                        'rightExpression': {
                          'argumentTypes': null,
                          'id': 188,
                          'name': 'owner',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 69,
                          'src': '3883:5:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address_payable',
                            'typeString': 'address payable'
                          }
                        },
                        'src': '3871:17:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      ],
                      'id': 185,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1389,
                        1390
                      ],
                      'referencedDeclaration': 1389,
                      'src': '3863:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$returns$__$',
                        'typeString': 'function (bool) pure'
                      }
                    },
                    'id': 190,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '3863:26:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 191,
                  'nodeType': 'ExpressionStatement',
                  'src': '3863:26:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 194,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 192,
                      'name': 'owner',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 69,
                      'src': '3897:5:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address_payable',
                        'typeString': 'address payable'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'id': 193,
                      'name': '_newOwner',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 182,
                      'src': '3905:9:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address_payable',
                        'typeString': 'address payable'
                      }
                    },
                    'src': '3897:17:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address_payable',
                      'typeString': 'address payable'
                    }
                  },
                  'id': 195,
                  'nodeType': 'ExpressionStatement',
                  'src': '3897:17:1'
                },
                {
                  'eventCall': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'expression': {
                          'argumentTypes': null,
                          'id': 197,
                          'name': 'msg',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 1386,
                          'src': '3944:3:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_magic_message',
                            'typeString': 'msg'
                          }
                        },
                        'id': 198,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'memberName': 'sender',
                        'nodeType': 'MemberAccess',
                        'referencedDeclaration': null,
                        'src': '3944:10:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 199,
                        'name': 'owner',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 69,
                        'src': '3956:5:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        },
                        {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        }
                      ],
                      'id': 196,
                      'name': 'ownershipChanged',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 129,
                      'src': '3927:16:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_event_nonpayable$_t_address_$_t_address_$returns$__$',
                        'typeString': 'function (address,address)'
                      }
                    },
                    'id': 200,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '3927:35:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 201,
                  'nodeType': 'EmitStatement',
                  'src': '3922:40:1'
                }
              ]
            },
            'documentation': null,
            'id': 203,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'changeOwnership',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 183,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 182,
                  'name': '_newOwner',
                  'nodeType': 'VariableDeclaration',
                  'scope': 203,
                  'src': '3811:25:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address_payable',
                    'typeString': 'address payable'
                  },
                  'typeName': {
                    'id': 181,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3811:15:1',
                    'stateMutability': 'payable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address_payable',
                      'typeString': 'address payable'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '3810:27:1'
            },
            'returnParameters': {
              'id': 184,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '3855:0:1'
            },
            'scope': 710,
            'src': '3786:183:1',
            'stateMutability': 'nonpayable',
            'superFunction': null,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 235,
              'nodeType': 'Block',
              'src': '4372:227:1',
              'statements': [
                {
                  'condition': {
                    'argumentTypes': null,
                    'commonType': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    },
                    'id': 219,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftExpression': {
                      'argumentTypes': null,
                      'baseExpression': {
                        'argumentTypes': null,
                        'id': 212,
                        'name': 'nextValidTimestamp',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 87,
                        'src': '4385:18:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_mapping$_t_bytes32_$_t_uint256_$',
                          'typeString': 'mapping(bytes32 => uint256)'
                        }
                      },
                      'id': 214,
                      'indexExpression': {
                        'argumentTypes': null,
                        'id': 213,
                        'name': 'subscriptionHash',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 205,
                        'src': '4404:16:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        }
                      },
                      'isConstant': false,
                      'isLValue': true,
                      'isPure': false,
                      'lValueRequested': false,
                      'nodeType': 'IndexAccess',
                      'src': '4385:36:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'BinaryOperation',
                    'operator': '==',
                    'rightExpression': {
                      'argumentTypes': null,
                      'arguments': [
                        {
                          'argumentTypes': null,
                          'id': 217,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': true,
                          'lValueRequested': false,
                          'nodeType': 'UnaryOperation',
                          'operator': '-',
                          'prefix': true,
                          'src': '4431:2:1',
                          'subExpression': {
                            'argumentTypes': null,
                            'hexValue': '31',
                            'id': 216,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': true,
                            'kind': 'number',
                            'lValueRequested': false,
                            'nodeType': 'Literal',
                            'src': '4432:1:1',
                            'subdenomination': null,
                            'typeDescriptions': {
                              'typeIdentifier': 't_rational_1_by_1',
                              'typeString': 'int_const 1'
                            },
                            'value': '1'
                          },
                          'typeDescriptions': {
                            'typeIdentifier': 't_rational_minus_1_by_1',
                            'typeString': 'int_const -1'
                          }
                        }
                      ],
                      'expression': {
                        'argumentTypes': [
                          {
                            'typeIdentifier': 't_rational_minus_1_by_1',
                            'typeString': 'int_const -1'
                          }
                        ],
                        'id': 215,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'lValueRequested': false,
                        'nodeType': 'ElementaryTypeNameExpression',
                        'src': '4423:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_type$_t_uint256_$',
                          'typeString': 'type(uint256)'
                        },
                        'typeName': 'uint256'
                      },
                      'id': 218,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': true,
                      'kind': 'typeConversion',
                      'lValueRequested': false,
                      'names': [],
                      'nodeType': 'FunctionCall',
                      'src': '4423:11:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '4385:49:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'falseBody': null,
                  'id': 223,
                  'nodeType': 'IfStatement',
                  'src': '4382:88:1',
                  'trueBody': {
                    'id': 222,
                    'nodeType': 'Block',
                    'src': '4435:35:1',
                    'statements': [
                      {
                        'expression': {
                          'argumentTypes': null,
                          'hexValue': '66616c7365',
                          'id': 220,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': true,
                          'kind': 'bool',
                          'lValueRequested': false,
                          'nodeType': 'Literal',
                          'src': '4454:5:1',
                          'subdenomination': null,
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          },
                          'value': 'false'
                        },
                        'functionReturnParameters': 211,
                        'id': 221,
                        'nodeType': 'Return',
                        'src': '4447:12:1'
                      }
                    ]
                  }
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'components': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        'id': 232,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'expression': {
                            'argumentTypes': null,
                            'id': 224,
                            'name': 'block',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 1376,
                            'src': '4487:5:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_magic_block',
                              'typeString': 'block'
                            }
                          },
                          'id': 225,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'memberName': 'timestamp',
                          'nodeType': 'MemberAccess',
                          'referencedDeclaration': null,
                          'src': '4487:15:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '<=',
                        'rightExpression': {
                          'argumentTypes': null,
                          'arguments': [
                            {
                              'argumentTypes': null,
                              'id': 230,
                              'name': 'gracePeriodSeconds',
                              'nodeType': 'Identifier',
                              'overloadedDeclarations': [],
                              'referencedDeclaration': 207,
                              'src': '4563:18:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_uint256',
                                'typeString': 'uint256'
                              }
                            }
                          ],
                          'expression': {
                            'argumentTypes': [
                              {
                                'typeIdentifier': 't_uint256',
                                'typeString': 'uint256'
                              }
                            ],
                            'expression': {
                              'argumentTypes': null,
                              'baseExpression': {
                                'argumentTypes': null,
                                'id': 226,
                                'name': 'nextValidTimestamp',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 87,
                                'src': '4522:18:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_mapping$_t_bytes32_$_t_uint256_$',
                                  'typeString': 'mapping(bytes32 => uint256)'
                                }
                              },
                              'id': 228,
                              'indexExpression': {
                                'argumentTypes': null,
                                'id': 227,
                                'name': 'subscriptionHash',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 205,
                                'src': '4541:16:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_bytes32',
                                  'typeString': 'bytes32'
                                }
                              },
                              'isConstant': false,
                              'isLValue': true,
                              'isPure': false,
                              'lValueRequested': false,
                              'nodeType': 'IndexAccess',
                              'src': '4522:36:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_uint256',
                                'typeString': 'uint256'
                              }
                            },
                            'id': 229,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': false,
                            'lValueRequested': false,
                            'memberName': 'add',
                            'nodeType': 'MemberAccess',
                            'referencedDeclaration': 898,
                            'src': '4522:40:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$',
                              'typeString': 'function (uint256,uint256) pure returns (uint256)'
                            }
                          },
                          'id': 231,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'kind': 'functionCall',
                          'lValueRequested': false,
                          'names': [],
                          'nodeType': 'FunctionCall',
                          'src': '4522:60:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        },
                        'src': '4487:95:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      }
                    ],
                    'id': 233,
                    'isConstant': false,
                    'isInlineArray': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'nodeType': 'TupleExpression',
                    'src': '4486:106:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'functionReturnParameters': 211,
                  'id': 234,
                  'nodeType': 'Return',
                  'src': '4479:113:1'
                }
              ]
            },
            'documentation': null,
            'id': 236,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'isSubscriptionActive',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 208,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 205,
                  'name': 'subscriptionHash',
                  'nodeType': 'VariableDeclaration',
                  'scope': 236,
                  'src': '4248:24:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bytes32',
                    'typeString': 'bytes32'
                  },
                  'typeName': {
                    'id': 204,
                    'name': 'bytes32',
                    'nodeType': 'ElementaryTypeName',
                    'src': '4248:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes32',
                      'typeString': 'bytes32'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 207,
                  'name': 'gracePeriodSeconds',
                  'nodeType': 'VariableDeclaration',
                  'scope': 236,
                  'src': '4282:26:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 206,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '4282:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '4238:76:1'
            },
            'returnParameters': {
              'id': 211,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 210,
                  'name': '',
                  'nodeType': 'VariableDeclaration',
                  'scope': 236,
                  'src': '4362:4:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bool',
                    'typeString': 'bool'
                  },
                  'typeName': {
                    'id': 209,
                    'name': 'bool',
                    'nodeType': 'ElementaryTypeName',
                    'src': '4362:4:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '4361:6:1'
            },
            'scope': 710,
            'src': '4209:390:1',
            'stateMutability': 'view',
            'superFunction': null,
            'visibility': 'external'
          },
          {
            'body': {
              'id': 335,
              'nodeType': 'Block',
              'src': '5304:999:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        'id': 264,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          },
                          'id': 260,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 256,
                            'name': 'requiredToAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 75,
                            'src': '5428:17:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '==',
                          'rightExpression': {
                            'argumentTypes': null,
                            'arguments': [
                              {
                                'argumentTypes': null,
                                'hexValue': '30',
                                'id': 258,
                                'isConstant': false,
                                'isLValue': false,
                                'isPure': true,
                                'kind': 'number',
                                'lValueRequested': false,
                                'nodeType': 'Literal',
                                'src': '5457:1:1',
                                'subdenomination': null,
                                'typeDescriptions': {
                                  'typeIdentifier': 't_rational_0_by_1',
                                  'typeString': 'int_const 0'
                                },
                                'value': '0'
                              }
                            ],
                            'expression': {
                              'argumentTypes': [
                                {
                                  'typeIdentifier': 't_rational_0_by_1',
                                  'typeString': 'int_const 0'
                                }
                              ],
                              'id': 257,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': true,
                              'lValueRequested': false,
                              'nodeType': 'ElementaryTypeNameExpression',
                              'src': '5449:7:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_type$_t_address_$',
                                'typeString': 'type(address)'
                              },
                              'typeName': 'address'
                            },
                            'id': 259,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': true,
                            'kind': 'typeConversion',
                            'lValueRequested': false,
                            'names': [],
                            'nodeType': 'FunctionCall',
                            'src': '5449:10:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address_payable',
                              'typeString': 'address payable'
                            }
                          },
                          'src': '5428:31:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '||',
                        'rightExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          },
                          'id': 263,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 261,
                            'name': 'to',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 240,
                            'src': '5463:2:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '==',
                          'rightExpression': {
                            'argumentTypes': null,
                            'id': 262,
                            'name': 'requiredToAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 75,
                            'src': '5469:17:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          'src': '5463:23:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'src': '5428:58:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '7265717569726564546f41646472657373204661696c757265',
                        'id': 265,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '5488:27:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_1780bcf794aab203f72828cdd8822e2720f64bbe143d842ce30f054eabc78430',
                          'typeString': 'literal_string \'requiredToAddress Failure\''
                        },
                        'value': 'requiredToAddress Failure'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_1780bcf794aab203f72828cdd8822e2720f64bbe143d842ce30f054eabc78430',
                          'typeString': 'literal_string \'requiredToAddress Failure\''
                        }
                      ],
                      'id': 255,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1389,
                        1390
                      ],
                      'referencedDeclaration': 1390,
                      'src': '5419:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 266,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '5419:98:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 267,
                  'nodeType': 'ExpressionStatement',
                  'src': '5419:98:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        'id': 277,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          },
                          'id': 273,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 269,
                            'name': 'requiredTokenAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 77,
                            'src': '5536:20:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '==',
                          'rightExpression': {
                            'argumentTypes': null,
                            'arguments': [
                              {
                                'argumentTypes': null,
                                'hexValue': '30',
                                'id': 271,
                                'isConstant': false,
                                'isLValue': false,
                                'isPure': true,
                                'kind': 'number',
                                'lValueRequested': false,
                                'nodeType': 'Literal',
                                'src': '5568:1:1',
                                'subdenomination': null,
                                'typeDescriptions': {
                                  'typeIdentifier': 't_rational_0_by_1',
                                  'typeString': 'int_const 0'
                                },
                                'value': '0'
                              }
                            ],
                            'expression': {
                              'argumentTypes': [
                                {
                                  'typeIdentifier': 't_rational_0_by_1',
                                  'typeString': 'int_const 0'
                                }
                              ],
                              'id': 270,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': true,
                              'lValueRequested': false,
                              'nodeType': 'ElementaryTypeNameExpression',
                              'src': '5560:7:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_type$_t_address_$',
                                'typeString': 'type(address)'
                              },
                              'typeName': 'address'
                            },
                            'id': 272,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': true,
                            'kind': 'typeConversion',
                            'lValueRequested': false,
                            'names': [],
                            'nodeType': 'FunctionCall',
                            'src': '5560:10:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address_payable',
                              'typeString': 'address payable'
                            }
                          },
                          'src': '5536:34:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '||',
                        'rightExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          },
                          'id': 276,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 274,
                            'name': 'tokenAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 242,
                            'src': '5574:12:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '==',
                          'rightExpression': {
                            'argumentTypes': null,
                            'id': 275,
                            'name': 'requiredTokenAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 77,
                            'src': '5590:20:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          'src': '5574:36:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'src': '5536:74:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '7265717569726564546f6b656e41646472657373204661696c757265',
                        'id': 278,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '5612:30:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_0a4155ffffdaca064dc0492130d948bbabedf9b4a3c7b4dba7701d2aa083061c',
                          'typeString': 'literal_string \'requiredTokenAddress Failure\''
                        },
                        'value': 'requiredTokenAddress Failure'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_0a4155ffffdaca064dc0492130d948bbabedf9b4a3c7b4dba7701d2aa083061c',
                          'typeString': 'literal_string \'requiredTokenAddress Failure\''
                        }
                      ],
                      'id': 268,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1389,
                        1390
                      ],
                      'referencedDeclaration': 1390,
                      'src': '5527:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 279,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '5527:118:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 280,
                  'nodeType': 'ExpressionStatement',
                  'src': '5527:118:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        'id': 288,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          },
                          'id': 284,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 282,
                            'name': 'requiredTokenAmount',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 79,
                            'src': '5664:19:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '==',
                          'rightExpression': {
                            'argumentTypes': null,
                            'hexValue': '30',
                            'id': 283,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': true,
                            'kind': 'number',
                            'lValueRequested': false,
                            'nodeType': 'Literal',
                            'src': '5687:1:1',
                            'subdenomination': null,
                            'typeDescriptions': {
                              'typeIdentifier': 't_rational_0_by_1',
                              'typeString': 'int_const 0'
                            },
                            'value': '0'
                          },
                          'src': '5664:24:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '||',
                        'rightExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          },
                          'id': 287,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 285,
                            'name': 'tokenAmount',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 244,
                            'src': '5692:11:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '==',
                          'rightExpression': {
                            'argumentTypes': null,
                            'id': 286,
                            'name': 'requiredTokenAmount',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 79,
                            'src': '5707:19:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'src': '5692:34:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'src': '5664:62:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '7265717569726564546f6b656e416d6f756e74204661696c757265',
                        'id': 289,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '5728:29:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_0dfea9330de22cf3a44a9f589d334e51ce03eb93b887fccb426b90a5cf902785',
                          'typeString': 'literal_string \'requiredTokenAmount Failure\''
                        },
                        'value': 'requiredTokenAmount Failure'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_0dfea9330de22cf3a44a9f589d334e51ce03eb93b887fccb426b90a5cf902785',
                          'typeString': 'literal_string \'requiredTokenAmount Failure\''
                        }
                      ],
                      'id': 281,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1389,
                        1390
                      ],
                      'referencedDeclaration': 1390,
                      'src': '5655:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 290,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '5655:105:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 291,
                  'nodeType': 'ExpressionStatement',
                  'src': '5655:105:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        'id': 299,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          },
                          'id': 295,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 293,
                            'name': 'requiredPeriodSeconds',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 81,
                            'src': '5779:21:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '==',
                          'rightExpression': {
                            'argumentTypes': null,
                            'hexValue': '30',
                            'id': 294,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': true,
                            'kind': 'number',
                            'lValueRequested': false,
                            'nodeType': 'Literal',
                            'src': '5804:1:1',
                            'subdenomination': null,
                            'typeDescriptions': {
                              'typeIdentifier': 't_rational_0_by_1',
                              'typeString': 'int_const 0'
                            },
                            'value': '0'
                          },
                          'src': '5779:26:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '||',
                        'rightExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          },
                          'id': 298,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 296,
                            'name': 'periodSeconds',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 246,
                            'src': '5809:13:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '==',
                          'rightExpression': {
                            'argumentTypes': null,
                            'id': 297,
                            'name': 'requiredPeriodSeconds',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 81,
                            'src': '5826:21:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'src': '5809:38:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'src': '5779:68:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '7265717569726564506572696f645365636f6e6473204661696c757265',
                        'id': 300,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '5849:31:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_829576bc6f2a6cbacb797e1e609350189547b06e13145f9ac8afe9b515c8265b',
                          'typeString': 'literal_string \'requiredPeriodSeconds Failure\''
                        },
                        'value': 'requiredPeriodSeconds Failure'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_829576bc6f2a6cbacb797e1e609350189547b06e13145f9ac8afe9b515c8265b',
                          'typeString': 'literal_string \'requiredPeriodSeconds Failure\''
                        }
                      ],
                      'id': 292,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1389,
                        1390
                      ],
                      'referencedDeclaration': 1390,
                      'src': '5770:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 301,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '5770:113:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 302,
                  'nodeType': 'ExpressionStatement',
                  'src': '5770:113:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        'id': 310,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          },
                          'id': 306,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 304,
                            'name': 'requiredGasPrice',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 83,
                            'src': '5902:16:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '==',
                          'rightExpression': {
                            'argumentTypes': null,
                            'hexValue': '30',
                            'id': 305,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': true,
                            'kind': 'number',
                            'lValueRequested': false,
                            'nodeType': 'Literal',
                            'src': '5922:1:1',
                            'subdenomination': null,
                            'typeDescriptions': {
                              'typeIdentifier': 't_rational_0_by_1',
                              'typeString': 'int_const 0'
                            },
                            'value': '0'
                          },
                          'src': '5902:21:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '||',
                        'rightExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          },
                          'id': 309,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 307,
                            'name': 'gasPrice',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 248,
                            'src': '5927:8:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '==',
                          'rightExpression': {
                            'argumentTypes': null,
                            'id': 308,
                            'name': 'requiredGasPrice',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 83,
                            'src': '5939:16:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'src': '5927:28:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'src': '5902:53:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '72657175697265644761735072696365204661696c757265',
                        'id': 311,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '5957:26:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_0549ea7d3e61063659accdb56e119c83714b122fe72a3eca04edb4ce124397bb',
                          'typeString': 'literal_string \'requiredGasPrice Failure\''
                        },
                        'value': 'requiredGasPrice Failure'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_0549ea7d3e61063659accdb56e119c83714b122fe72a3eca04edb4ce124397bb',
                          'typeString': 'literal_string \'requiredGasPrice Failure\''
                        }
                      ],
                      'id': 303,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1389,
                        1390
                      ],
                      'referencedDeclaration': 1390,
                      'src': '5893:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 312,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '5893:93:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 313,
                  'nodeType': 'ExpressionStatement',
                  'src': '5893:93:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'arguments': [
                          {
                            'argumentTypes': null,
                            'arguments': [
                              {
                                'argumentTypes': null,
                                'hexValue': '30783139',
                                'id': 318,
                                'isConstant': false,
                                'isLValue': false,
                                'isPure': true,
                                'kind': 'number',
                                'lValueRequested': false,
                                'nodeType': 'Literal',
                                'src': '6066:4:1',
                                'subdenomination': null,
                                'typeDescriptions': {
                                  'typeIdentifier': 't_rational_25_by_1',
                                  'typeString': 'int_const 25'
                                },
                                'value': '0x19'
                              }
                            ],
                            'expression': {
                              'argumentTypes': [
                                {
                                  'typeIdentifier': 't_rational_25_by_1',
                                  'typeString': 'int_const 25'
                                }
                              ],
                              'id': 317,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': true,
                              'lValueRequested': false,
                              'nodeType': 'ElementaryTypeNameExpression',
                              'src': '6061:4:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_type$_t_bytes1_$',
                                'typeString': 'type(bytes1)'
                              },
                              'typeName': 'byte'
                            },
                            'id': 319,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': true,
                            'kind': 'typeConversion',
                            'lValueRequested': false,
                            'names': [],
                            'nodeType': 'FunctionCall',
                            'src': '6061:10:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_bytes1',
                              'typeString': 'bytes1'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'arguments': [
                              {
                                'argumentTypes': null,
                                'hexValue': '30',
                                'id': 321,
                                'isConstant': false,
                                'isLValue': false,
                                'isPure': true,
                                'kind': 'number',
                                'lValueRequested': false,
                                'nodeType': 'Literal',
                                'src': '6094:1:1',
                                'subdenomination': null,
                                'typeDescriptions': {
                                  'typeIdentifier': 't_rational_0_by_1',
                                  'typeString': 'int_const 0'
                                },
                                'value': '0'
                              }
                            ],
                            'expression': {
                              'argumentTypes': [
                                {
                                  'typeIdentifier': 't_rational_0_by_1',
                                  'typeString': 'int_const 0'
                                }
                              ],
                              'id': 320,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': true,
                              'lValueRequested': false,
                              'nodeType': 'ElementaryTypeNameExpression',
                              'src': '6089:4:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_type$_t_bytes1_$',
                                'typeString': 'type(bytes1)'
                              },
                              'typeName': 'byte'
                            },
                            'id': 322,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': true,
                            'kind': 'typeConversion',
                            'lValueRequested': false,
                            'names': [],
                            'nodeType': 'FunctionCall',
                            'src': '6089:7:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_bytes1',
                              'typeString': 'bytes1'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'arguments': [
                              {
                                'argumentTypes': null,
                                'id': 324,
                                'name': 'this',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 1409,
                                'src': '6122:4:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_contract$_Subscription_$710',
                                  'typeString': 'contract Subscription'
                                }
                              }
                            ],
                            'expression': {
                              'argumentTypes': [
                                {
                                  'typeIdentifier': 't_contract$_Subscription_$710',
                                  'typeString': 'contract Subscription'
                                }
                              ],
                              'id': 323,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': true,
                              'lValueRequested': false,
                              'nodeType': 'ElementaryTypeNameExpression',
                              'src': '6114:7:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_type$_t_address_$',
                                'typeString': 'type(address)'
                              },
                              'typeName': 'address'
                            },
                            'id': 325,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': false,
                            'kind': 'typeConversion',
                            'lValueRequested': false,
                            'names': [],
                            'nodeType': 'FunctionCall',
                            'src': '6114:13:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address_payable',
                              'typeString': 'address payable'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 326,
                            'name': 'from',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 238,
                            'src': '6145:4:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 327,
                            'name': 'to',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 240,
                            'src': '6167:2:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 328,
                            'name': 'tokenAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 242,
                            'src': '6187:12:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 329,
                            'name': 'tokenAmount',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 244,
                            'src': '6217:11:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 330,
                            'name': 'periodSeconds',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 246,
                            'src': '6246:13:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 331,
                            'name': 'gasPrice',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 248,
                            'src': '6277:8:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          }
                        ],
                        'expression': {
                          'argumentTypes': [
                            {
                              'typeIdentifier': 't_bytes1',
                              'typeString': 'bytes1'
                            },
                            {
                              'typeIdentifier': 't_bytes1',
                              'typeString': 'bytes1'
                            },
                            {
                              'typeIdentifier': 't_address_payable',
                              'typeString': 'address payable'
                            },
                            {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            },
                            {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            },
                            {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            },
                            {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            },
                            {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            },
                            {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          ],
                          'expression': {
                            'argumentTypes': null,
                            'id': 315,
                            'name': 'abi',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 1373,
                            'src': '6027:3:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_magic_abi',
                              'typeString': 'abi'
                            }
                          },
                          'id': 316,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': true,
                          'lValueRequested': false,
                          'memberName': 'encodePacked',
                          'nodeType': 'MemberAccess',
                          'referencedDeclaration': null,
                          'src': '6027:16:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$',
                            'typeString': 'function () pure returns (bytes memory)'
                          }
                        },
                        'id': 332,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'functionCall',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '6027:268:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes_memory_ptr',
                          'typeString': 'bytes memory'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bytes_memory_ptr',
                          'typeString': 'bytes memory'
                        }
                      ],
                      'id': 314,
                      'name': 'keccak256',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 1380,
                      'src': '6004:9:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$',
                        'typeString': 'function (bytes memory) pure returns (bytes32)'
                      }
                    },
                    'id': 333,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '6004:292:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes32',
                      'typeString': 'bytes32'
                    }
                  },
                  'functionReturnParameters': 254,
                  'id': 334,
                  'nodeType': 'Return',
                  'src': '5997:299:1'
                }
              ]
            },
            'documentation': null,
            'id': 336,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'getSubscriptionHash',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 251,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 238,
                  'name': 'from',
                  'nodeType': 'VariableDeclaration',
                  'scope': 336,
                  'src': '4793:12:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 237,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '4793:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 240,
                  'name': 'to',
                  'nodeType': 'VariableDeclaration',
                  'scope': 336,
                  'src': '4832:10:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 239,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '4832:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 242,
                  'name': 'tokenAddress',
                  'nodeType': 'VariableDeclaration',
                  'scope': 336,
                  'src': '4868:20:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 241,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '4868:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 244,
                  'name': 'tokenAmount',
                  'nodeType': 'VariableDeclaration',
                  'scope': 336,
                  'src': '4940:19:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 243,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '4940:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 246,
                  'name': 'periodSeconds',
                  'nodeType': 'VariableDeclaration',
                  'scope': 336,
                  'src': '5010:21:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 245,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '5010:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 248,
                  'name': 'gasPrice',
                  'nodeType': 'VariableDeclaration',
                  'scope': 336,
                  'src': '5082:16:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 247,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '5082:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 250,
                  'name': 'nonce',
                  'nodeType': 'VariableDeclaration',
                  'scope': 336,
                  'src': '5166:13:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 249,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '5166:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '4783:462:1'
            },
            'returnParameters': {
              'id': 254,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 253,
                  'name': '',
                  'nodeType': 'VariableDeclaration',
                  'scope': 336,
                  'src': '5291:7:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bytes32',
                    'typeString': 'bytes32'
                  },
                  'typeName': {
                    'id': 252,
                    'name': 'bytes32',
                    'nodeType': 'ElementaryTypeName',
                    'src': '5291:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes32',
                      'typeString': 'bytes32'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '5290:9:1'
            },
            'scope': 710,
            'src': '4755:1548:1',
            'stateMutability': 'view',
            'superFunction': null,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 352,
              'nodeType': 'Block',
              'src': '6598:84:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 349,
                        'name': 'signature',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 340,
                        'src': '6665:9:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes_memory_ptr',
                          'typeString': 'bytes memory'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bytes_memory_ptr',
                          'typeString': 'bytes memory'
                        }
                      ],
                      'expression': {
                        'argumentTypes': null,
                        'arguments': [],
                        'expression': {
                          'argumentTypes': [],
                          'expression': {
                            'argumentTypes': null,
                            'id': 345,
                            'name': 'subscriptionHash',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 338,
                            'src': '6615:16:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_bytes32',
                              'typeString': 'bytes32'
                            }
                          },
                          'id': 346,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'memberName': 'toEthSignedMessageHash',
                          'nodeType': 'MemberAccess',
                          'referencedDeclaration': 790,
                          'src': '6615:39:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_function_internal_pure$_t_bytes32_$returns$_t_bytes32_$bound_to$_t_bytes32_$',
                            'typeString': 'function (bytes32) pure returns (bytes32)'
                          }
                        },
                        'id': 347,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'functionCall',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '6615:41:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        }
                      },
                      'id': 348,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'recover',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 774,
                      'src': '6615:49:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_pure$_t_bytes32_$_t_bytes_memory_ptr_$returns$_t_address_$bound_to$_t_bytes32_$',
                        'typeString': 'function (bytes32,bytes memory) pure returns (address)'
                      }
                    },
                    'id': 350,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '6615:60:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'functionReturnParameters': 344,
                  'id': 351,
                  'nodeType': 'Return',
                  'src': '6608:67:1'
                }
              ]
            },
            'documentation': null,
            'id': 353,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'getSubscriptionSigner',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 341,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 338,
                  'name': 'subscriptionHash',
                  'nodeType': 'VariableDeclaration',
                  'scope': 353,
                  'src': '6404:24:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bytes32',
                    'typeString': 'bytes32'
                  },
                  'typeName': {
                    'id': 337,
                    'name': 'bytes32',
                    'nodeType': 'ElementaryTypeName',
                    'src': '6404:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes32',
                      'typeString': 'bytes32'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 340,
                  'name': 'signature',
                  'nodeType': 'VariableDeclaration',
                  'scope': 353,
                  'src': '6461:22:1',
                  'stateVariable': false,
                  'storageLocation': 'memory',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bytes_memory_ptr',
                    'typeString': 'bytes'
                  },
                  'typeName': {
                    'id': 339,
                    'name': 'bytes',
                    'nodeType': 'ElementaryTypeName',
                    'src': '6461:5:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes_storage_ptr',
                      'typeString': 'bytes'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '6394:145:1'
            },
            'returnParameters': {
              'id': 344,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 343,
                  'name': '',
                  'nodeType': 'VariableDeclaration',
                  'scope': 353,
                  'src': '6585:7:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 342,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '6585:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '6584:9:1'
            },
            'scope': 710,
            'src': '6364:318:1',
            'stateMutability': 'pure',
            'superFunction': null,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 444,
              'nodeType': 'Block',
              'src': '7433:633:1',
              'statements': [
                {
                  'assignments': [
                    375
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 375,
                      'name': 'subscriptionHash',
                      'nodeType': 'VariableDeclaration',
                      'scope': 444,
                      'src': '7443:24:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_bytes32',
                        'typeString': 'bytes32'
                      },
                      'typeName': {
                        'id': 374,
                        'name': 'bytes32',
                        'nodeType': 'ElementaryTypeName',
                        'src': '7443:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 385,
                  'initialValue': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 377,
                        'name': 'from',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 355,
                        'src': '7503:4:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 378,
                        'name': 'to',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 357,
                        'src': '7509:2:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 379,
                        'name': 'tokenAddress',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 359,
                        'src': '7513:12:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 380,
                        'name': 'tokenAmount',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 361,
                        'src': '7527:11:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 381,
                        'name': 'periodSeconds',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 363,
                        'src': '7540:13:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 382,
                        'name': 'gasPrice',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 365,
                        'src': '7555:8:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 383,
                        'name': 'nonce',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 367,
                        'src': '7565:5:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'id': 376,
                      'name': 'getSubscriptionHash',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 336,
                      'src': '7470:19:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_view$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_bytes32_$',
                        'typeString': 'function (address,address,address,uint256,uint256,uint256,uint256) view returns (bytes32)'
                      }
                    },
                    'id': 384,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '7470:110:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes32',
                      'typeString': 'bytes32'
                    }
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '7443:137:1'
                },
                {
                  'assignments': [
                    387
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 387,
                      'name': 'signer',
                      'nodeType': 'VariableDeclaration',
                      'scope': 444,
                      'src': '7590:14:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address',
                        'typeString': 'address'
                      },
                      'typeName': {
                        'id': 386,
                        'name': 'address',
                        'nodeType': 'ElementaryTypeName',
                        'src': '7590:7:1',
                        'stateMutability': 'nonpayable',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 392,
                  'initialValue': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 389,
                        'name': 'subscriptionHash',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 375,
                        'src': '7629:16:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 390,
                        'name': 'signature',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 369,
                        'src': '7647:9:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes_memory_ptr',
                          'typeString': 'bytes memory'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        },
                        {
                          'typeIdentifier': 't_bytes_memory_ptr',
                          'typeString': 'bytes memory'
                        }
                      ],
                      'id': 388,
                      'name': 'getSubscriptionSigner',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 353,
                      'src': '7607:21:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_pure$_t_bytes32_$_t_bytes_memory_ptr_$returns$_t_address_$',
                        'typeString': 'function (bytes32,bytes memory) pure returns (address)'
                      }
                    },
                    'id': 391,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '7607:50:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '7590:67:1'
                },
                {
                  'assignments': [
                    394
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 394,
                      'name': 'allowance',
                      'nodeType': 'VariableDeclaration',
                      'scope': 444,
                      'src': '7667:17:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      },
                      'typeName': {
                        'id': 393,
                        'name': 'uint256',
                        'nodeType': 'ElementaryTypeName',
                        'src': '7667:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 404,
                  'initialValue': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 399,
                        'name': 'from',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 355,
                        'src': '7717:4:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'arguments': [
                          {
                            'argumentTypes': null,
                            'id': 401,
                            'name': 'this',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 1409,
                            'src': '7731:4:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_contract$_Subscription_$710',
                              'typeString': 'contract Subscription'
                            }
                          }
                        ],
                        'expression': {
                          'argumentTypes': [
                            {
                              'typeIdentifier': 't_contract$_Subscription_$710',
                              'typeString': 'contract Subscription'
                            }
                          ],
                          'id': 400,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': true,
                          'lValueRequested': false,
                          'nodeType': 'ElementaryTypeNameExpression',
                          'src': '7723:7:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_type$_t_address_$',
                            'typeString': 'type(address)'
                          },
                          'typeName': 'address'
                        },
                        'id': 402,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'typeConversion',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '7723:13:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        }
                      ],
                      'expression': {
                        'argumentTypes': null,
                        'arguments': [
                          {
                            'argumentTypes': null,
                            'id': 396,
                            'name': 'tokenAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 359,
                            'src': '7693:12:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          }
                        ],
                        'expression': {
                          'argumentTypes': [
                            {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          ],
                          'id': 395,
                          'name': 'ERC20',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 1302,
                          'src': '7687:5:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_type$_t_contract$_ERC20_$1302_$',
                            'typeString': 'type(contract ERC20)'
                          }
                        },
                        'id': 397,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'typeConversion',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '7687:19:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_contract$_ERC20_$1302',
                          'typeString': 'contract ERC20'
                        }
                      },
                      'id': 398,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'allowance',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 976,
                      'src': '7687:29:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_external_view$_t_address_$_t_address_$returns$_t_uint256_$',
                        'typeString': 'function (address,address) view external returns (uint256)'
                      }
                    },
                    'id': 403,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '7687:50:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '7667:70:1'
                },
                {
                  'assignments': [
                    406
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 406,
                      'name': 'balance',
                      'nodeType': 'VariableDeclaration',
                      'scope': 444,
                      'src': '7747:15:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      },
                      'typeName': {
                        'id': 405,
                        'name': 'uint256',
                        'nodeType': 'ElementaryTypeName',
                        'src': '7747:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 413,
                  'initialValue': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 411,
                        'name': 'from',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 355,
                        'src': '7795:4:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      ],
                      'expression': {
                        'argumentTypes': null,
                        'arguments': [
                          {
                            'argumentTypes': null,
                            'id': 408,
                            'name': 'tokenAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 359,
                            'src': '7771:12:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          }
                        ],
                        'expression': {
                          'argumentTypes': [
                            {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          ],
                          'id': 407,
                          'name': 'ERC20',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 1302,
                          'src': '7765:5:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_type$_t_contract$_ERC20_$1302_$',
                            'typeString': 'type(contract ERC20)'
                          }
                        },
                        'id': 409,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'typeConversion',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '7765:19:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_contract$_ERC20_$1302',
                          'typeString': 'contract ERC20'
                        }
                      },
                      'id': 410,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'balanceOf',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 960,
                      'src': '7765:29:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_external_view$_t_address_$returns$_t_uint256_$',
                        'typeString': 'function (address) view external returns (uint256)'
                      }
                    },
                    'id': 412,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '7765:35:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '7747:53:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'components': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        'id': 441,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          },
                          'id': 434,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'commonType': {
                              'typeIdentifier': 't_bool',
                              'typeString': 'bool'
                            },
                            'id': 427,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': false,
                            'lValueRequested': false,
                            'leftExpression': {
                              'argumentTypes': null,
                              'commonType': {
                                'typeIdentifier': 't_bool',
                                'typeString': 'bool'
                              },
                              'id': 420,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': false,
                              'lValueRequested': false,
                              'leftExpression': {
                                'argumentTypes': null,
                                'commonType': {
                                  'typeIdentifier': 't_address',
                                  'typeString': 'address'
                                },
                                'id': 416,
                                'isConstant': false,
                                'isLValue': false,
                                'isPure': false,
                                'lValueRequested': false,
                                'leftExpression': {
                                  'argumentTypes': null,
                                  'id': 414,
                                  'name': 'signer',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 387,
                                  'src': '7832:6:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_address',
                                    'typeString': 'address'
                                  }
                                },
                                'nodeType': 'BinaryOperation',
                                'operator': '==',
                                'rightExpression': {
                                  'argumentTypes': null,
                                  'id': 415,
                                  'name': 'from',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 355,
                                  'src': '7842:4:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_address',
                                    'typeString': 'address'
                                  }
                                },
                                'src': '7832:14:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_bool',
                                  'typeString': 'bool'
                                }
                              },
                              'nodeType': 'BinaryOperation',
                              'operator': '&&',
                              'rightExpression': {
                                'argumentTypes': null,
                                'commonType': {
                                  'typeIdentifier': 't_address',
                                  'typeString': 'address'
                                },
                                'id': 419,
                                'isConstant': false,
                                'isLValue': false,
                                'isPure': false,
                                'lValueRequested': false,
                                'leftExpression': {
                                  'argumentTypes': null,
                                  'id': 417,
                                  'name': 'from',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 355,
                                  'src': '7862:4:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_address',
                                    'typeString': 'address'
                                  }
                                },
                                'nodeType': 'BinaryOperation',
                                'operator': '!=',
                                'rightExpression': {
                                  'argumentTypes': null,
                                  'id': 418,
                                  'name': 'to',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 357,
                                  'src': '7870:2:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_address',
                                    'typeString': 'address'
                                  }
                                },
                                'src': '7862:10:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_bool',
                                  'typeString': 'bool'
                                }
                              },
                              'src': '7832:40:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_bool',
                                'typeString': 'bool'
                              }
                            },
                            'nodeType': 'BinaryOperation',
                            'operator': '&&',
                            'rightExpression': {
                              'argumentTypes': null,
                              'commonType': {
                                'typeIdentifier': 't_uint256',
                                'typeString': 'uint256'
                              },
                              'id': 426,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': false,
                              'lValueRequested': false,
                              'leftExpression': {
                                'argumentTypes': null,
                                'expression': {
                                  'argumentTypes': null,
                                  'id': 421,
                                  'name': 'block',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 1376,
                                  'src': '7888:5:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_magic_block',
                                    'typeString': 'block'
                                  }
                                },
                                'id': 422,
                                'isConstant': false,
                                'isLValue': false,
                                'isPure': false,
                                'lValueRequested': false,
                                'memberName': 'timestamp',
                                'nodeType': 'MemberAccess',
                                'referencedDeclaration': null,
                                'src': '7888:15:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_uint256',
                                  'typeString': 'uint256'
                                }
                              },
                              'nodeType': 'BinaryOperation',
                              'operator': '>=',
                              'rightExpression': {
                                'argumentTypes': null,
                                'baseExpression': {
                                  'argumentTypes': null,
                                  'id': 423,
                                  'name': 'nextValidTimestamp',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 87,
                                  'src': '7907:18:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_mapping$_t_bytes32_$_t_uint256_$',
                                    'typeString': 'mapping(bytes32 => uint256)'
                                  }
                                },
                                'id': 425,
                                'indexExpression': {
                                  'argumentTypes': null,
                                  'id': 424,
                                  'name': 'subscriptionHash',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 375,
                                  'src': '7926:16:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_bytes32',
                                    'typeString': 'bytes32'
                                  }
                                },
                                'isConstant': false,
                                'isLValue': true,
                                'isPure': false,
                                'lValueRequested': false,
                                'nodeType': 'IndexAccess',
                                'src': '7907:36:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_uint256',
                                  'typeString': 'uint256'
                                }
                              },
                              'src': '7888:55:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_bool',
                                'typeString': 'bool'
                              }
                            },
                            'src': '7832:111:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_bool',
                              'typeString': 'bool'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '&&',
                          'rightExpression': {
                            'argumentTypes': null,
                            'commonType': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            },
                            'id': 433,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': false,
                            'lValueRequested': false,
                            'leftExpression': {
                              'argumentTypes': null,
                              'id': 428,
                              'name': 'allowance',
                              'nodeType': 'Identifier',
                              'overloadedDeclarations': [],
                              'referencedDeclaration': 394,
                              'src': '7959:9:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_uint256',
                                'typeString': 'uint256'
                              }
                            },
                            'nodeType': 'BinaryOperation',
                            'operator': '>=',
                            'rightExpression': {
                              'argumentTypes': null,
                              'arguments': [
                                {
                                  'argumentTypes': null,
                                  'id': 431,
                                  'name': 'gasPrice',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 365,
                                  'src': '7988:8:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_uint256',
                                    'typeString': 'uint256'
                                  }
                                }
                              ],
                              'expression': {
                                'argumentTypes': [
                                  {
                                    'typeIdentifier': 't_uint256',
                                    'typeString': 'uint256'
                                  }
                                ],
                                'expression': {
                                  'argumentTypes': null,
                                  'id': 429,
                                  'name': 'tokenAmount',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 361,
                                  'src': '7972:11:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_uint256',
                                    'typeString': 'uint256'
                                  }
                                },
                                'id': 430,
                                'isConstant': false,
                                'isLValue': false,
                                'isPure': false,
                                'lValueRequested': false,
                                'memberName': 'add',
                                'nodeType': 'MemberAccess',
                                'referencedDeclaration': 898,
                                'src': '7972:15:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$',
                                  'typeString': 'function (uint256,uint256) pure returns (uint256)'
                                }
                              },
                              'id': 432,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': false,
                              'kind': 'functionCall',
                              'lValueRequested': false,
                              'names': [],
                              'nodeType': 'FunctionCall',
                              'src': '7972:25:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_uint256',
                                'typeString': 'uint256'
                              }
                            },
                            'src': '7959:38:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_bool',
                              'typeString': 'bool'
                            }
                          },
                          'src': '7832:165:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '&&',
                        'rightExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          },
                          'id': 440,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 435,
                            'name': 'balance',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 406,
                            'src': '8013:7:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '>=',
                          'rightExpression': {
                            'argumentTypes': null,
                            'arguments': [
                              {
                                'argumentTypes': null,
                                'id': 438,
                                'name': 'gasPrice',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 365,
                                'src': '8040:8:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_uint256',
                                  'typeString': 'uint256'
                                }
                              }
                            ],
                            'expression': {
                              'argumentTypes': [
                                {
                                  'typeIdentifier': 't_uint256',
                                  'typeString': 'uint256'
                                }
                              ],
                              'expression': {
                                'argumentTypes': null,
                                'id': 436,
                                'name': 'tokenAmount',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 361,
                                'src': '8024:11:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_uint256',
                                  'typeString': 'uint256'
                                }
                              },
                              'id': 437,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': false,
                              'lValueRequested': false,
                              'memberName': 'add',
                              'nodeType': 'MemberAccess',
                              'referencedDeclaration': 898,
                              'src': '8024:15:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$',
                                'typeString': 'function (uint256,uint256) pure returns (uint256)'
                              }
                            },
                            'id': 439,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': false,
                            'kind': 'functionCall',
                            'lValueRequested': false,
                            'names': [],
                            'nodeType': 'FunctionCall',
                            'src': '8024:25:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'src': '8013:36:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'src': '7832:217:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      }
                    ],
                    'id': 442,
                    'isConstant': false,
                    'isInlineArray': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'nodeType': 'TupleExpression',
                    'src': '7818:241:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'functionReturnParameters': 373,
                  'id': 443,
                  'nodeType': 'Return',
                  'src': '7811:248:1'
                }
              ]
            },
            'documentation': null,
            'id': 445,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'isSubscriptionReady',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 370,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 355,
                  'name': 'from',
                  'nodeType': 'VariableDeclaration',
                  'scope': 445,
                  'src': '6843:12:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 354,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '6843:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 357,
                  'name': 'to',
                  'nodeType': 'VariableDeclaration',
                  'scope': 445,
                  'src': '6882:10:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 356,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '6882:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 359,
                  'name': 'tokenAddress',
                  'nodeType': 'VariableDeclaration',
                  'scope': 445,
                  'src': '6918:20:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 358,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '6918:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 361,
                  'name': 'tokenAmount',
                  'nodeType': 'VariableDeclaration',
                  'scope': 445,
                  'src': '6990:19:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 360,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '6990:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 363,
                  'name': 'periodSeconds',
                  'nodeType': 'VariableDeclaration',
                  'scope': 445,
                  'src': '7060:21:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 362,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '7060:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 365,
                  'name': 'gasPrice',
                  'nodeType': 'VariableDeclaration',
                  'scope': 445,
                  'src': '7132:16:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 364,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '7132:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 367,
                  'name': 'nonce',
                  'nodeType': 'VariableDeclaration',
                  'scope': 445,
                  'src': '7217:13:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 366,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '7217:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 369,
                  'name': 'signature',
                  'nodeType': 'VariableDeclaration',
                  'scope': 445,
                  'src': '7299:22:1',
                  'stateVariable': false,
                  'storageLocation': 'memory',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bytes_memory_ptr',
                    'typeString': 'bytes'
                  },
                  'typeName': {
                    'id': 368,
                    'name': 'bytes',
                    'nodeType': 'ElementaryTypeName',
                    'src': '7299:5:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes_storage_ptr',
                      'typeString': 'bytes'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '6833:544:1'
            },
            'returnParameters': {
              'id': 373,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 372,
                  'name': '',
                  'nodeType': 'VariableDeclaration',
                  'scope': 445,
                  'src': '7423:4:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bool',
                    'typeString': 'bool'
                  },
                  'typeName': {
                    'id': 371,
                    'name': 'bool',
                    'nodeType': 'ElementaryTypeName',
                    'src': '7423:4:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '7422:6:1'
            },
            'scope': 710,
            'src': '6805:1261:1',
            'stateMutability': 'view',
            'superFunction': null,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 521,
              'nodeType': 'Block',
              'src': '8941:802:1',
              'statements': [
                {
                  'assignments': [
                    467
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 467,
                      'name': 'subscriptionHash',
                      'nodeType': 'VariableDeclaration',
                      'scope': 521,
                      'src': '8951:24:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_bytes32',
                        'typeString': 'bytes32'
                      },
                      'typeName': {
                        'id': 466,
                        'name': 'bytes32',
                        'nodeType': 'ElementaryTypeName',
                        'src': '8951:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 477,
                  'initialValue': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 469,
                        'name': 'from',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 447,
                        'src': '9011:4:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 470,
                        'name': 'to',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 449,
                        'src': '9017:2:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 471,
                        'name': 'tokenAddress',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 451,
                        'src': '9021:12:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 472,
                        'name': 'tokenAmount',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 453,
                        'src': '9035:11:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 473,
                        'name': 'periodSeconds',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 455,
                        'src': '9048:13:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 474,
                        'name': 'gasPrice',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 457,
                        'src': '9063:8:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 475,
                        'name': 'nonce',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 459,
                        'src': '9073:5:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'id': 468,
                      'name': 'getSubscriptionHash',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 336,
                      'src': '8978:19:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_view$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_bytes32_$',
                        'typeString': 'function (address,address,address,uint256,uint256,uint256,uint256) view returns (bytes32)'
                      }
                    },
                    'id': 476,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '8978:110:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes32',
                      'typeString': 'bytes32'
                    }
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '8951:137:1'
                },
                {
                  'assignments': [
                    479
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 479,
                      'name': 'signer',
                      'nodeType': 'VariableDeclaration',
                      'scope': 521,
                      'src': '9098:14:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_address',
                        'typeString': 'address'
                      },
                      'typeName': {
                        'id': 478,
                        'name': 'address',
                        'nodeType': 'ElementaryTypeName',
                        'src': '9098:7:1',
                        'stateMutability': 'nonpayable',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 484,
                  'initialValue': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 481,
                        'name': 'subscriptionHash',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 467,
                        'src': '9137:16:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 482,
                        'name': 'signature',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 461,
                        'src': '9155:9:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes_memory_ptr',
                          'typeString': 'bytes memory'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        },
                        {
                          'typeIdentifier': 't_bytes_memory_ptr',
                          'typeString': 'bytes memory'
                        }
                      ],
                      'id': 480,
                      'name': 'getSubscriptionSigner',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 353,
                      'src': '9115:21:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_pure$_t_bytes32_$_t_bytes_memory_ptr_$returns$_t_address_$',
                        'typeString': 'function (bytes32,bytes memory) pure returns (address)'
                      }
                    },
                    'id': 483,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '9115:50:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '9098:67:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        'id': 488,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'id': 486,
                          'name': 'signer',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 479,
                          'src': '9222:6:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '==',
                        'rightExpression': {
                          'argumentTypes': null,
                          'id': 487,
                          'name': 'from',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 447,
                          'src': '9232:4:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          }
                        },
                        'src': '9222:14:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '496e76616c6964205369676e617475726520666f7220737562736372697074696f6e2063616e63656c6c6174696f6e',
                        'id': 489,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '9238:49:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_20f3baa67ddd296dfb8b9e0ec971696cfd8630a4bebb38617aeef0cee76fac0b',
                          'typeString': 'literal_string \'Invalid Signature for subscription cancellation\''
                        },
                        'value': 'Invalid Signature for subscription cancellation'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_20f3baa67ddd296dfb8b9e0ec971696cfd8630a4bebb38617aeef0cee76fac0b',
                          'typeString': 'literal_string \'Invalid Signature for subscription cancellation\''
                        }
                      ],
                      'id': 485,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1389,
                        1390
                      ],
                      'referencedDeclaration': 1390,
                      'src': '9214:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 490,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '9214:74:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 491,
                  'nodeType': 'ExpressionStatement',
                  'src': '9214:74:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        'id': 496,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'id': 493,
                          'name': 'from',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 447,
                          'src': '9347:4:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '==',
                        'rightExpression': {
                          'argumentTypes': null,
                          'expression': {
                            'argumentTypes': null,
                            'id': 494,
                            'name': 'msg',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 1386,
                            'src': '9355:3:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_magic_message',
                              'typeString': 'msg'
                            }
                          },
                          'id': 495,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'memberName': 'sender',
                          'nodeType': 'MemberAccess',
                          'referencedDeclaration': null,
                          'src': '9355:10:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address_payable',
                            'typeString': 'address payable'
                          }
                        },
                        'src': '9347:18:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '6d73672e73656e646572206973206e6f74207468652073756273637269626572',
                        'id': 497,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '9367:34:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_b86252a974ff2529f3bb7d6f22659872d492e2e9d678b8652f19cecd6ad9fd79',
                          'typeString': 'literal_string \'msg.sender is not the subscriber\''
                        },
                        'value': 'msg.sender is not the subscriber'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_b86252a974ff2529f3bb7d6f22659872d492e2e9d678b8652f19cecd6ad9fd79',
                          'typeString': 'literal_string \'msg.sender is not the subscriber\''
                        }
                      ],
                      'id': 492,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1389,
                        1390
                      ],
                      'referencedDeclaration': 1390,
                      'src': '9339:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 498,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '9339:63:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 499,
                  'nodeType': 'ExpressionStatement',
                  'src': '9339:63:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 507,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'baseExpression': {
                        'argumentTypes': null,
                        'id': 500,
                        'name': 'nextValidTimestamp',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 87,
                        'src': '9541:18:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_mapping$_t_bytes32_$_t_uint256_$',
                          'typeString': 'mapping(bytes32 => uint256)'
                        }
                      },
                      'id': 502,
                      'indexExpression': {
                        'argumentTypes': null,
                        'id': 501,
                        'name': 'subscriptionHash',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 467,
                        'src': '9560:16:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        }
                      },
                      'isConstant': false,
                      'isLValue': true,
                      'isPure': false,
                      'lValueRequested': true,
                      'nodeType': 'IndexAccess',
                      'src': '9541:36:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'arguments': [
                        {
                          'argumentTypes': null,
                          'id': 505,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': true,
                          'lValueRequested': false,
                          'nodeType': 'UnaryOperation',
                          'operator': '-',
                          'prefix': true,
                          'src': '9586:2:1',
                          'subExpression': {
                            'argumentTypes': null,
                            'hexValue': '31',
                            'id': 504,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': true,
                            'kind': 'number',
                            'lValueRequested': false,
                            'nodeType': 'Literal',
                            'src': '9587:1:1',
                            'subdenomination': null,
                            'typeDescriptions': {
                              'typeIdentifier': 't_rational_1_by_1',
                              'typeString': 'int_const 1'
                            },
                            'value': '1'
                          },
                          'typeDescriptions': {
                            'typeIdentifier': 't_rational_minus_1_by_1',
                            'typeString': 'int_const -1'
                          }
                        }
                      ],
                      'expression': {
                        'argumentTypes': [
                          {
                            'typeIdentifier': 't_rational_minus_1_by_1',
                            'typeString': 'int_const -1'
                          }
                        ],
                        'id': 503,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'lValueRequested': false,
                        'nodeType': 'ElementaryTypeNameExpression',
                        'src': '9578:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_type$_t_uint256_$',
                          'typeString': 'type(uint256)'
                        },
                        'typeName': 'uint256'
                      },
                      'id': 506,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': true,
                      'kind': 'typeConversion',
                      'lValueRequested': false,
                      'names': [],
                      'nodeType': 'FunctionCall',
                      'src': '9578:11:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '9541:48:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'id': 508,
                  'nodeType': 'ExpressionStatement',
                  'src': '9541:48:1'
                },
                {
                  'eventCall': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 510,
                        'name': 'from',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 447,
                        'src': '9637:4:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 511,
                        'name': 'to',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 449,
                        'src': '9643:2:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 512,
                        'name': 'tokenAddress',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 451,
                        'src': '9647:12:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 513,
                        'name': 'tokenAmount',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 453,
                        'src': '9661:11:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 514,
                        'name': 'periodSeconds',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 455,
                        'src': '9674:13:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 515,
                        'name': 'gasPrice',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 457,
                        'src': '9689:8:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 516,
                        'name': 'nonce',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 459,
                        'src': '9699:5:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'id': 509,
                      'name': 'CancelSubscription',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 123,
                      'src': '9605:18:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_event_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$',
                        'typeString': 'function (address,address,address,uint256,uint256,uint256,uint256)'
                      }
                    },
                    'id': 517,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '9605:109:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 518,
                  'nodeType': 'EmitStatement',
                  'src': '9600:114:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'hexValue': '74727565',
                    'id': 519,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': true,
                    'kind': 'bool',
                    'lValueRequested': false,
                    'nodeType': 'Literal',
                    'src': '9732:4:1',
                    'subdenomination': null,
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    },
                    'value': 'true'
                  },
                  'functionReturnParameters': 465,
                  'id': 520,
                  'nodeType': 'Return',
                  'src': '9725:11:1'
                }
              ]
            },
            'documentation': null,
            'id': 522,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'cancelSubscription',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 462,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 447,
                  'name': 'from',
                  'nodeType': 'VariableDeclaration',
                  'scope': 522,
                  'src': '8357:12:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 446,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '8357:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 449,
                  'name': 'to',
                  'nodeType': 'VariableDeclaration',
                  'scope': 522,
                  'src': '8396:10:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 448,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '8396:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 451,
                  'name': 'tokenAddress',
                  'nodeType': 'VariableDeclaration',
                  'scope': 522,
                  'src': '8432:20:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 450,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '8432:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 453,
                  'name': 'tokenAmount',
                  'nodeType': 'VariableDeclaration',
                  'scope': 522,
                  'src': '8504:19:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 452,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '8504:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 455,
                  'name': 'periodSeconds',
                  'nodeType': 'VariableDeclaration',
                  'scope': 522,
                  'src': '8574:21:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 454,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '8574:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 457,
                  'name': 'gasPrice',
                  'nodeType': 'VariableDeclaration',
                  'scope': 522,
                  'src': '8646:16:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 456,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '8646:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 459,
                  'name': 'nonce',
                  'nodeType': 'VariableDeclaration',
                  'scope': 522,
                  'src': '8730:13:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 458,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '8730:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 461,
                  'name': 'signature',
                  'nodeType': 'VariableDeclaration',
                  'scope': 522,
                  'src': '8812:22:1',
                  'stateVariable': false,
                  'storageLocation': 'memory',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bytes_memory_ptr',
                    'typeString': 'bytes'
                  },
                  'typeName': {
                    'id': 460,
                    'name': 'bytes',
                    'nodeType': 'ElementaryTypeName',
                    'src': '8812:5:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes_storage_ptr',
                      'typeString': 'bytes'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '8347:543:1'
            },
            'returnParameters': {
              'id': 465,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 464,
                  'name': 'success',
                  'nodeType': 'VariableDeclaration',
                  'scope': 522,
                  'src': '8923:12:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bool',
                    'typeString': 'bool'
                  },
                  'typeName': {
                    'id': 463,
                    'name': 'bool',
                    'nodeType': 'ElementaryTypeName',
                    'src': '8923:4:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '8922:14:1'
            },
            'scope': 710,
            'src': '8320:1423:1',
            'stateMutability': 'nonpayable',
            'superFunction': null,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 671,
              'nodeType': 'Block',
              'src': '10524:2468:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        'id': 547,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'expression': {
                            'argumentTypes': null,
                            'id': 544,
                            'name': 'msg',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 1386,
                            'src': '10542:3:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_magic_message',
                              'typeString': 'msg'
                            }
                          },
                          'id': 545,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'memberName': 'sender',
                          'nodeType': 'MemberAccess',
                          'referencedDeclaration': null,
                          'src': '10542:10:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address_payable',
                            'typeString': 'address payable'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '==',
                        'rightExpression': {
                          'argumentTypes': null,
                          'id': 546,
                          'name': 'relayer',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 73,
                          'src': '10556:7:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          }
                        },
                        'src': '10542:21:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      ],
                      'id': 543,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1389,
                        1390
                      ],
                      'referencedDeclaration': 1389,
                      'src': '10534:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$returns$__$',
                        'typeString': 'function (bool) pure'
                      }
                    },
                    'id': 548,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '10534:30:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 549,
                  'nodeType': 'ExpressionStatement',
                  'src': '10534:30:1'
                },
                {
                  'assignments': [
                    551
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 551,
                      'name': 'subscriptionHash',
                      'nodeType': 'VariableDeclaration',
                      'scope': 671,
                      'src': '10574:24:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_bytes32',
                        'typeString': 'bytes32'
                      },
                      'typeName': {
                        'id': 550,
                        'name': 'bytes32',
                        'nodeType': 'ElementaryTypeName',
                        'src': '10574:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 561,
                  'initialValue': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 553,
                        'name': 'from',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 524,
                        'src': '10634:4:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 554,
                        'name': 'to',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 526,
                        'src': '10640:2:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 555,
                        'name': 'tokenAddress',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 528,
                        'src': '10644:12:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 556,
                        'name': 'tokenAmount',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 530,
                        'src': '10658:11:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 557,
                        'name': 'periodSeconds',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 532,
                        'src': '10671:13:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 558,
                        'name': 'gasPrice',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 534,
                        'src': '10686:8:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 559,
                        'name': 'nonce',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 536,
                        'src': '10696:5:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'id': 552,
                      'name': 'getSubscriptionHash',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 336,
                      'src': '10601:19:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_view$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_bytes32_$',
                        'typeString': 'function (address,address,address,uint256,uint256,uint256,uint256) view returns (bytes32)'
                      }
                    },
                    'id': 560,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '10601:110:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes32',
                      'typeString': 'bytes32'
                    }
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '10574:137:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'arguments': [
                          {
                            'argumentTypes': null,
                            'id': 564,
                            'name': 'from',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 524,
                            'src': '10808:4:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 565,
                            'name': 'to',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 526,
                            'src': '10814:2:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 566,
                            'name': 'tokenAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 528,
                            'src': '10818:12:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 567,
                            'name': 'tokenAmount',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 530,
                            'src': '10832:11:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 568,
                            'name': 'periodSeconds',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 532,
                            'src': '10845:13:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 569,
                            'name': 'gasPrice',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 534,
                            'src': '10860:8:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 570,
                            'name': 'nonce',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 536,
                            'src': '10870:5:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          {
                            'argumentTypes': null,
                            'id': 571,
                            'name': 'signature',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 538,
                            'src': '10877:9:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_bytes_memory_ptr',
                              'typeString': 'bytes memory'
                            }
                          }
                        ],
                        'expression': {
                          'argumentTypes': [
                            {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            },
                            {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            },
                            {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            },
                            {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            },
                            {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            },
                            {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            },
                            {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            },
                            {
                              'typeIdentifier': 't_bytes_memory_ptr',
                              'typeString': 'bytes memory'
                            }
                          ],
                          'id': 563,
                          'name': 'isSubscriptionReady',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 445,
                          'src': '10788:19:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_function_internal_view$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bytes_memory_ptr_$returns$_t_bool_$',
                            'typeString': 'function (address,address,address,uint256,uint256,uint256,uint256,bytes memory) view returns (bool)'
                          }
                        },
                        'id': 572,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'functionCall',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '10788:99:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '537562736372697074696f6e206973206e6f74207265616479206f7220636f6e646974696f6e73206f66207472616e736374696f6e20617265206e6f74206d6574',
                        'id': 573,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '10889:67:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_af71f06446e1befab38ec272e173aae8220ce6336c1755fee67e531c43ea91d3',
                          'typeString': 'literal_string \'Subscription is not ready or conditions of transction are not met\''
                        },
                        'value': 'Subscription is not ready or conditions of transction are not met'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_af71f06446e1befab38ec272e173aae8220ce6336c1755fee67e531c43ea91d3',
                          'typeString': 'literal_string \'Subscription is not ready or conditions of transction are not met\''
                        }
                      ],
                      'id': 562,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1389,
                        1390
                      ],
                      'referencedDeclaration': 1390,
                      'src': '10779:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 574,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '10779:179:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 575,
                  'nodeType': 'ExpressionStatement',
                  'src': '10779:179:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 584,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'baseExpression': {
                        'argumentTypes': null,
                        'id': 576,
                        'name': 'nextValidTimestamp',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 87,
                        'src': '11048:18:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_mapping$_t_bytes32_$_t_uint256_$',
                          'typeString': 'mapping(bytes32 => uint256)'
                        }
                      },
                      'id': 578,
                      'indexExpression': {
                        'argumentTypes': null,
                        'id': 577,
                        'name': 'subscriptionHash',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 551,
                        'src': '11067:16:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bytes32',
                          'typeString': 'bytes32'
                        }
                      },
                      'isConstant': false,
                      'isLValue': true,
                      'isPure': false,
                      'lValueRequested': true,
                      'nodeType': 'IndexAccess',
                      'src': '11048:36:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'arguments': [
                        {
                          'argumentTypes': null,
                          'id': 582,
                          'name': 'periodSeconds',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 532,
                          'src': '11107:13:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        }
                      ],
                      'expression': {
                        'argumentTypes': [
                          {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        ],
                        'expression': {
                          'argumentTypes': null,
                          'expression': {
                            'argumentTypes': null,
                            'id': 579,
                            'name': 'block',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 1376,
                            'src': '11087:5:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_magic_block',
                              'typeString': 'block'
                            }
                          },
                          'id': 580,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'memberName': 'timestamp',
                          'nodeType': 'MemberAccess',
                          'referencedDeclaration': null,
                          'src': '11087:15:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        },
                        'id': 581,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'memberName': 'add',
                        'nodeType': 'MemberAccess',
                        'referencedDeclaration': 898,
                        'src': '11087:19:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$',
                          'typeString': 'function (uint256,uint256) pure returns (uint256)'
                        }
                      },
                      'id': 583,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'kind': 'functionCall',
                      'lValueRequested': false,
                      'names': [],
                      'nodeType': 'FunctionCall',
                      'src': '11087:34:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '11048:73:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'id': 585,
                  'nodeType': 'ExpressionStatement',
                  'src': '11048:73:1'
                },
                {
                  'condition': {
                    'argumentTypes': null,
                    'commonType': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    },
                    'id': 590,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftExpression': {
                      'argumentTypes': null,
                      'id': 586,
                      'name': 'nonce',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 536,
                      'src': '11240:5:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'BinaryOperation',
                    'operator': '>',
                    'rightExpression': {
                      'argumentTypes': null,
                      'baseExpression': {
                        'argumentTypes': null,
                        'id': 587,
                        'name': 'extraNonce',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 91,
                        'src': '11248:10:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_mapping$_t_address_$_t_uint256_$',
                          'typeString': 'mapping(address => uint256)'
                        }
                      },
                      'id': 589,
                      'indexExpression': {
                        'argumentTypes': null,
                        'id': 588,
                        'name': 'from',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 524,
                        'src': '11259:4:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      'isConstant': false,
                      'isLValue': true,
                      'isPure': false,
                      'lValueRequested': false,
                      'nodeType': 'IndexAccess',
                      'src': '11248:16:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '11240:24:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'falseBody': null,
                  'id': 598,
                  'nodeType': 'IfStatement',
                  'src': '11237:75:1',
                  'trueBody': {
                    'id': 597,
                    'nodeType': 'Block',
                    'src': '11265:47:1',
                    'statements': [
                      {
                        'expression': {
                          'argumentTypes': null,
                          'id': 595,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftHandSide': {
                            'argumentTypes': null,
                            'baseExpression': {
                              'argumentTypes': null,
                              'id': 591,
                              'name': 'extraNonce',
                              'nodeType': 'Identifier',
                              'overloadedDeclarations': [],
                              'referencedDeclaration': 91,
                              'src': '11277:10:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_mapping$_t_address_$_t_uint256_$',
                                'typeString': 'mapping(address => uint256)'
                              }
                            },
                            'id': 593,
                            'indexExpression': {
                              'argumentTypes': null,
                              'id': 592,
                              'name': 'from',
                              'nodeType': 'Identifier',
                              'overloadedDeclarations': [],
                              'referencedDeclaration': 524,
                              'src': '11288:4:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_address',
                                'typeString': 'address'
                              }
                            },
                            'isConstant': false,
                            'isLValue': true,
                            'isPure': false,
                            'lValueRequested': true,
                            'nodeType': 'IndexAccess',
                            'src': '11277:16:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'nodeType': 'Assignment',
                          'operator': '=',
                          'rightHandSide': {
                            'argumentTypes': null,
                            'id': 594,
                            'name': 'nonce',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 536,
                            'src': '11296:5:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'src': '11277:24:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        },
                        'id': 596,
                        'nodeType': 'ExpressionStatement',
                        'src': '11277:24:1'
                      }
                    ]
                  }
                },
                {
                  'assignments': [
                    600
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 600,
                      'name': 'startingBalance',
                      'nodeType': 'VariableDeclaration',
                      'scope': 671,
                      'src': '11397:23:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      },
                      'typeName': {
                        'id': 599,
                        'name': 'uint256',
                        'nodeType': 'ElementaryTypeName',
                        'src': '11397:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 607,
                  'initialValue': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 605,
                        'name': 'to',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 526,
                        'src': '11453:2:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      ],
                      'expression': {
                        'argumentTypes': null,
                        'arguments': [
                          {
                            'argumentTypes': null,
                            'id': 602,
                            'name': 'tokenAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 528,
                            'src': '11429:12:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          }
                        ],
                        'expression': {
                          'argumentTypes': [
                            {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          ],
                          'id': 601,
                          'name': 'ERC20',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 1302,
                          'src': '11423:5:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_type$_t_contract$_ERC20_$1302_$',
                            'typeString': 'type(contract ERC20)'
                          }
                        },
                        'id': 603,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'typeConversion',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '11423:19:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_contract$_ERC20_$1302',
                          'typeString': 'contract ERC20'
                        }
                      },
                      'id': 604,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'balanceOf',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 960,
                      'src': '11423:29:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_external_view$_t_address_$returns$_t_uint256_$',
                        'typeString': 'function (address) view external returns (uint256)'
                      }
                    },
                    'id': 606,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '11423:33:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '11397:59:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 612,
                        'name': 'from',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 524,
                        'src': '11499:4:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 613,
                        'name': 'to',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 526,
                        'src': '11504:2:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 614,
                        'name': 'tokenAmount',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 530,
                        'src': '11507:11:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'expression': {
                        'argumentTypes': null,
                        'arguments': [
                          {
                            'argumentTypes': null,
                            'id': 609,
                            'name': 'tokenAddress',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 528,
                            'src': '11472:12:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          }
                        ],
                        'expression': {
                          'argumentTypes': [
                            {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          ],
                          'id': 608,
                          'name': 'ERC20',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 1302,
                          'src': '11466:5:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_type$_t_contract$_ERC20_$1302_$',
                            'typeString': 'type(contract ERC20)'
                          }
                        },
                        'id': 610,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'typeConversion',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '11466:19:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_contract$_ERC20_$1302',
                          'typeString': 'contract ERC20'
                        }
                      },
                      'id': 611,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'transferFrom',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 1049,
                      'src': '11466:32:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$',
                        'typeString': 'function (address,address,uint256) external returns (bool)'
                      }
                    },
                    'id': 615,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '11466:53:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'id': 616,
                  'nodeType': 'ExpressionStatement',
                  'src': '11466:53:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        'id': 628,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'components': [
                            {
                              'argumentTypes': null,
                              'commonType': {
                                'typeIdentifier': 't_uint256',
                                'typeString': 'uint256'
                              },
                              'id': 620,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': false,
                              'lValueRequested': false,
                              'leftExpression': {
                                'argumentTypes': null,
                                'id': 618,
                                'name': 'startingBalance',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 600,
                                'src': '11549:15:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_uint256',
                                  'typeString': 'uint256'
                                }
                              },
                              'nodeType': 'BinaryOperation',
                              'operator': '+',
                              'rightExpression': {
                                'argumentTypes': null,
                                'id': 619,
                                'name': 'tokenAmount',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 530,
                                'src': '11565:11:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_uint256',
                                  'typeString': 'uint256'
                                }
                              },
                              'src': '11549:27:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_uint256',
                                'typeString': 'uint256'
                              }
                            }
                          ],
                          'id': 621,
                          'isConstant': false,
                          'isInlineArray': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'nodeType': 'TupleExpression',
                          'src': '11548:29:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '==',
                        'rightExpression': {
                          'argumentTypes': null,
                          'arguments': [
                            {
                              'argumentTypes': null,
                              'id': 626,
                              'name': 'to',
                              'nodeType': 'Identifier',
                              'overloadedDeclarations': [],
                              'referencedDeclaration': 526,
                              'src': '11611:2:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_address',
                                'typeString': 'address'
                              }
                            }
                          ],
                          'expression': {
                            'argumentTypes': [
                              {
                                'typeIdentifier': 't_address',
                                'typeString': 'address'
                              }
                            ],
                            'expression': {
                              'argumentTypes': null,
                              'arguments': [
                                {
                                  'argumentTypes': null,
                                  'id': 623,
                                  'name': 'tokenAddress',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 528,
                                  'src': '11587:12:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_address',
                                    'typeString': 'address'
                                  }
                                }
                              ],
                              'expression': {
                                'argumentTypes': [
                                  {
                                    'typeIdentifier': 't_address',
                                    'typeString': 'address'
                                  }
                                ],
                                'id': 622,
                                'name': 'ERC20',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 1302,
                                'src': '11581:5:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_type$_t_contract$_ERC20_$1302_$',
                                  'typeString': 'type(contract ERC20)'
                                }
                              },
                              'id': 624,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': false,
                              'kind': 'typeConversion',
                              'lValueRequested': false,
                              'names': [],
                              'nodeType': 'FunctionCall',
                              'src': '11581:19:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_contract$_ERC20_$1302',
                                'typeString': 'contract ERC20'
                              }
                            },
                            'id': 625,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': false,
                            'lValueRequested': false,
                            'memberName': 'balanceOf',
                            'nodeType': 'MemberAccess',
                            'referencedDeclaration': 960,
                            'src': '11581:29:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_function_external_view$_t_address_$returns$_t_uint256_$',
                              'typeString': 'function (address) view external returns (uint256)'
                            }
                          },
                          'id': 627,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'kind': 'functionCall',
                          'lValueRequested': false,
                          'names': [],
                          'nodeType': 'FunctionCall',
                          'src': '11581:33:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        },
                        'src': '11548:66:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '45524332302042616c616e636520646964206e6f74206368616e676520636f72726563746c79',
                        'id': 629,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '11626:40:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_ded71a89e8fc5dbd375e97b6164c08c2ea5d981bb8fdce6588c0434f53d059b7',
                          'typeString': 'literal_string \'ERC20 Balance did not change correctly\''
                        },
                        'value': 'ERC20 Balance did not change correctly'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_ded71a89e8fc5dbd375e97b6164c08c2ea5d981bb8fdce6588c0434f53d059b7',
                          'typeString': 'literal_string \'ERC20 Balance did not change correctly\''
                        }
                      ],
                      'id': 617,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1389,
                        1390
                      ],
                      'referencedDeclaration': 1390,
                      'src': '11529:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 630,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '11529:147:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 631,
                  'nodeType': 'ExpressionStatement',
                  'src': '11529:147:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'arguments': [],
                        'expression': {
                          'argumentTypes': [],
                          'id': 633,
                          'name': 'checkSuccess',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 687,
                          'src': '11706:12:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_function_internal_pure$__$returns$_t_bool_$',
                            'typeString': 'function () pure returns (bool)'
                          }
                        },
                        'id': 634,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'functionCall',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '11706:14:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '537562736372697074696f6e3a3a65786563757465537562736372697074696f6e205472616e7366657246726f6d206661696c6564',
                        'id': 635,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '11732:55:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_22fda53c4160a201b6c6b94643fa6d7525aa15a7f4ec1af5c52f0db455252a28',
                          'typeString': 'literal_string \'Subscription::executeSubscription TransferFrom failed\''
                        },
                        'value': 'Subscription::executeSubscription TransferFrom failed'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_22fda53c4160a201b6c6b94643fa6d7525aa15a7f4ec1af5c52f0db455252a28',
                          'typeString': 'literal_string \'Subscription::executeSubscription TransferFrom failed\''
                        }
                      ],
                      'id': 632,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1389,
                        1390
                      ],
                      'referencedDeclaration': 1390,
                      'src': '11687:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 636,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '11687:112:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 637,
                  'nodeType': 'ExpressionStatement',
                  'src': '11687:112:1'
                },
                {
                  'eventCall': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 639,
                        'name': 'from',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 524,
                        'src': '11849:4:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 640,
                        'name': 'to',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 526,
                        'src': '11855:2:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 641,
                        'name': 'tokenAddress',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 528,
                        'src': '11859:12:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 642,
                        'name': 'tokenAmount',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 530,
                        'src': '11873:11:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 643,
                        'name': 'periodSeconds',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 532,
                        'src': '11886:13:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 644,
                        'name': 'gasPrice',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 534,
                        'src': '11901:8:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 645,
                        'name': 'nonce',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 536,
                        'src': '11911:5:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'id': 638,
                      'name': 'ExecuteSubscription',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 107,
                      'src': '11816:19:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_event_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$',
                        'typeString': 'function (address,address,address,uint256,uint256,uint256,uint256)'
                      }
                    },
                    'id': 646,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '11816:110:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 647,
                  'nodeType': 'EmitStatement',
                  'src': '11811:115:1'
                },
                {
                  'condition': {
                    'argumentTypes': null,
                    'commonType': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    },
                    'id': 650,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftExpression': {
                      'argumentTypes': null,
                      'id': 648,
                      'name': 'gasPrice',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 534,
                      'src': '12146:8:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'BinaryOperation',
                    'operator': '>',
                    'rightExpression': {
                      'argumentTypes': null,
                      'hexValue': '30',
                      'id': 649,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': true,
                      'kind': 'number',
                      'lValueRequested': false,
                      'nodeType': 'Literal',
                      'src': '12157:1:1',
                      'subdenomination': null,
                      'typeDescriptions': {
                        'typeIdentifier': 't_rational_0_by_1',
                        'typeString': 'int_const 0'
                      },
                      'value': '0'
                    },
                    'src': '12146:12:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'falseBody': null,
                  'id': 668,
                  'nodeType': 'IfStatement',
                  'src': '12142:822:1',
                  'trueBody': {
                    'id': 667,
                    'nodeType': 'Block',
                    'src': '12160:804:1',
                    'statements': [
                      {
                        'expression': {
                          'argumentTypes': null,
                          'arguments': [
                            {
                              'argumentTypes': null,
                              'id': 655,
                              'name': 'from',
                              'nodeType': 'Identifier',
                              'overloadedDeclarations': [],
                              'referencedDeclaration': 524,
                              'src': '12772:4:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_address',
                                'typeString': 'address'
                              }
                            },
                            {
                              'argumentTypes': null,
                              'expression': {
                                'argumentTypes': null,
                                'id': 656,
                                'name': 'msg',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 1386,
                                'src': '12778:3:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_magic_message',
                                  'typeString': 'msg'
                                }
                              },
                              'id': 657,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': false,
                              'lValueRequested': false,
                              'memberName': 'sender',
                              'nodeType': 'MemberAccess',
                              'referencedDeclaration': null,
                              'src': '12778:10:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_address_payable',
                                'typeString': 'address payable'
                              }
                            },
                            {
                              'argumentTypes': null,
                              'id': 658,
                              'name': 'gasPrice',
                              'nodeType': 'Identifier',
                              'overloadedDeclarations': [],
                              'referencedDeclaration': 534,
                              'src': '12790:8:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_uint256',
                                'typeString': 'uint256'
                              }
                            }
                          ],
                          'expression': {
                            'argumentTypes': [
                              {
                                'typeIdentifier': 't_address',
                                'typeString': 'address'
                              },
                              {
                                'typeIdentifier': 't_address_payable',
                                'typeString': 'address payable'
                              },
                              {
                                'typeIdentifier': 't_uint256',
                                'typeString': 'uint256'
                              }
                            ],
                            'expression': {
                              'argumentTypes': null,
                              'arguments': [
                                {
                                  'argumentTypes': null,
                                  'id': 652,
                                  'name': 'tokenAddress',
                                  'nodeType': 'Identifier',
                                  'overloadedDeclarations': [],
                                  'referencedDeclaration': 528,
                                  'src': '12745:12:1',
                                  'typeDescriptions': {
                                    'typeIdentifier': 't_address',
                                    'typeString': 'address'
                                  }
                                }
                              ],
                              'expression': {
                                'argumentTypes': [
                                  {
                                    'typeIdentifier': 't_address',
                                    'typeString': 'address'
                                  }
                                ],
                                'id': 651,
                                'name': 'ERC20',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 1302,
                                'src': '12739:5:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_type$_t_contract$_ERC20_$1302_$',
                                  'typeString': 'type(contract ERC20)'
                                }
                              },
                              'id': 653,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': false,
                              'kind': 'typeConversion',
                              'lValueRequested': false,
                              'names': [],
                              'nodeType': 'FunctionCall',
                              'src': '12739:19:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_contract$_ERC20_$1302',
                                'typeString': 'contract ERC20'
                              }
                            },
                            'id': 654,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': false,
                            'lValueRequested': false,
                            'memberName': 'transferFrom',
                            'nodeType': 'MemberAccess',
                            'referencedDeclaration': 1049,
                            'src': '12739:32:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$',
                              'typeString': 'function (address,address,uint256) external returns (bool)'
                            }
                          },
                          'id': 659,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'kind': 'functionCall',
                          'lValueRequested': false,
                          'names': [],
                          'nodeType': 'FunctionCall',
                          'src': '12739:60:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'id': 660,
                        'nodeType': 'ExpressionStatement',
                        'src': '12739:60:1'
                      },
                      {
                        'expression': {
                          'argumentTypes': null,
                          'arguments': [
                            {
                              'argumentTypes': null,
                              'arguments': [],
                              'expression': {
                                'argumentTypes': [],
                                'id': 662,
                                'name': 'checkSuccess',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 687,
                                'src': '12838:12:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_function_internal_pure$__$returns$_t_bool_$',
                                  'typeString': 'function () pure returns (bool)'
                                }
                              },
                              'id': 663,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': false,
                              'kind': 'functionCall',
                              'lValueRequested': false,
                              'names': [],
                              'nodeType': 'FunctionCall',
                              'src': '12838:14:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_bool',
                                'typeString': 'bool'
                              }
                            },
                            {
                              'argumentTypes': null,
                              'hexValue': '537562736372697074696f6e3a3a65786563757465537562736372697074696f6e204661696c656420746f20706179206761732061732066726f6d206163636f756e74',
                              'id': 664,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': true,
                              'kind': 'string',
                              'lValueRequested': false,
                              'nodeType': 'Literal',
                              'src': '12870:69:1',
                              'subdenomination': null,
                              'typeDescriptions': {
                                'typeIdentifier': 't_stringliteral_91dfd8b130e56d88b0bb875283dbd7a93ad5846177fd31c98ad56f2a5bd9d2f7',
                                'typeString': 'literal_string \'Subscription::executeSubscription Failed to pay gas as from account\''
                              },
                              'value': 'Subscription::executeSubscription Failed to pay gas as from account'
                            }
                          ],
                          'expression': {
                            'argumentTypes': [
                              {
                                'typeIdentifier': 't_bool',
                                'typeString': 'bool'
                              },
                              {
                                'typeIdentifier': 't_stringliteral_91dfd8b130e56d88b0bb875283dbd7a93ad5846177fd31c98ad56f2a5bd9d2f7',
                                'typeString': 'literal_string \'Subscription::executeSubscription Failed to pay gas as from account\''
                              }
                            ],
                            'id': 661,
                            'name': 'require',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [
                              1389,
                              1390
                            ],
                            'referencedDeclaration': 1390,
                            'src': '12813:7:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                              'typeString': 'function (bool,string memory) pure'
                            }
                          },
                          'id': 665,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'kind': 'functionCall',
                          'lValueRequested': false,
                          'names': [],
                          'nodeType': 'FunctionCall',
                          'src': '12813:140:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_tuple$__$',
                            'typeString': 'tuple()'
                          }
                        },
                        'id': 666,
                        'nodeType': 'ExpressionStatement',
                        'src': '12813:140:1'
                      }
                    ]
                  }
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'hexValue': '74727565',
                    'id': 669,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': true,
                    'kind': 'bool',
                    'lValueRequested': false,
                    'nodeType': 'Literal',
                    'src': '12981:4:1',
                    'subdenomination': null,
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    },
                    'value': 'true'
                  },
                  'functionReturnParameters': 542,
                  'id': 670,
                  'nodeType': 'Return',
                  'src': '12974:11:1'
                }
              ]
            },
            'documentation': null,
            'id': 672,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'executeSubscription',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 539,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 524,
                  'name': 'from',
                  'nodeType': 'VariableDeclaration',
                  'scope': 672,
                  'src': '9939:12:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 523,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '9939:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 526,
                  'name': 'to',
                  'nodeType': 'VariableDeclaration',
                  'scope': 672,
                  'src': '9978:10:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 525,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '9978:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 528,
                  'name': 'tokenAddress',
                  'nodeType': 'VariableDeclaration',
                  'scope': 672,
                  'src': '10014:20:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 527,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '10014:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 530,
                  'name': 'tokenAmount',
                  'nodeType': 'VariableDeclaration',
                  'scope': 672,
                  'src': '10086:19:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 529,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '10086:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 532,
                  'name': 'periodSeconds',
                  'nodeType': 'VariableDeclaration',
                  'scope': 672,
                  'src': '10156:21:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 531,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '10156:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 534,
                  'name': 'gasPrice',
                  'nodeType': 'VariableDeclaration',
                  'scope': 672,
                  'src': '10228:16:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 533,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '10228:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 536,
                  'name': 'nonce',
                  'nodeType': 'VariableDeclaration',
                  'scope': 672,
                  'src': '10312:13:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 535,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '10312:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 538,
                  'name': 'signature',
                  'nodeType': 'VariableDeclaration',
                  'scope': 672,
                  'src': '10395:22:1',
                  'stateVariable': false,
                  'storageLocation': 'memory',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bytes_memory_ptr',
                    'typeString': 'bytes'
                  },
                  'typeName': {
                    'id': 537,
                    'name': 'bytes',
                    'nodeType': 'ElementaryTypeName',
                    'src': '10395:5:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bytes_storage_ptr',
                      'typeString': 'bytes'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '9929:544:1'
            },
            'returnParameters': {
              'id': 542,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 541,
                  'name': 'success',
                  'nodeType': 'VariableDeclaration',
                  'scope': 672,
                  'src': '10506:12:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bool',
                    'typeString': 'bool'
                  },
                  'typeName': {
                    'id': 540,
                    'name': 'bool',
                    'nodeType': 'ElementaryTypeName',
                    'src': '10506:4:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '10505:14:1'
            },
            'scope': 710,
            'src': '9901:3091:1',
            'stateMutability': 'nonpayable',
            'superFunction': null,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 686,
              'nodeType': 'Block',
              'src': '13492:770:1',
              'statements': [
                {
                  'assignments': [
                    678
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 678,
                      'name': 'returnValue',
                      'nodeType': 'VariableDeclaration',
                      'scope': 686,
                      'src': '13502:19:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      },
                      'typeName': {
                        'id': 677,
                        'name': 'uint256',
                        'nodeType': 'ElementaryTypeName',
                        'src': '13502:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 680,
                  'initialValue': {
                    'argumentTypes': null,
                    'hexValue': '30',
                    'id': 679,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': true,
                    'kind': 'number',
                    'lValueRequested': false,
                    'nodeType': 'Literal',
                    'src': '13524:1:1',
                    'subdenomination': null,
                    'typeDescriptions': {
                      'typeIdentifier': 't_rational_0_by_1',
                      'typeString': 'int_const 0'
                    },
                    'value': '0'
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '13502:23:1'
                },
                {
                  'externalReferences': [
                    {
                      'returnValue': {
                        'declaration': 678,
                        'isOffset': false,
                        'isSlot': false,
                        'src': '13807:11:1',
                        'valueSize': 1
                      }
                    },
                    {
                      'returnValue': {
                        'declaration': 678,
                        'isOffset': false,
                        'isSlot': false,
                        'src': '14084:11:1',
                        'valueSize': 1
                      }
                    }
                  ],
                  'id': 681,
                  'nodeType': 'InlineAssembly',
                  'operations': '{\n    switch returndatasize()\n    case 0x0 {\n        returnValue := 1\n    }\n    case 0x20 {\n        returndatacopy(0x0, 0x0, 0x20)\n        returnValue := mload(0x0)\n    }\n    default {\n    }\n}',
                  'src': '13603:635:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'commonType': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    },
                    'id': 684,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftExpression': {
                      'argumentTypes': null,
                      'id': 682,
                      'name': 'returnValue',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 678,
                      'src': '14239:11:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'BinaryOperation',
                    'operator': '!=',
                    'rightExpression': {
                      'argumentTypes': null,
                      'hexValue': '30',
                      'id': 683,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': true,
                      'kind': 'number',
                      'lValueRequested': false,
                      'nodeType': 'Literal',
                      'src': '14254:1:1',
                      'subdenomination': null,
                      'typeDescriptions': {
                        'typeIdentifier': 't_rational_0_by_1',
                        'typeString': 'int_const 0'
                      },
                      'value': '0'
                    },
                    'src': '14239:16:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'functionReturnParameters': 676,
                  'id': 685,
                  'nodeType': 'Return',
                  'src': '14232:23:1'
                }
              ]
            },
            'documentation': 'Checks the return value of the previous function. Returns true if the previous function\nfunction returned 32 non-zero bytes or returned zero bytes.',
            'id': 687,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'checkSuccess',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 673,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '13428:7:1'
            },
            'returnParameters': {
              'id': 676,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 675,
                  'name': '',
                  'nodeType': 'VariableDeclaration',
                  'scope': 687,
                  'src': '13482:4:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bool',
                    'typeString': 'bool'
                  },
                  'typeName': {
                    'id': 674,
                    'name': 'bool',
                    'nodeType': 'ElementaryTypeName',
                    'src': '13482:4:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '13481:6:1'
            },
            'scope': 710,
            'src': '13407:855:1',
            'stateMutability': 'pure',
            'superFunction': null,
            'visibility': 'private'
          },
          {
            'body': {
              'id': 701,
              'nodeType': 'Block',
              'src': '14436:68:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        },
                        'id': 694,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'expression': {
                            'argumentTypes': null,
                            'id': 691,
                            'name': 'msg',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 1386,
                            'src': '14452:3:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_magic_message',
                              'typeString': 'msg'
                            }
                          },
                          'id': 692,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'memberName': 'sender',
                          'nodeType': 'MemberAccess',
                          'referencedDeclaration': null,
                          'src': '14452:10:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address_payable',
                            'typeString': 'address payable'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '==',
                        'rightExpression': {
                          'argumentTypes': null,
                          'id': 693,
                          'name': 'owner',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 69,
                          'src': '14464:5:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address_payable',
                            'typeString': 'address payable'
                          }
                        },
                        'src': '14452:17:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      ],
                      'id': 690,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1389,
                        1390
                      ],
                      'referencedDeclaration': 1389,
                      'src': '14444:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$returns$__$',
                        'typeString': 'function (bool) pure'
                      }
                    },
                    'id': 695,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '14444:26:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 696,
                  'nodeType': 'ExpressionStatement',
                  'src': '14444:26:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 698,
                        'name': 'owner',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 69,
                        'src': '14491:5:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        }
                      ],
                      'id': 697,
                      'name': 'selfdestruct',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 1394,
                      'src': '14478:12:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_selfdestruct_nonpayable$_t_address_payable_$returns$__$',
                        'typeString': 'function (address payable)'
                      }
                    },
                    'id': 699,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '14478:19:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 700,
                  'nodeType': 'ExpressionStatement',
                  'src': '14478:19:1'
                }
              ]
            },
            'documentation': null,
            'id': 702,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'endContract',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 688,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '14412:2:1'
            },
            'returnParameters': {
              'id': 689,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '14436:0:1'
            },
            'scope': 710,
            'src': '14392:112:1',
            'stateMutability': 'nonpayable',
            'superFunction': null,
            'visibility': 'external'
          },
          {
            'body': {
              'id': 708,
              'nodeType': 'Block',
              'src': '14610:25:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [],
                    'expression': {
                      'argumentTypes': [],
                      'id': 705,
                      'name': 'revert',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1391,
                        1392
                      ],
                      'referencedDeclaration': 1391,
                      'src': '14619:6:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_revert_pure$__$returns$__$',
                        'typeString': 'function () pure'
                      }
                    },
                    'id': 706,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '14619:9:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 707,
                  'nodeType': 'ExpressionStatement',
                  'src': '14619:9:1'
                }
              ]
            },
            'documentation': null,
            'id': 709,
            'implemented': true,
            'kind': 'fallback',
            'modifiers': [],
            'name': '',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 703,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '14590:2:1'
            },
            'returnParameters': {
              'id': 704,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '14610:0:1'
            },
            'scope': 710,
            'src': '14581:54:1',
            'stateMutability': 'payable',
            'superFunction': null,
            'visibility': 'external'
          }
        ],
        'scope': 711,
        'src': '1091:13546:1'
      }
    ],
    'src': '0:14638:1'
  },
  'compiler': {
    'name': 'solc',
    'version': '0.5.2+commit.1df8f40c.Emscripten.clang'
  },
  'networks': {},
  'schemaVersion': '3.0.6',
  'updatedAt': '2019-05-22T12:57:22.984Z',
  'devdoc': {
    'methods': {}
  },
  'userdoc': {
    'methods': {}
  }
};
