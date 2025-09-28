import { Resolver, Query, Args } from '@nestjs/graphql';
import { Product } from './entities/product.entity';

import { PrismaService } from '../prisma/prisma.service';
import { ProductsService } from './products.service';
@Resolver(() => Product)
export class ProductsResolver {
  constructor(
    private Prisma: PrismaService,
    private productsService: ProductsService,
  ) {}

  @Query(() => [Product], { name: 'products' })
  findAll() {
    return this.Prisma.product.findMany();
  }

  @Query(() => Product, { name: 'product' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.Prisma.product.findFirst({
      where: {
        id,
      },
    });
  }
  @Query(() => [Product], { name: 'searchProducts' }) // Changed to match query
  searchProducts(@Args('term', { type: () => String }) term: string) {
    return this.productsService.SearchFunction(term);
  }

  @Query(() => [Product], { name: 'featuredProducts' }) // Changed to match query
  featuredProducts() {
    return this.Prisma.product.findMany({
      where: { Category: 'PERFUMES' },
      take: 4,
    });
  }

  // @Mutation(() => Product)
  // createProduct(
  //   @Args('createProductInput') createProductInput: CreateProductInput
  // ) {
  //   return this.Prisma.product.create({
  //     data: createProductInput,
  //   });
  // }
  // @Mutation(() => Product)
  // updateProduct(
  //   @Args('updateProductInput') updateProductInput: UpdateProductInput
  // ) {
  //   return this.Prisma.product.update({
  //     where: {
  //       id: updateProductInput.id,
  //     },
  //     data: updateProductInput,
  //   });
  // }

  // @Mutation(() => Product)
  // removeProduct(@Args('id', { type: () => String }) id: string) {
  //   return this.Prisma.product.delete({
  //     where: {
  //       id,
  //     },
  //   });
  // }
}
