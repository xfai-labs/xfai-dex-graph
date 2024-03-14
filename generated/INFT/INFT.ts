// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class Boost extends ethereum.Event {
  get params(): Boost__Params {
    return new Boost__Params(this);
  }
}

export class Boost__Params {
  _event: Boost;

  constructor(event: Boost) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get share(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get id(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class HarvestETH extends ethereum.Event {
  get params(): HarvestETH__Params {
    return new HarvestETH__Params(this);
  }
}

export class HarvestETH__Params {
  _event: HarvestETH;

  constructor(event: HarvestETH) {
    this._event = event;
  }

  get harvestedAmount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get harvestedShare(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get id(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class HarvestToken extends ethereum.Event {
  get params(): HarvestToken__Params {
    return new HarvestToken__Params(this);
  }
}

export class HarvestToken__Params {
  _event: HarvestToken;

  constructor(event: HarvestToken) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get harvestedAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get harvestedShare(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get id(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class Mint extends ethereum.Event {
  get params(): Mint__Params {
    return new Mint__Params(this);
  }
}

export class Mint__Params {
  _event: Mint;

  constructor(event: Mint) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get share(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get id(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class INFT__getStatesResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }

  getValue0(): BigInt {
    return this.value0;
  }

  getValue1(): BigInt {
    return this.value1;
  }

  getValue2(): BigInt {
    return this.value2;
  }
}

export class INFT__mintResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getTokenID(): BigInt {
    return this.value0;
  }

  getShare(): BigInt {
    return this.value1;
  }
}

export class INFT__shareToTokenAmountResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }

  getShare2amount(): BigInt {
    return this.value0;
  }

  getInftShare(): BigInt {
    return this.value1;
  }

  getHarvestedShares(): BigInt {
    return this.value2;
  }
}

export class INFT extends ethereum.SmartContract {
  static bind(address: Address): INFT {
    return new INFT("INFT", address);
  }

  INFTShares(param0: BigInt): BigInt {
    let result = super.call("INFTShares", "INFTShares(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0),
    ]);

    return result[0].toBigInt();
  }

  try_INFTShares(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("INFTShares", "INFTShares(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner),
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  boost(_tokenID: BigInt): BigInt {
    let result = super.call("boost", "boost(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(_tokenID),
    ]);

    return result[0].toBigInt();
  }

  try_boost(_tokenID: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("boost", "boost(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(_tokenID),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId),
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getStates(): INFT__getStatesResult {
    let result = super.call(
      "getStates",
      "getStates():(uint256,uint256,uint256)",
      [],
    );

    return new INFT__getStatesResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
    );
  }

  try_getStates(): ethereum.CallResult<INFT__getStatesResult> {
    let result = super.tryCall(
      "getStates",
      "getStates():(uint256,uint256,uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new INFT__getStatesResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
      ),
    );
  }

  harvestETH(_tokenID: BigInt, _amount: BigInt): BigInt {
    let result = super.call(
      "harvestETH",
      "harvestETH(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_tokenID),
        ethereum.Value.fromUnsignedBigInt(_amount),
      ],
    );

    return result[0].toBigInt();
  }

  try_harvestETH(
    _tokenID: BigInt,
    _amount: BigInt,
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "harvestETH",
      "harvestETH(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_tokenID),
        ethereum.Value.fromUnsignedBigInt(_amount),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  harvestToken(_token: Address, _tokenID: BigInt, _amount: BigInt): BigInt {
    let result = super.call(
      "harvestToken",
      "harvestToken(address,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_token),
        ethereum.Value.fromUnsignedBigInt(_tokenID),
        ethereum.Value.fromUnsignedBigInt(_amount),
      ],
    );

    return result[0].toBigInt();
  }

  try_harvestToken(
    _token: Address,
    _tokenID: BigInt,
    _amount: BigInt,
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "harvestToken",
      "harvestToken(address,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_token),
        ethereum.Value.fromUnsignedBigInt(_tokenID),
        ethereum.Value.fromUnsignedBigInt(_amount),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  harvestedBalance(param0: Address): BigInt {
    let result = super.call(
      "harvestedBalance",
      "harvestedBalance(address):(uint256)",
      [ethereum.Value.fromAddress(param0)],
    );

    return result[0].toBigInt();
  }

  try_harvestedBalance(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "harvestedBalance",
      "harvestedBalance(address):(uint256)",
      [ethereum.Value.fromAddress(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  initialReserve(): BigInt {
    let result = super.call("initialReserve", "initialReserve():(uint256)", []);

    return result[0].toBigInt();
  }

  try_initialReserve(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "initialReserve",
      "initialReserve():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)],
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address,
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  mint(_to: Address): INFT__mintResult {
    let result = super.call("mint", "mint(address):(uint256,uint256)", [
      ethereum.Value.fromAddress(_to),
    ]);

    return new INFT__mintResult(result[0].toBigInt(), result[1].toBigInt());
  }

  try_mint(_to: Address): ethereum.CallResult<INFT__mintResult> {
    let result = super.tryCall("mint", "mint(address):(uint256,uint256)", [
      ethereum.Value.fromAddress(_to),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new INFT__mintResult(value[0].toBigInt(), value[1].toBigInt()),
    );
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId),
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  reserve(): BigInt {
    let result = super.call("reserve", "reserve():(uint256)", []);

    return result[0].toBigInt();
  }

  try_reserve(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("reserve", "reserve():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  shareToTokenAmount(
    _tokenID: BigInt,
    _token: Address,
  ): INFT__shareToTokenAmountResult {
    let result = super.call(
      "shareToTokenAmount",
      "shareToTokenAmount(uint256,address):(uint256,uint256,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_tokenID),
        ethereum.Value.fromAddress(_token),
      ],
    );

    return new INFT__shareToTokenAmountResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
    );
  }

  try_shareToTokenAmount(
    _tokenID: BigInt,
    _token: Address,
  ): ethereum.CallResult<INFT__shareToTokenAmountResult> {
    let result = super.tryCall(
      "shareToTokenAmount",
      "shareToTokenAmount(uint256,address):(uint256,uint256,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_tokenID),
        ethereum.Value.fromAddress(_token),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new INFT__shareToTokenAmountResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
      ),
    );
  }

  sharesHarvestedByPool(param0: Address, param1: BigInt): BigInt {
    let result = super.call(
      "sharesHarvestedByPool",
      "sharesHarvestedByPool(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1),
      ],
    );

    return result[0].toBigInt();
  }

  try_sharesHarvestedByPool(
    param0: Address,
    param1: BigInt,
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "sharesHarvestedByPool",
      "sharesHarvestedByPool(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)],
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenByIndex(index: BigInt): BigInt {
    let result = super.call("tokenByIndex", "tokenByIndex(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(index),
    ]);

    return result[0].toBigInt();
  }

  try_tokenByIndex(index: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenByIndex",
      "tokenByIndex(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(index)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenOfOwnerByIndex(owner: Address, index: BigInt): BigInt {
    let result = super.call(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index),
      ],
    );

    return result[0].toBigInt();
  }

  try_tokenOfOwnerByIndex(
    owner: Address,
    index: BigInt,
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenURI(tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId),
    ]);

    return result[0].toString();
  }

  try_tokenURI(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSharesHarvestedByPool(param0: Address): BigInt {
    let result = super.call(
      "totalSharesHarvestedByPool",
      "totalSharesHarvestedByPool(address):(uint256)",
      [ethereum.Value.fromAddress(param0)],
    );

    return result[0].toBigInt();
  }

  try_totalSharesHarvestedByPool(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalSharesHarvestedByPool",
      "totalSharesHarvestedByPool(address):(uint256)",
      [ethereum.Value.fromAddress(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalSharesIssued(): BigInt {
    let result = super.call(
      "totalSharesIssued",
      "totalSharesIssued():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_totalSharesIssued(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalSharesIssued",
      "totalSharesIssued():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _factory(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _WETH(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _underlyingToken(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _initialReserve(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _expectedMints(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class BoostCall extends ethereum.Call {
  get inputs(): BoostCall__Inputs {
    return new BoostCall__Inputs(this);
  }

  get outputs(): BoostCall__Outputs {
    return new BoostCall__Outputs(this);
  }
}

export class BoostCall__Inputs {
  _call: BoostCall;

  constructor(call: BoostCall) {
    this._call = call;
  }

  get _tokenID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BoostCall__Outputs {
  _call: BoostCall;

  constructor(call: BoostCall) {
    this._call = call;
  }

  get share(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class HarvestETHCall extends ethereum.Call {
  get inputs(): HarvestETHCall__Inputs {
    return new HarvestETHCall__Inputs(this);
  }

  get outputs(): HarvestETHCall__Outputs {
    return new HarvestETHCall__Outputs(this);
  }
}

export class HarvestETHCall__Inputs {
  _call: HarvestETHCall;

  constructor(call: HarvestETHCall) {
    this._call = call;
  }

  get _tokenID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class HarvestETHCall__Outputs {
  _call: HarvestETHCall;

  constructor(call: HarvestETHCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class HarvestTokenCall extends ethereum.Call {
  get inputs(): HarvestTokenCall__Inputs {
    return new HarvestTokenCall__Inputs(this);
  }

  get outputs(): HarvestTokenCall__Outputs {
    return new HarvestTokenCall__Outputs(this);
  }
}

export class HarvestTokenCall__Inputs {
  _call: HarvestTokenCall;

  constructor(call: HarvestTokenCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenID(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class HarvestTokenCall__Outputs {
  _call: HarvestTokenCall;

  constructor(call: HarvestTokenCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get tokenID(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }

  get share(): BigInt {
    return this._call.outputValues[1].value.toBigInt();
  }
}

export class PremintCall extends ethereum.Call {
  get inputs(): PremintCall__Inputs {
    return new PremintCall__Inputs(this);
  }

  get outputs(): PremintCall__Outputs {
    return new PremintCall__Outputs(this);
  }
}

export class PremintCall__Inputs {
  _call: PremintCall;

  constructor(call: PremintCall) {
    this._call = call;
  }

  get _legacyLNFTHolders(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _initialShares(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class PremintCall__Outputs {
  _call: PremintCall;

  constructor(call: PremintCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class SetBaseURICall extends ethereum.Call {
  get inputs(): SetBaseURICall__Inputs {
    return new SetBaseURICall__Inputs(this);
  }

  get outputs(): SetBaseURICall__Outputs {
    return new SetBaseURICall__Outputs(this);
  }
}

export class SetBaseURICall__Inputs {
  _call: SetBaseURICall;

  constructor(call: SetBaseURICall) {
    this._call = call;
  }

  get _newBaseURI(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetBaseURICall__Outputs {
  _call: SetBaseURICall;

  constructor(call: SetBaseURICall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}