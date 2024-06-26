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

export class ChangedCore extends ethereum.Event {
  get params(): ChangedCore__Params {
    return new ChangedCore__Params(this);
  }
}

export class ChangedCore__Params {
  _event: ChangedCore;

  constructor(event: ChangedCore) {
    this._event = event;
  }

  get core(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ChangedOwner extends ethereum.Event {
  get params(): ChangedOwner__Params {
    return new ChangedOwner__Params(this);
  }
}

export class ChangedOwner__Params {
  _event: ChangedOwner;

  constructor(event: ChangedOwner) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class PoolCreated extends ethereum.Event {
  get params(): PoolCreated__Params {
    return new PoolCreated__Params(this);
  }
}

export class PoolCreated__Params {
  _event: PoolCreated;

  constructor(event: PoolCreated) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get pool(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get allPoolsSize(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Whitelisting extends ethereum.Event {
  get params(): Whitelisting__Params {
    return new Whitelisting__Params(this);
  }
}

export class Whitelisting__Params {
  _event: Whitelisting;

  constructor(event: Whitelisting) {
    this._event = event;
  }

  get state(): boolean {
    return this._event.parameters[0].value.toBoolean();
  }
}

export class Factory extends ethereum.SmartContract {
  static bind(address: Address): Factory {
    return new Factory("Factory", address);
  }

  allPools(param0: BigInt): Address {
    let result = super.call("allPools", "allPools(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0),
    ]);

    return result[0].toAddress();
  }

  try_allPools(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("allPools", "allPools(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  allPoolsLength(): BigInt {
    let result = super.call("allPoolsLength", "allPoolsLength():(uint256)", []);

    return result[0].toBigInt();
  }

  try_allPoolsLength(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allPoolsLength",
      "allPoolsLength():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  createPool(_token: Address): Address {
    let result = super.call("createPool", "createPool(address):(address)", [
      ethereum.Value.fromAddress(_token),
    ]);

    return result[0].toAddress();
  }

  try_createPool(_token: Address): ethereum.CallResult<Address> {
    let result = super.tryCall("createPool", "createPool(address):(address)", [
      ethereum.Value.fromAddress(_token),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getOwner(): Address {
    let result = super.call("getOwner", "getOwner():(address)", []);

    return result[0].toAddress();
  }

  try_getOwner(): ethereum.CallResult<Address> {
    let result = super.tryCall("getOwner", "getOwner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getPool(param0: Address): Address {
    let result = super.call("getPool", "getPool(address):(address)", [
      ethereum.Value.fromAddress(param0),
    ]);

    return result[0].toAddress();
  }

  try_getPool(param0: Address): ethereum.CallResult<Address> {
    let result = super.tryCall("getPool", "getPool(address):(address)", [
      ethereum.Value.fromAddress(param0),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getXfaiCore(): Address {
    let result = super.call("getXfaiCore", "getXfaiCore():(address)", []);

    return result[0].toAddress();
  }

  try_getXfaiCore(): ethereum.CallResult<Address> {
    let result = super.tryCall("getXfaiCore", "getXfaiCore():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  poolCodeHash(): Bytes {
    let result = super.call("poolCodeHash", "poolCodeHash():(bytes32)", []);

    return result[0].toBytes();
  }

  try_poolCodeHash(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("poolCodeHash", "poolCodeHash():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
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

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _wETH(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreatePoolCall extends ethereum.Call {
  get inputs(): CreatePoolCall__Inputs {
    return new CreatePoolCall__Inputs(this);
  }

  get outputs(): CreatePoolCall__Outputs {
    return new CreatePoolCall__Outputs(this);
  }
}

export class CreatePoolCall__Inputs {
  _call: CreatePoolCall;

  constructor(call: CreatePoolCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class CreatePoolCall__Outputs {
  _call: CreatePoolCall;

  constructor(call: CreatePoolCall) {
    this._call = call;
  }

  get pool(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class SetOwnerCall extends ethereum.Call {
  get inputs(): SetOwnerCall__Inputs {
    return new SetOwnerCall__Inputs(this);
  }

  get outputs(): SetOwnerCall__Outputs {
    return new SetOwnerCall__Outputs(this);
  }
}

export class SetOwnerCall__Inputs {
  _call: SetOwnerCall;

  constructor(call: SetOwnerCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetOwnerCall__Outputs {
  _call: SetOwnerCall;

  constructor(call: SetOwnerCall) {
    this._call = call;
  }
}

export class SetXfaiCoreCall extends ethereum.Call {
  get inputs(): SetXfaiCoreCall__Inputs {
    return new SetXfaiCoreCall__Inputs(this);
  }

  get outputs(): SetXfaiCoreCall__Outputs {
    return new SetXfaiCoreCall__Outputs(this);
  }
}

export class SetXfaiCoreCall__Inputs {
  _call: SetXfaiCoreCall;

  constructor(call: SetXfaiCoreCall) {
    this._call = call;
  }

  get _core(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetXfaiCoreCall__Outputs {
  _call: SetXfaiCoreCall;

  constructor(call: SetXfaiCoreCall) {
    this._call = call;
  }
}
