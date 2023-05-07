/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MultiSig, MultiSigInterface } from "../MultiSig";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_owners",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "approvalCount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
        indexed: false,
        internalType: "uint256",
        name: "txId",
        type: "uint256",
      },
    ],
    name: "ApproveTx",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "txId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "CreateTx",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "txId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ExecuteTx",
    type: "event",
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
        indexed: false,
        internalType: "uint256",
        name: "txId",
        type: "uint256",
      },
    ],
    name: "RemoveApprovalTx",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_txId",
        type: "uint256",
      },
    ],
    name: "approveTx",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "createTx",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_txId",
        type: "uint256",
      },
    ],
    name: "executeTx",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwner",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_txId",
        type: "uint256",
      },
    ],
    name: "getTransactionDetails",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "txId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "approvedCount",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "executed",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct MultiSig.Transaction",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_txId",
        type: "uint256",
      },
    ],
    name: "revokeConfirmation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "transactions",
    outputs: [
      {
        internalType: "uint256",
        name: "txId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "approvedCount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "executed",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200269e3803806200269e833981810160405281019062000037919062000496565b60008251116200007e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200007590620005d0565b60405180910390fd5b60008114158015620000905750815181105b620000d2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000c990620005f2565b60405180910390fd5b60005b8251811015620003b657600073ffffffffffffffffffffffffffffffffffffffff1683828151811062000131577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff16141562000193576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200018a906200058c565b60405180910390fd5b60016000848381518110620001d1577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161562000264576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200025b90620005ae565b60405180910390fd5b6001806000858481518110620002a3577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600483828151811062000338577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101519080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508080620003ad90620006f1565b915050620000d5565b5080600081905550505062000886565b6000620003dd620003d7846200063d565b62000614565b90508083825260208201905082856020860282011115620003fd57600080fd5b60005b858110156200043157816200041688826200043b565b84526020840193506020830192505060018101905062000400565b5050509392505050565b6000815190506200044c8162000852565b92915050565b600082601f8301126200046457600080fd5b815162000476848260208601620003c6565b91505092915050565b60008151905062000490816200086c565b92915050565b60008060408385031215620004aa57600080fd5b600083015167ffffffffffffffff811115620004c557600080fd5b620004d38582860162000452565b9250506020620004e6858286016200047f565b9150509250929050565b6000620004ff600f836200066c565b91506200050c82620007ae565b602082019050919050565b6000620005266010836200066c565b91506200053382620007d7565b602082019050919050565b60006200054d600f836200066c565b91506200055a8262000800565b602082019050919050565b600062000574600f836200066c565b9150620005818262000829565b602082019050919050565b60006020820190508181036000830152620005a781620004f0565b9050919050565b60006020820190508181036000830152620005c98162000517565b9050919050565b60006020820190508181036000830152620005eb816200053e565b9050919050565b600060208201905081810360008301526200060d8162000565565b9050919050565b60006200062062000633565b90506200062e8282620006bb565b919050565b6000604051905090565b600067ffffffffffffffff8211156200065b576200065a6200076e565b5b602082029050602081019050919050565b600082825260208201905092915050565b60006200068a8262000691565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b620006c6826200079d565b810181811067ffffffffffffffff82111715620006e857620006e76200076e565b5b80604052505050565b6000620006fe82620006b1565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156200073457620007336200073f565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f496e76616c696420616464726573730000000000000000000000000000000000600082015250565b7f4f776e6572206e6f7420756e6971756500000000000000000000000000000000600082015250565b7f6f776e6572732072657175697265640000000000000000000000000000000000600082015250565b7f696e636f727265637420636f756e740000000000000000000000000000000000600082015250565b6200085d816200067d565b81146200086957600080fd5b50565b6200087781620006b1565b81146200088357600080fd5b50565b611e0880620008966000396000f3fe6080604052600436106100745760003560e01c80633b0572d61161004e5780633b0572d61461015f57806354b5fe8014610188578063893d20e8146101b15780639ace38c2146101dc576100cb565b80630fa683d3146100d05780631087393a1461010d57806320ea8d8614610136576100cb565b366100cb573373ffffffffffffffffffffffffffffffffffffffff167f90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a1534476040516100c19291906118a0565b60405180910390a2005b600080fd5b3480156100dc57600080fd5b506100f760048036038101906100f2919061135c565b61021e565b6040516101049190611863565b60405180910390f35b34801561011957600080fd5b50610134600480360381019061012f919061135c565b6103e5565b005b34801561014257600080fd5b5061015d6004803603810190610158919061135c565b610718565b005b34801561016b57600080fd5b50610186600480360381019061018191906112f5565b6109df565b005b34801561019457600080fd5b506101af60048036038101906101aa919061135c565b610c24565b005b3480156101bd57600080fd5b506101c6610fe3565b6040516101d39190611721565b60405180910390f35b3480156101e857600080fd5b5061020360048036038101906101fe919061135c565b611071565b604051610215969594939291906118c9565b60405180910390f35b610226611172565b600082101561026a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610261906117a3565b60405180910390fd5b600382815481106102a4577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002090600602016040518060c001604052908160008201548152602001600182015481526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600382015481526020016004820160009054906101000a900460ff1615151515815260200160058201805461035c90611b32565b80601f016020809104026020016040519081016040528092919081815260200182805461038890611b32565b80156103d55780601f106103aa576101008083540402835291602001916103d5565b820191906000526020600020905b8154815290600101906020018083116103b857829003601f168201915b5050505050815250509050919050565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610471576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046890611763565b60405180910390fd5b8060038054905081106104b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b090611823565b60405180910390fd5b81600381815481106104f4577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906006020160040160009054906101000a900460ff1615610553576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161054a90611743565b60405180910390fd5b826002600082815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156105f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e9906117c3565b60405180910390fd5b60006003858154811061062e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060060201905060018160030160008282546106539190611a1e565b9250508190555060016002600087815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055503373ffffffffffffffffffffffffffffffffffffffff167f945242f7e1728d98aaa75300f98846a7cd4a996e7a22a4e23963ffaf0210e64e866040516107099190611885565b60405180910390a25050505050565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166107a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079b90611763565b60405180910390fd5b8060038054905081106107ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107e390611823565b60405180910390fd5b8160038181548110610827577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906006020160040160009054906101000a900460ff1615610886576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161087d90611743565b60405180910390fd5b6002600084815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610923576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161091a90611803565b60405180910390fd5b60006003848154811061095f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060060201905060018160030160008282546109849190611a74565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167f8842a5ed0150999353371b5f712941504e982a4844f9cf146c106699dd916747856040516109d19190611885565b60405180910390a250505050565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610a6b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a6290611763565b60405180910390fd5b60008211610aae576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aa590611843565b60405180910390fd5b6000600380549050905060036040518060c001604052808381526020018581526020018673ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600015158152602001848152509080600181540180825580915050600190039060005260206000209060060201600090919091909150600082015181600001556020820151816001015560408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816003015560808201518160040160006101000a81548160ff02191690831515021790555060a0820151816005019080519060200190610bcb9291906111c0565b5050508373ffffffffffffffffffffffffffffffffffffffff167fe2729d1f01b5c5529f9625c76e269b87e099efc2b879bb046dc5e93a400e108f8285604051610c169291906118a0565b60405180910390a250505050565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610cb0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ca790611763565b60405180910390fd5b806003805490508110610cf8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cef90611823565b60405180910390fd5b8160038181548110610d33577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906006020160040160009054906101000a900460ff1615610d92576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d8990611743565b60405180910390fd5b60005460038481548110610dcf577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060060201600301541015610e22576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e1990611783565b60405180910390fd5b600060038481548110610e5e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060060201905060018160040160006101000a81548160ff02191690831515021790555060008160020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16826001015483600501604051610ede919061170a565b60006040518083038185875af1925050503d8060008114610f1b576040519150601f19603f3d011682016040523d82523d6000602084013e610f20565b606091505b5050905080610f64576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f5b906117e3565b60405180910390fd5b8160020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f11f6319571f53171c59c1c32423056077fa0a94da5aae9ac97f68871e48a1b14868460010154604051610fd49291906118a0565b60405180910390a25050505050565b6060600480548060200260200160405190810160405280929190818152602001828054801561106757602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831161101d575b5050505050905090565b6003818154811061108157600080fd5b90600052602060002090600602016000915090508060000154908060010154908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060030154908060040160009054906101000a900460ff16908060050180546110ef90611b32565b80601f016020809104026020016040519081016040528092919081815260200182805461111b90611b32565b80156111685780601f1061113d57610100808354040283529160200191611168565b820191906000526020600020905b81548152906001019060200180831161114b57829003601f168201915b5050505050905086565b6040518060c001604052806000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600015158152602001606081525090565b8280546111cc90611b32565b90600052602060002090601f0160209004810192826111ee5760008555611235565b82601f1061120757805160ff1916838001178555611235565b82800160010185558215611235579182015b82811115611234578251825591602001919060010190611219565b5b5090506112429190611246565b5090565b5b8082111561125f576000816000905550600101611247565b5090565b600061127661127184611956565b611931565b90508281526020810184848401111561128e57600080fd5b611299848285611af0565b509392505050565b6000813590506112b081611da4565b92915050565b600082601f8301126112c757600080fd5b81356112d7848260208601611263565b91505092915050565b6000813590506112ef81611dbb565b92915050565b60008060006060848603121561130a57600080fd5b6000611318868287016112a1565b9350506020611329868287016112e0565b925050604084013567ffffffffffffffff81111561134657600080fd5b611352868287016112b6565b9150509250925092565b60006020828403121561136e57600080fd5b600061137c848285016112e0565b91505092915050565b6000611391838361139d565b60208301905092915050565b6113a681611aa8565b82525050565b6113b581611aa8565b82525050565b60006113c6826119ac565b6113d081856119cf565b93506113db83611987565b8060005b8381101561140c5781516113f38882611385565b97506113fe836119c2565b9250506001810190506113df565b5085935050505092915050565b61142281611aba565b82525050565b61143181611aba565b82525050565b6000611442826119b7565b61144c81856119e0565b935061145c818560208601611aff565b61146581611c22565b840191505092915050565b600061147b826119b7565b61148581856119f1565b9350611495818560208601611aff565b61149e81611c22565b840191505092915050565b600081546114b681611b32565b6114c08186611a02565b945060018216600081146114db57600181146114ec5761151f565b60ff1983168652818601935061151f565b6114f585611997565b60005b83811015611517578154818901526001820191506020810190506114f8565b838801955050505b50505092915050565b6000611535600c83611a0d565b915061154082611c33565b602082019050919050565b6000611558601283611a0d565b915061156382611c5c565b602082019050919050565b600061157b601783611a0d565b915061158682611c85565b602082019050919050565b600061159e600c83611a0d565b91506115a982611cae565b602082019050919050565b60006115c1600e83611a0d565b91506115cc82611cd7565b602082019050919050565b60006115e4600983611a0d565b91506115ef82611d00565b602082019050919050565b6000611607601c83611a0d565b915061161282611d29565b602082019050919050565b600061162a600b83611a0d565b915061163582611d52565b602082019050919050565b600061164d601283611a0d565b915061165882611d7b565b602082019050919050565b600060c08301600083015161167b60008601826116ec565b50602083015161168e60208601826116ec565b5060408301516116a1604086018261139d565b5060608301516116b460608601826116ec565b5060808301516116c76080860182611419565b5060a083015184820360a08601526116df8282611437565b9150508091505092915050565b6116f581611ae6565b82525050565b61170481611ae6565b82525050565b600061171682846114a9565b915081905092915050565b6000602082019050818103600083015261173b81846113bb565b905092915050565b6000602082019050818103600083015261175c81611528565b9050919050565b6000602082019050818103600083015261177c8161154b565b9050919050565b6000602082019050818103600083015261179c8161156e565b9050919050565b600060208201905081810360008301526117bc81611591565b9050919050565b600060208201905081810360008301526117dc816115b4565b9050919050565b600060208201905081810360008301526117fc816115d7565b9050919050565b6000602082019050818103600083015261181c816115fa565b9050919050565b6000602082019050818103600083015261183c8161161d565b9050919050565b6000602082019050818103600083015261185c81611640565b9050919050565b6000602082019050818103600083015261187d8184611663565b905092915050565b600060208201905061189a60008301846116fb565b92915050565b60006040820190506118b560008301856116fb565b6118c260208301846116fb565b9392505050565b600060c0820190506118de60008301896116fb565b6118eb60208301886116fb565b6118f860408301876113ac565b61190560608301866116fb565b6119126080830185611428565b81810360a08301526119248184611470565b9050979650505050505050565b600061193b61194c565b90506119478282611b64565b919050565b6000604051905090565b600067ffffffffffffffff82111561197157611970611bf3565b5b61197a82611c22565b9050602081019050919050565b6000819050602082019050919050565b60008190508160005260206000209050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b6000611a2982611ae6565b9150611a3483611ae6565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611a6957611a68611b95565b5b828201905092915050565b6000611a7f82611ae6565b9150611a8a83611ae6565b925082821015611a9d57611a9c611b95565b5b828203905092915050565b6000611ab382611ac6565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015611b1d578082015181840152602081019050611b02565b83811115611b2c576000848401525b50505050565b60006002820490506001821680611b4a57607f821691505b60208210811415611b5e57611b5d611bc4565b5b50919050565b611b6d82611c22565b810181811067ffffffffffffffff82111715611b8c57611b8b611bf3565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4e6f742065786563757465640000000000000000000000000000000000000000600082015250565b7f4e6f7420612076616c6964206f776e65722e0000000000000000000000000000600082015250565b7f417070726f76616c20636f756e74206e6f74206d65742e000000000000000000600082015250565b7f696e76616c696420747849640000000000000000000000000000000000000000600082015250565b7f4e6f7420636f6e6669726d65642e000000000000000000000000000000000000600082015250565b7f7478206661696c65640000000000000000000000000000000000000000000000600082015250565b7f547820697320616c7265616479206e6f7420636f6e6669726d65642e00000000600082015250565b7f496e766c69642074784964000000000000000000000000000000000000000000600082015250565b7f616d6f756e742063616e6e6f7420626520300000000000000000000000000000600082015250565b611dad81611aa8565b8114611db857600080fd5b50565b611dc481611ae6565b8114611dcf57600080fd5b5056fea26469706673582212200deb2fd173e190bef325af5c975708b527198066e7078cfca61b4a8010f547de64736f6c63430008040033";

type MultiSigConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MultiSigConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MultiSig__factory extends ContractFactory {
  constructor(...args: MultiSigConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MultiSig";
  }

  deploy(
    _owners: string[],
    approvalCount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MultiSig> {
    return super.deploy(
      _owners,
      approvalCount,
      overrides || {}
    ) as Promise<MultiSig>;
  }
  getDeployTransaction(
    _owners: string[],
    approvalCount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owners, approvalCount, overrides || {});
  }
  attach(address: string): MultiSig {
    return super.attach(address) as MultiSig;
  }
  connect(signer: Signer): MultiSig__factory {
    return super.connect(signer) as MultiSig__factory;
  }
  static readonly contractName: "MultiSig";
  public readonly contractName: "MultiSig";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MultiSigInterface {
    return new utils.Interface(_abi) as MultiSigInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MultiSig {
    return new Contract(address, _abi, signerOrProvider) as MultiSig;
  }
}