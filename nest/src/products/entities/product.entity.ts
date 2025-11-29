import { ObjectType, Field, Float, GraphQLISODateTime } from '@nestjs/graphql';
import { Category as PrismaCategory } from '@prisma/client';

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

  @Field(() => [String]) // ⬅️ هكذا
  tags!: string[];

  @Field({ nullable: true })
  stripePriceId?: string;

  @Field(() => Boolean)
  isFeatured!: boolean;

  // ✅ Use the registered enum type
  @Field(() => PrismaCategory, { nullable: true })
  Category?: PrismaCategory; // make sure the property name matches Prisma model exactly

  @Field(() => GraphQLISODateTime)
  createdAt!: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt!: Date;
}
