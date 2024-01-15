import { singleton } from "tsyringe";
import { UnprovenBlock } from "@proto-kit/sequencer";
import { Block } from "@prisma/client";
import { NetworkState } from "@proto-kit/protocol";
import { Field } from "o1js";

import { ObjectMapper } from "../../../ObjectMapper";

@singleton()
export class BlockMapper implements ObjectMapper<UnprovenBlock, Block> {
  public mapIn(input: Block): UnprovenBlock {
    return {
      transactions: [],

      networkState: {
        before: new NetworkState(
          NetworkState.fromJSON(input.beforeNetworkState as any)
        ),
        during: new NetworkState(
          NetworkState.fromJSON(input.duringNetworkState as any)
        )
      },

      height: Field(input.height),
      fromEternalTransactionsHash: Field(input.fromEternalTransactionsHash),
      toEternalTransactionsHash: Field(input.toEternalTransactionsHash),
      fromBlockHashRoot: Field(input.fromBlockHashRoot),

      transactionsHash: Field(input.transactionsHash),
      previousBlockTransactionsHash:
        input.parentTransactionsHash !== null
          ? Field(input.parentTransactionsHash)
          : undefined,
    };
  }

  public mapOut(input: UnprovenBlock): Block {
    return {
      height: Number(input.height.toBigInt()),
      beforeNetworkState: NetworkState.toJSON(input.networkState.before),
      duringNetworkState: NetworkState.toJSON(input.networkState.during),
      fromEternalTransactionsHash: input.fromEternalTransactionsHash.toString(),
      toEternalTransactionsHash: input.toEternalTransactionsHash.toString(),
      fromBlockHashRoot: input.fromBlockHashRoot.toString(),

      transactionsHash: input.transactionsHash.toString(),
      parentTransactionsHash: input.previousBlockTransactionsHash?.toString() ?? null,
      batchHeight: null,
    };
  }
}
