import {
  Burn as BurnEvent,
  Mint as MintEvent,
  Swap as SwapEvent,
} from "../generated/XfaiV0Core/XfaiV0Core";
import { AddLiquidity, RemoveLiquidity, Swap } from "../generated/schema";

export function handleBurn(event: BurnEvent): void {
  let entity = new RemoveLiquidity(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.sender = event.params.sender;
  entity.amount0 = event.params.amount0;
  entity.amount1 = event.params.amount1;
  entity.to = event.params.to;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleMint(event: MintEvent): void {
  let entity = new AddLiquidity(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.sender = event.params.sender;
  entity.liquidity = event.params.liquidity;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleSwap(event: SwapEvent): void {
  let entity = new Swap(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.sender = event.params.sender;
  entity.input = event.params.input;
  entity.output = event.params.output;
  entity.to = event.params.to;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
