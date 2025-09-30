import { ObjectType, Field, Float, GraphQLISODateTime } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => String)
  id!: string;

  @Field()
  name!: string;

  @Field()
  description!: string;

  @Field(() => Float)
  price!: number;

  @Field()
  image!: string;

  @Field({ nullable: true })
  stripePriceId?: string;

  @Field(() => Boolean)
  isFeatured!: boolean;

  @Field({ nullable: true })
  category?: string;

  @Field(() => GraphQLISODateTime)
  createdAt!: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt!: Date;
}
