import { DataSourceContext } from "@graphprotocol/graph-ts";
import { PoolCreated as PoolCreatedEvent } from "../generated/Factory/Factory";
import { Pool } from "../generated/schema";

import { Pool as PoolTemplate } from "../generated/templates";

export function handlePoolCreated(event: PoolCreatedEvent): void {
  let entity = new Pool(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.token = event.params.token;
  entity.pool = event.params.pool.toHexString();

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  let context = new DataSourceContext();
  context.setBytes("token", event.params.token);

  PoolTemplate.createWithContext(event.params.pool, context);
}
