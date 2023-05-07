/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export declare namespace MultiSig {
  export type TransactionStruct = {
    txId: BigNumberish;
    amount: BigNumberish;
    to: string;
    approvedCount: BigNumberish;
    executed: boolean;
    data: BytesLike;
  };

  export type TransactionStructOutput = [
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    boolean,
    string
  ] & {
    txId: BigNumber;
    amount: BigNumber;
    to: string;
    approvedCount: BigNumber;
    executed: boolean;
    data: string;
  };
}

export interface MultiSigInterface extends utils.Interface {
  contractName: "MultiSig";
  functions: {
    "approveTx(uint256)": FunctionFragment;
    "createTx(address,uint256,bytes)": FunctionFragment;
    "executeTx(uint256)": FunctionFragment;
    "getOwner()": FunctionFragment;
    "getTransactionDetails(uint256)": FunctionFragment;
    "revokeConfirmation(uint256)": FunctionFragment;
    "transactions(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "approveTx",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createTx",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "executeTx",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getOwner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getTransactionDetails",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeConfirmation",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transactions",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "approveTx", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "createTx", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "executeTx", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTransactionDetails",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revokeConfirmation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transactions",
    data: BytesLike
  ): Result;

  events: {
    "ApproveTx(address,uint256)": EventFragment;
    "CreateTx(address,uint256,uint256)": EventFragment;
    "Deposit(address,uint256,uint256)": EventFragment;
    "ExecuteTx(address,uint256,uint256)": EventFragment;
    "RemoveApprovalTx(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ApproveTx"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CreateTx"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExecuteTx"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemoveApprovalTx"): EventFragment;
}

export type ApproveTxEvent = TypedEvent<
  [string, BigNumber],
  { owner: string; txId: BigNumber }
>;

export type ApproveTxEventFilter = TypedEventFilter<ApproveTxEvent>;

export type CreateTxEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { to: string; txId: BigNumber; amount: BigNumber }
>;

export type CreateTxEventFilter = TypedEventFilter<CreateTxEvent>;

export type DepositEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { sender: string; amount: BigNumber; balance: BigNumber }
>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export type ExecuteTxEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { to: string; txId: BigNumber; amount: BigNumber }
>;

export type ExecuteTxEventFilter = TypedEventFilter<ExecuteTxEvent>;

export type RemoveApprovalTxEvent = TypedEvent<
  [string, BigNumber],
  { owner: string; txId: BigNumber }
>;

export type RemoveApprovalTxEventFilter =
  TypedEventFilter<RemoveApprovalTxEvent>;

export interface MultiSig extends BaseContract {
  contractName: "MultiSig";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MultiSigInterface;

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
    approveTx(
      _txId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createTx(
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    executeTx(
      _txId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getOwner(overrides?: CallOverrides): Promise<[string[]]>;

    getTransactionDetails(
      _txId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[MultiSig.TransactionStructOutput]>;

    revokeConfirmation(
      _txId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transactions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, BigNumber, boolean, string] & {
        txId: BigNumber;
        amount: BigNumber;
        to: string;
        approvedCount: BigNumber;
        executed: boolean;
        data: string;
      }
    >;
  };

  approveTx(
    _txId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createTx(
    _to: string,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  executeTx(
    _txId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getOwner(overrides?: CallOverrides): Promise<string[]>;

  getTransactionDetails(
    _txId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<MultiSig.TransactionStructOutput>;

  revokeConfirmation(
    _txId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transactions(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, string, BigNumber, boolean, string] & {
      txId: BigNumber;
      amount: BigNumber;
      to: string;
      approvedCount: BigNumber;
      executed: boolean;
      data: string;
    }
  >;

  callStatic: {
    approveTx(_txId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    createTx(
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    executeTx(_txId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    getOwner(overrides?: CallOverrides): Promise<string[]>;

    getTransactionDetails(
      _txId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<MultiSig.TransactionStructOutput>;

    revokeConfirmation(
      _txId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transactions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, BigNumber, boolean, string] & {
        txId: BigNumber;
        amount: BigNumber;
        to: string;
        approvedCount: BigNumber;
        executed: boolean;
        data: string;
      }
    >;
  };

  filters: {
    "ApproveTx(address,uint256)"(
      owner?: string | null,
      txId?: null
    ): ApproveTxEventFilter;
    ApproveTx(owner?: string | null, txId?: null): ApproveTxEventFilter;

    "CreateTx(address,uint256,uint256)"(
      to?: string | null,
      txId?: null,
      amount?: null
    ): CreateTxEventFilter;
    CreateTx(
      to?: string | null,
      txId?: null,
      amount?: null
    ): CreateTxEventFilter;

    "Deposit(address,uint256,uint256)"(
      sender?: string | null,
      amount?: null,
      balance?: null
    ): DepositEventFilter;
    Deposit(
      sender?: string | null,
      amount?: null,
      balance?: null
    ): DepositEventFilter;

    "ExecuteTx(address,uint256,uint256)"(
      to?: string | null,
      txId?: null,
      amount?: null
    ): ExecuteTxEventFilter;
    ExecuteTx(
      to?: string | null,
      txId?: null,
      amount?: null
    ): ExecuteTxEventFilter;

    "RemoveApprovalTx(address,uint256)"(
      owner?: string | null,
      txId?: null
    ): RemoveApprovalTxEventFilter;
    RemoveApprovalTx(
      owner?: string | null,
      txId?: null
    ): RemoveApprovalTxEventFilter;
  };

  estimateGas: {
    approveTx(
      _txId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createTx(
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    executeTx(
      _txId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getOwner(overrides?: CallOverrides): Promise<BigNumber>;

    getTransactionDetails(
      _txId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    revokeConfirmation(
      _txId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transactions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approveTx(
      _txId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createTx(
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    executeTx(
      _txId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTransactionDetails(
      _txId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    revokeConfirmation(
      _txId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transactions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}