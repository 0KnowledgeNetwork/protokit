import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../../../../node_modules/@prisma/client-indexer";
import { DecimalJSScalar } from "../../scalars";
import { IncomingMessageBatchUpdateOneRequiredWithoutMessagesNestedInput } from "../inputs/IncomingMessageBatchUpdateOneRequiredWithoutMessagesNestedInput";

@TypeGraphQL.InputType("IncomingMessageBatchTransactionUpdateWithoutTransactionInput", {})
export class IncomingMessageBatchTransactionUpdateWithoutTransactionInput {
  @TypeGraphQL.Field(_type => IncomingMessageBatchUpdateOneRequiredWithoutMessagesNestedInput, {
    nullable: true
  })
  batch?: IncomingMessageBatchUpdateOneRequiredWithoutMessagesNestedInput | undefined;
}
