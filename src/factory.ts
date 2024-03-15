import { PoolCreated as PoolCreatedEvent } from "../generated/Factory/Factory";
import { Pool } from "../generated/schema";

export function handlePoolCreated(event: PoolCreatedEvent): void {
  let entity = new Pool(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.token = event.params.token.toHexString();
  entity.pool = event.params.pool;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
