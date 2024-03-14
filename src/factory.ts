import { PoolCreated as PoolCreatedEvent } from "../generated/Factory/Factory";
import { PoolCreated } from "../generated/schema";

export function handlePoolCreated(event: PoolCreatedEvent): void {
  let entity = new PoolCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.token = event.params.token;
  entity.pool = event.params.pool;
  entity.allPoolsSize = event.params.allPoolsSize;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
