import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { Burn } from "../generated/schema"
import { Burn as BurnEvent } from "../generated/XfaiV0Core/XfaiV0Core"
import { handleBurn } from "../src/xfai-v-0-core"
import { createBurnEvent } from "./xfai-v-0-core-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let sender = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let amount0 = BigInt.fromI32(234)
    let amount1 = BigInt.fromI32(234)
    let to = Address.fromString("0x0000000000000000000000000000000000000001")
    let newBurnEvent = createBurnEvent(sender, amount0, amount1, to)
    handleBurn(newBurnEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Burn created and stored", () => {
    assert.entityCount("Burn", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Burn",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "sender",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Burn",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amount0",
      "234"
    )
    assert.fieldEquals(
      "Burn",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amount1",
      "234"
    )
    assert.fieldEquals(
      "Burn",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "to",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
