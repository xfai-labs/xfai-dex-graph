import {
  Boost as BoostEvent,
  HarvestETH as HarvestETHEvent,
  HarvestToken as HarvestTokenEvent,
  Mint as MintEvent,
} from "../generated/INFT/INFT";
import { Boost, HarvestETH, HarvestToken, Mint } from "../generated/schema";

export function handleBoost(event: BoostEvent): void {
  let entity = new Boost(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.from = event.params.from;
  entity.share = event.params.share;
  entity.INFT_id = event.params.id;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleHarvestETH(event: HarvestETHEvent): void {
  let entity = new HarvestETH(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.harvestedAmount = event.params.harvestedAmount;
  entity.harvestedShare = event.params.harvestedShare;
  entity.INFT_id = event.params.id;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleHarvestToken(event: HarvestTokenEvent): void {
  let entity = new HarvestToken(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.token = event.params.token;
  entity.harvestedAmount = event.params.harvestedAmount;
  entity.harvestedShare = event.params.harvestedShare;
  entity.INFT_id = event.params.id;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleMint(event: MintEvent): void {
  let entity = new Mint(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.from = event.params.from;
  entity.to = event.params.to;
  entity.share = event.params.share;
  entity.INFT_id = event.params.id;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
