import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Burn,
  ChangedOwner,
  FlashLoan,
  InfinityNFTFeeChange,
  LpFeeChange,
  Mint,
  Paused,
  Swap
} from "../generated/XfaiV0Core/XfaiV0Core"

export function createBurnEvent(
  sender: Address,
  amount0: BigInt,
  amount1: BigInt,
  to: Address
): Burn {
  let burnEvent = changetype<Burn>(newMockEvent())

  burnEvent.parameters = new Array()

  burnEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  burnEvent.parameters.push(
    new ethereum.EventParam(
      "amount0",
      ethereum.Value.fromUnsignedBigInt(amount0)
    )
  )
  burnEvent.parameters.push(
    new ethereum.EventParam(
      "amount1",
      ethereum.Value.fromUnsignedBigInt(amount1)
    )
  )
  burnEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return burnEvent
}

export function createChangedOwnerEvent(owner: Address): ChangedOwner {
  let changedOwnerEvent = changetype<ChangedOwner>(newMockEvent())

  changedOwnerEvent.parameters = new Array()

  changedOwnerEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return changedOwnerEvent
}

export function createFlashLoanEvent(
  sender: Address,
  tokenAmount: BigInt,
  wethAmount: BigInt
): FlashLoan {
  let flashLoanEvent = changetype<FlashLoan>(newMockEvent())

  flashLoanEvent.parameters = new Array()

  flashLoanEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  flashLoanEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAmount",
      ethereum.Value.fromUnsignedBigInt(tokenAmount)
    )
  )
  flashLoanEvent.parameters.push(
    new ethereum.EventParam(
      "wethAmount",
      ethereum.Value.fromUnsignedBigInt(wethAmount)
    )
  )

  return flashLoanEvent
}

export function createInfinityNFTFeeChangeEvent(
  newFee: BigInt
): InfinityNFTFeeChange {
  let infinityNftFeeChangeEvent = changetype<InfinityNFTFeeChange>(
    newMockEvent()
  )

  infinityNftFeeChangeEvent.parameters = new Array()

  infinityNftFeeChangeEvent.parameters.push(
    new ethereum.EventParam("newFee", ethereum.Value.fromUnsignedBigInt(newFee))
  )

  return infinityNftFeeChangeEvent
}

export function createLpFeeChangeEvent(newFee: BigInt): LpFeeChange {
  let lpFeeChangeEvent = changetype<LpFeeChange>(newMockEvent())

  lpFeeChangeEvent.parameters = new Array()

  lpFeeChangeEvent.parameters.push(
    new ethereum.EventParam("newFee", ethereum.Value.fromUnsignedBigInt(newFee))
  )

  return lpFeeChangeEvent
}

export function createMintEvent(sender: Address, liquidity: BigInt): Mint {
  let mintEvent = changetype<Mint>(newMockEvent())

  mintEvent.parameters = new Array()

  mintEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  mintEvent.parameters.push(
    new ethereum.EventParam(
      "liquidity",
      ethereum.Value.fromUnsignedBigInt(liquidity)
    )
  )

  return mintEvent
}

export function createPausedEvent(p: boolean): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("p", ethereum.Value.fromBoolean(p))
  )

  return pausedEvent
}

export function createSwapEvent(
  sender: Address,
  input: BigInt,
  output: BigInt,
  to: Address
): Swap {
  let swapEvent = changetype<Swap>(newMockEvent())

  swapEvent.parameters = new Array()

  swapEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  swapEvent.parameters.push(
    new ethereum.EventParam("input", ethereum.Value.fromUnsignedBigInt(input))
  )
  swapEvent.parameters.push(
    new ethereum.EventParam("output", ethereum.Value.fromUnsignedBigInt(output))
  )
  swapEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return swapEvent
}
