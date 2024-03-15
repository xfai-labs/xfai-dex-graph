import {
  AddLiquidityCall,
  RemoveLiquidityCall,
} from "../generated/Periphery/Periphery";
import { ChangeLiquidity } from "../generated/schema";

export function handleAddLiquidity(event: AddLiquidityCall): void {
  let entity = new ChangeLiquidity(event.transaction.hash);
  entity.owner = event.to;
  entity.token = event.inputs._token;
  entity.liquidity = event.outputs.liquidity;
  entity.save();
}

export function handleRemoveLiquidity(event: RemoveLiquidityCall): void {
  let entity = new ChangeLiquidity(event.transaction.hash);
  entity.owner = event.to;
  entity.token = event.inputs._token1;
  entity.liquidity = event.inputs._liquidity.neg();
  entity.save();
}
