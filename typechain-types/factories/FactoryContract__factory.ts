/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FactoryContract,
  FactoryContractInterface,
} from "../FactoryContract";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "childAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "data",
        type: "uint256",
      },
    ],
    name: "ChildCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "children",
    outputs: [
      {
        internalType: "contract ChildContract",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "data",
        type: "uint256",
      },
    ],
    name: "createChild",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610674806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80630419eca51461003b5780637002ce4214610057575b600080fd5b610055600480360381019061005091906101c7565b610087565b005b610071600480360381019061006c91906101c7565b610166565b60405161007e9190610246565b60405180910390f35b60008160008054905060405161009c906101a5565b6100a7929190610261565b604051809103906000f0801580156100c3573d6000803e3d6000fd5b5090506000819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507ff1b544c1944129b0fa24838a22f6c7d8500381559fa6d6ccf8845923f0922a2c818360405161015a92919061021d565b60405180910390a15050565b6000818154811061017657600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61033d8061030283390190565b6000813590506101c1816102ea565b92915050565b6000602082840312156101d957600080fd5b60006101e7848285016101b2565b91505092915050565b6101f98161028a565b82525050565b610208816102c6565b82525050565b610217816102bc565b82525050565b600060408201905061023260008301856101f0565b61023f602083018461020e565b9392505050565b600060208201905061025b60008301846101ff565b92915050565b6000604082019050610276600083018561020e565b610283602083018461020e565b9392505050565b60006102958261029c565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006102d1826102d8565b9050919050565b60006102e38261029c565b9050919050565b6102f3816102bc565b81146102fe57600080fd5b5056fe608060405234801561001057600080fd5b5060405161033d38038061033d83398181016040528101906100329190610076565b8160008190555060018060006101000a81548160ff0219169083151502179055508060028190555050506100d3565b600081519050610070816100bc565b92915050565b6000806040838503121561008957600080fd5b600061009785828601610061565b92505060206100a885828601610061565b9150509250929050565b6000819050919050565b6100c5816100b2565b81146100d057600080fd5b50565b61025b806100e26000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80632986c0e51461004657806359569832146100645780636aa633b614610080575b600080fd5b61004e61009e565b60405161005b91906101ab565b60405180910390f35b61007e60048036038101906100799190610111565b6100a4565b005b6100886100e9565b6040516100959190610190565b60405180910390f35b60025481565b806000819055507f77327389b3dcb88eaa59a8747adfb8cdac2b3f77798e4ae51e77140ae20da233306000546040516100de929190610167565b60405180910390a150565b600160009054906101000a900460ff1681565b60008135905061010b8161020e565b92915050565b60006020828403121561012357600080fd5b6000610131848285016100fc565b91505092915050565b610143816101c6565b82525050565b610152816101d8565b82525050565b61016181610204565b82525050565b600060408201905061017c600083018561013a565b6101896020830184610158565b9392505050565b60006020820190506101a56000830184610149565b92915050565b60006020820190506101c06000830184610158565b92915050565b60006101d1826101e4565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b61021781610204565b811461022257600080fd5b5056fea2646970667358221220c413d243b83f362d28cfd6dd90443bf282131be6541f88c9d6ad331ae4f2fbac64736f6c63430008000033a26469706673582212201220ba1ed04701a76720f2a24e2344033f16c0b75b95e3b301f40d38cd0ecb3d64736f6c63430008000033";

type FactoryContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FactoryContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FactoryContract__factory extends ContractFactory {
  constructor(...args: FactoryContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FactoryContract> {
    return super.deploy(overrides || {}) as Promise<FactoryContract>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FactoryContract {
    return super.attach(address) as FactoryContract;
  }
  connect(signer: Signer): FactoryContract__factory {
    return super.connect(signer) as FactoryContract__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FactoryContractInterface {
    return new utils.Interface(_abi) as FactoryContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FactoryContract {
    return new Contract(address, _abi, signerOrProvider) as FactoryContract;
  }
}
