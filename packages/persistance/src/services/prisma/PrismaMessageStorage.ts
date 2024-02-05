import { MessageStorage, PendingTransaction } from "@proto-kit/sequencer";
import { inject } from "tsyringe";
import { PrismaDatabaseConnection } from "../../PrismaDatabaseConnection";
import { TransactionMapper } from "./mappers/TransactionMapper";

export class PrismaMessageStorage implements MessageStorage {
  public constructor(
    @inject("Database") private readonly connection: PrismaDatabaseConnection,
    private readonly transactionMapper: TransactionMapper
  ) {}

  public async getMessages(
    fromMessageHash: string
  ): Promise<PendingTransaction[]> {
    const { client } = this.connection;

    const batch = await client.incomingMessageBatch.findFirst({
      where: {
        fromMessageHash,
      },
      include: {
        messages: {
          include: {
            transaction: true,
          },
        },
      },
    });

    const dbTransactions = batch!.messages.map((message) => {
      return message.transaction;
    });

    return dbTransactions.map((dbTx) => this.transactionMapper.mapIn(dbTx));
  }

  public async pushMessages(
    fromMessageHash: string,
    toMessageHash: string,
    messages: PendingTransaction[]
  ): Promise<void> {
    const transactions = messages.map((message) =>
      this.transactionMapper.mapOut(message)
    );

    const { client } = this.connection;
    await client.$transaction([
      client.transaction.createMany({
        data: transactions,
        skipDuplicates: true,
      }),

      client.incomingMessageBatch.create({
        data: {
          fromMessageHash,
          toMessageHash,
          messages: {
            createMany: {
              data: transactions.map((transaction) => ({
                transactionHash: transaction.hash,
              })),
            },
          },
        },
      }),
    ]);
  }
}
