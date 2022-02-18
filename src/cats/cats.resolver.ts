import { Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class CatsResolver {
  @Query(() => String)
  async author() {
    return "cat";
  }
}
