import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Cats {
  @Field((type) => Int)
  id: number;

  @Field()
  title: string;
}
