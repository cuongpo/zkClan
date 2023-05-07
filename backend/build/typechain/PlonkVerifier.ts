/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface PlonkVerifierInterface extends utils.Interface {
  contractName: "PlonkVerifier";
  functions: {
    "verifyProof(bytes,uint256[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "verifyProof",
    values: [BytesLike, BigNumberish[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "verifyProof",
    data: BytesLike
  ): Result;

  events: {};
}

export interface PlonkVerifier extends BaseContract {
  contractName: "PlonkVerifier";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PlonkVerifierInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    verifyProof(
      proof: BytesLike,
      pubSignals: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  verifyProof(
    proof: BytesLike,
    pubSignals: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    verifyProof(
      proof: BytesLike,
      pubSignals: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    verifyProof(
      proof: BytesLike,
      pubSignals: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    verifyProof(
      proof: BytesLike,
      pubSignals: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
