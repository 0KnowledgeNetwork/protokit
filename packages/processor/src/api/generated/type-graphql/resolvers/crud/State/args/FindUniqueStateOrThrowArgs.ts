import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StateWhereUniqueInput } from "../../../inputs/StateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueStateOrThrowArgs {
  @TypeGraphQL.Field(_type => StateWhereUniqueInput, {
    nullable: false
  })
  where!: StateWhereUniqueInput;
}
