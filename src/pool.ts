import {
  Sync as SyncEvent,
  Transfer as TransferEvent,
} from "../generated/templates/Pool/Pool";
import { LiquidityChange, Sync } from "../generated/schema";
import { Address, Bytes, dataSource } from "@graphprotocol/graph-ts";

const ZERO_ADDR = "0x0000000000000000000000000000000000000000";

export function handleTransfer(event: TransferEvent): void {
  let context = dataSource.context();
  let tokenAddress = context.getBytes("token");

  if (
    event.params.from.toHexString().toLowerCase() == ZERO_ADDR &&
    event.params.to.toHexString().toLowerCase() == ZERO_ADDR
  ) {
    // Initial liquidity locking
    return;
  }

  // check if to is zero or from is zero then we need to emit a single event
  if (event.params.from.toHexString() == ZERO_ADDR) {
    let mint = new LiquidityChange(
      event.transaction.hash.concatI32(event.logIndex.toI32())
    );
    mint.pool = event.address;
    mint.token = tokenAddress;
    mint.blockNumber = event.block.number;
    mint.blockTimestamp = event.block.timestamp;
    mint.transactionHash = event.transaction.hash;

    // Liquidity added
    mint.owner = event.params.to;
    mint.liquidity = event.params.value;

    mint.save();
    return;
  }

  if (event.params.to.toHexString() == ZERO_ADDR) {
    let burn = new LiquidityChange(
      event.transaction.hash.concatI32(event.logIndex.toI32())
    );
    burn.pool = event.address;
    burn.token = tokenAddress;

    burn.blockNumber = event.block.number;
    burn.blockTimestamp = event.block.timestamp;
    burn.transactionHash = event.transaction.hash;
    // Liquidity removed
    burn.owner = event.params.from;
    burn.liquidity = event.params.value.neg();
    burn.save();
    return;
  }

  // Liquidity removed for from
  let removedLiq = new LiquidityChange(
    event.transaction.hash
      .concatI32(event.logIndex.toI32())
      .concat(Bytes.fromUTF8("-removed"))
  );
  removedLiq.pool = event.address;
  removedLiq.token = tokenAddress;
  removedLiq.transactionHash = event.transaction.hash;

  removedLiq.blockNumber = event.block.number;
  removedLiq.blockTimestamp = event.block.timestamp;
  removedLiq.owner = event.params.from;
  removedLiq.liquidity = event.params.value.neg();
  removedLiq.save();

  let addedLiq = new LiquidityChange(
    event.transaction.hash
      .concatI32(event.logIndex.toI32())
      .concat(Bytes.fromUTF8("-add"))
  );
  addedLiq.pool = event.address;
  addedLiq.token = tokenAddress;
  addedLiq.transactionHash = event.transaction.hash;

  addedLiq.blockNumber = event.block.number;
  addedLiq.blockTimestamp = event.block.timestamp;
  addedLiq.owner = event.params.to;
  addedLiq.liquidity = event.params.value;
  addedLiq.save();
}

export function handleSync(event: SyncEvent): void {
  let context = dataSource.context();
  let tokenAddress = context.getBytes("token");
  let entity = new Sync(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.pool = event.address;
  entity.token = tokenAddress;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.reserve = event.params._reserve;
  entity.weight = event.params._weight;
  entity.save();
}
