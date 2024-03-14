import {
  Burn as BurnEvent,
  ChangedOwner as ChangedOwnerEvent,
  FlashLoan as FlashLoanEvent,
  InfinityNFTFeeChange as InfinityNFTFeeChangeEvent,
  LpFeeChange as LpFeeChangeEvent,
  Mint as MintEvent,
  Paused as PausedEvent,
  Swap as SwapEvent
} from "../generated/XfaiV0Core/XfaiV0Core"
import {
  Burn,
  ChangedOwner,
  FlashLoan,
  InfinityNFTFeeChange,
  LpFeeChange,
  Mint,
  Paused,
  Swap
} from "../generated/schema"

export function handleBurn(event: BurnEvent): void {
  let entity = new Burn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.amount0 = event.params.amount0
  entity.amount1 = event.params.amount1
  entity.to = event.params.to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleChangedOwner(event: ChangedOwnerEvent): void {
  let entity = new ChangedOwner(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFlashLoan(event: FlashLoanEvent): void {
  let entity = new FlashLoan(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.tokenAmount = event.params.tokenAmount
  entity.wethAmount = event.params.wethAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInfinityNFTFeeChange(
  event: InfinityNFTFeeChangeEvent
): void {
  let entity = new InfinityNFTFeeChange(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newFee = event.params.newFee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLpFeeChange(event: LpFeeChangeEvent): void {
  let entity = new LpFeeChange(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newFee = event.params.newFee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMint(event: MintEvent): void {
  let entity = new Mint(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.liquidity = event.params.liquidity

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.p = event.params.p

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSwap(event: SwapEvent): void {
  let entity = new Swap(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.input = event.params.input
  entity.output = event.params.output
  entity.to = event.params.to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
