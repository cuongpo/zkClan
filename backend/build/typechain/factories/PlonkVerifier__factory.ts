/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PlonkVerifier, PlonkVerifierInterface } from "../PlonkVerifier";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "proof",
        type: "bytes",
      },
      {
        internalType: "uint256[]",
        name: "pubSignals",
        type: "uint256[]",
      },
    ],
    name: "verifyProof",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611d21806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80631e8e1e1314610030575b600080fd5b61004a60048036038101906100459190611b26565b610060565b6040516100579190611ba1565b60405180910390f35b60006119a9565b600080600184846000805b821561009c5782840591508482028603905084955080945082820284039050829350809250610072565b60018411156100aa57600080fd5b60008612156100b95788860195505b85965050505050505092915050565b60405181602084028301815160208301925060005b82841015610120578185527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018451830991506020850194506020840193506100dd565b61014a7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000183610067565b91506020850394506020840393508592505b828411156101c6577f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018551830990507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000184518309915080845260208503945060208403935061015c565b81845250505050505050565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018110610203576000805260206000f35b50565b61032081511461021a576000805260206000f35b6102286102608201516101d2565b6102366102808201516101d2565b6102446102a08201516101d2565b6102526102c08201516101d2565b6102606102e08201516101d2565b61026e6103008201516101d2565b61027c6103208201516101d2565b50565b6000807f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160c060208501200690508060208501527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016020808601200660408501527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001604060e08501200660008501527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160c06101208501200691508160608501527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000182820960a08501527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000182830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000182830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000182830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000182830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000182830991508160808501527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000180600184030106915081610260850152816102808501527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160e0610260850120068060c08601527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181820992508260e08601527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018184099250826101008601527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018184099250826101208601527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018184099250826101408601527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018184099250826101608601527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160806101e0860120066101808601525050505050565b60017f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001807f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018360608601510301066020096102a08301527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000017f09c532c6306b93d29678200d47c0b2a99c18d51b838eeb1d3eed4c533bb512d0820990507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001807f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018360608601510301066020096102c08301526106ad600361028084016100c8565b610260820151600191507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001816102a0850151096102a08401527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000017f09c532c6306b93d29678200d47c0b2a99c18d51b838eeb1d3eed4c533bb512d0830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000180826102c08601510983096102c0840152505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001807f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160208601516102a0860151098303010690507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001807f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160408601516102c086015109830301069050806101a0830152505050565b60008060007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016101a08601516103208601510892507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160208601516102c08601510991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001610260850151830891507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016040860151830891507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160208601516102e08601510990507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001610280850151820890507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016040860151820890507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160408601516102a08601510890507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001610300850151830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016000860151830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160008601516102a08701510990507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016000860151820990507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181830891507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001827f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018501030692507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000161028086015184099250826101c08601525050505050565b81518152602082015160208201525050565b6040518151815260208201516020820152825160408201526020830151606082015260408260808360066107d05a03fa80610b7a576000805260206000f35b50505050565b6000604051835181526020840151602082015284604082015260408160608360076107d05a03fa915081610bb8576000805260206000f35b825160408201526020830151606082015260408360808360066107d05a03fa915081610be8576000805260206000f35b5050505050565b600060405183815284602082015285604082015260408160608360076107d05a03fa915081610c22576000805260206000f35b825160408201526020830151606082015260408360808360066107d05a03fa915081610c52576000805260206000f35b505050505050565b600060405183815284602082015285604082015260408360608360076107d05a03fa915081610c8d576000805260206000f35b505050505050565b6101e08201610ca86101e0830182610b29565b610cbc610180840151610220840183610b80565b505050565b60008061022084017f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160c0860151610260860151099250610d44837f1e06c822d85e0bc64ab190e0bb62d1874185f7d8a6c9856d357fa1a36d6541907f2aca743b2c0651ec936c1284b6f81f2e193207a28c3ee6751c1d2aa54f95554884610c5a565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000161028085015184099250610dbb837f0498fdd9cd52062d978851ae9b66f8de51632ce503c3f46927d3cd3b7b2227807f16970a6c7b79989674f5a1a681aa8696bb8d48489746e132b13edc9334f6eab784610bef565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160c0860151610280860151099250610e36837f0ed86b3548dd887cbcc23dfd09275661b14e9fb6d0dedc78ddbc4acd8c77a2027f1defd71480b3bcf969a07cbf0793daa2dfbddfc74bf9371f4b1d998b9bfee0c384610bef565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160c08601516102a0860151099250610eb1837f2ea32beae116f1ed08edaa94be64820f3d470bf4cd641abfcdb9c37677f6b01c7f164f974310403002b95454daa9a93d9a52dec126fc3bae4046d55c154d135ddd84610bef565b60c08501519250610f03837f23db96b01f2bf374dee93a188810dfe76ca8c70ebce3da7619784986359904107ef672c5205661702754575436c87e32717ab6e4e01128a87d5ca4375b0f1a9084610bef565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160a08601516102608601510892507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016040860151840892507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160a086015160020991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001610280850151830891507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016040860151830891507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000182840992507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160a086015160030991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016102a0850151830891507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016040860151830891507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000182840992507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016000860151840992507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160c0860151840992507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160008601516102a08701510991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016000860151830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160c0860151830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000182840892507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001610180860151840892506111de8360e0860183610b80565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016102c085015160208701510992507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001610260850151840892507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016040860151840892507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016102e085015160208701510991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001610280850151830891507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016040860151830891507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000182840992507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016000860151840992507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160c0860151840992507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016020860151840992507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001610300850151840992507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001837f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000103069250611448837f2d5fcb30bd97c99cd847b6ad4da6e98888a5d8fe76bb1d61212e121faeeb6a7b7f1c34d67dd729197e4becbebc93048da63c4b0b5fd4d376b306ed965590145f4984610bef565b611456610120850182610b3b565b6080850151925061146c83610160860183610b80565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000183840992506114a1836101a0860183610b80565b6114b360e08601516020860183610b80565b6114c66101008601516060860183610b80565b6114d961012086015160a0860183610b80565b61152a6101408601517f067dcb4580cb5f04b6767ccd1b847130262ff122e6ae409b1a204c24a090e8687f28d83a032ca691aba02b8c43de3f011d0c1455dea4997938773a6896f1d7a60b84610bef565b61157b6101608601517f1e35aaed0a1b654ab0f81c31817147e37ef4509cd74cf683df2dd7df53c70d567f23bdc2b0a89579fe6396118c881e79b83840ba7050e8c7b7f8695aa000367f9084610bef565b6101c085015192507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018060c087015161032087015109840892507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018060e087015161026087015109840892507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018061010087015161028087015109840892507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001806101208701516102a087015109840892507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001806101408701516102c087015109840892507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001806101608701516102e087015109840892507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018061018087015161030087015109840892507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001837f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000010306925061173b836002600184610bef565b60608501519250611751836101e0860183610b80565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160608601516101808701510992507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000017f09c532c6306b93d29678200d47c0b2a99c18d51b838eeb1d3eed4c533bb512d0840992506117d583610220860183610b80565b5050505050565b60006040516101e0830151815260206101e08401015160208201527f26186a2d65ee4d2f9c9a5b91f86597d35f192cd120caf7e935d8443d1938e23d60408201527f30441fd1b5d3370482c42152a8899027716989a6996c2535bc9f7fee8aaef79e60608201527f1970ea81dd6992adfbc571effb03503adbbb6a857f578403c6c40e22d65b3c0260808201527f054793348f12c0cf5622c340573cb277586319de359ab9389778f689786b1e4860a082015261022083015160c08201526020610220840101517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47817f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47030690508060e08301527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c26101008301527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed6101208301527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b6101408301527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa6101608301526020826101808460086107d05a03fa825181169350505050919050565b6040516102e081016040526119bd84610206565b6119c7818561027f565b6119d0816105ac565b6119da8382610763565b6119e4818561081b565b6119ee8185610c95565b6119f88185610cc1565b611a01816117dc565b6102e082036040528060005260206000f35b6000611a26611a2184611be1565b611bbc565b90508083825260208201905082856020860282011115611a4557600080fd5b60005b85811015611a755781611a5b8882611b11565b845260208401935060208301925050600181019050611a48565b5050509392505050565b6000611a92611a8d84611c0d565b611bbc565b905082815260208101848484011115611aaa57600080fd5b611ab5848285611c54565b509392505050565b600082601f830112611ace57600080fd5b8135611ade848260208601611a13565b91505092915050565b600082601f830112611af857600080fd5b8135611b08848260208601611a7f565b91505092915050565b600081359050611b2081611cd4565b92915050565b60008060408385031215611b3957600080fd5b600083013567ffffffffffffffff811115611b5357600080fd5b611b5f85828601611ae7565b925050602083013567ffffffffffffffff811115611b7c57600080fd5b611b8885828601611abd565b9150509250929050565b611b9b81611c3e565b82525050565b6000602082019050611bb66000830184611b92565b92915050565b6000611bc6611bd7565b9050611bd28282611c63565b919050565b6000604051905090565b600067ffffffffffffffff821115611bfc57611bfb611c94565b5b602082029050602081019050919050565b600067ffffffffffffffff821115611c2857611c27611c94565b5b611c3182611cc3565b9050602081019050919050565b60008115159050919050565b6000819050919050565b82818337600083830152505050565b611c6c82611cc3565b810181811067ffffffffffffffff82111715611c8b57611c8a611c94565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b611cdd81611c4a565b8114611ce857600080fd5b5056fea26469706673582212203691e743d0cf72789d45cc798b47ee37eb1f9fce43776a394b9c4ecb064b5c0164736f6c63430008040033";

type PlonkVerifierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PlonkVerifierConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PlonkVerifier__factory extends ContractFactory {
  constructor(...args: PlonkVerifierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "PlonkVerifier";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PlonkVerifier> {
    return super.deploy(overrides || {}) as Promise<PlonkVerifier>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PlonkVerifier {
    return super.attach(address) as PlonkVerifier;
  }
  connect(signer: Signer): PlonkVerifier__factory {
    return super.connect(signer) as PlonkVerifier__factory;
  }
  static readonly contractName: "PlonkVerifier";
  public readonly contractName: "PlonkVerifier";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PlonkVerifierInterface {
    return new utils.Interface(_abi) as PlonkVerifierInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PlonkVerifier {
    return new Contract(address, _abi, signerOrProvider) as PlonkVerifier;
  }
}
