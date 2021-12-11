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

export interface ChildContractInterface extends utils.Interface {
  functions: {
    "index()": FunctionFragment;
    "isEnabled()": FunctionFragment;
    "updateChild(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "index", values?: undefined): string;
  encodeFunctionData(functionFragment: "isEnabled", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateChild",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "index", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isEnabled", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateChild",
    data: BytesLike
  ): Result;

  events: {
    "ChildUpdated(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ChildUpdated"): EventFragment;
}

export type ChildUpdatedEvent = TypedEvent<
  [string, BigNumber],
  { childAddress: string; data: BigNumber }
>;

export type ChildUpdatedEventFilter = TypedEventFilter<ChildUpdatedEvent>;

export interface ChildContract extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ChildContractInterface;

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
    index(overrides?: CallOverrides): Promise<[BigNumber]>;

    isEnabled(overrides?: CallOverrides): Promise<[boolean]>;

    updateChild(
      _data: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  index(overrides?: CallOverrides): Promise<BigNumber>;

  isEnabled(overrides?: CallOverrides): Promise<boolean>;

  updateChild(
    _data: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    index(overrides?: CallOverrides): Promise<BigNumber>;

    isEnabled(overrides?: CallOverrides): Promise<boolean>;

    updateChild(_data: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "ChildUpdated(address,uint256)"(
      childAddress?: null,
      data?: null
    ): ChildUpdatedEventFilter;
    ChildUpdated(childAddress?: null, data?: null): ChildUpdatedEventFilter;
  };

  estimateGas: {
    index(overrides?: CallOverrides): Promise<BigNumber>;

    isEnabled(overrides?: CallOverrides): Promise<BigNumber>;

    updateChild(
      _data: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    index(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateChild(
      _data: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}