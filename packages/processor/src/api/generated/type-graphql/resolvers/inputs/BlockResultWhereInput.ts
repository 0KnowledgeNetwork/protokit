import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../../../../node_modules/@prisma/client-indexer";
import { DecimalJSScalar } from "../../scalars";
import { BlockNullableRelationFilter } from "../inputs/BlockNullableRelationFilter";
import { JsonFilter } from "../inputs/JsonFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("BlockResultWhereInput", {})
export class BlockResultWhereInput {
  @TypeGraphQL.Field(_type => [BlockResultWhereInput], {
    nullable: true
  })
  AND?: BlockResultWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlockResultWhereInput], {
    nullable: true
  })
  OR?: BlockResultWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlockResultWhereInput], {
    nullable: true
  })
  NOT?: BlockResultWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  blockHash?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  stateRoot?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  blockHashRoot?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => JsonFilter, {
    nullable: true
  })
  afterNetworkState?: JsonFilter | undefined;

  @TypeGraphQL.Field(_type => JsonFilter, {
    nullable: true
  })
  blockStateTransitions?: JsonFilter | undefined;

  @TypeGraphQL.Field(_type => JsonFilter, {
    nullable: true
  })
  blockHashWitness?: JsonFilter | undefined;

  @TypeGraphQL.Field(_type => BlockNullableRelationFilter, {
    nullable: true
  })
  block?: BlockNullableRelationFilter | undefined;
}
