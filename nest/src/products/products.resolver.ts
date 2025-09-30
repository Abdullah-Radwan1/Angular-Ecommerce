import { Resolver, Query, Args } from '@nestjs/graphql';
import { Product } from './entities/product.entity';

import { PrismaService } from '../prisma/prisma.service';
import { ProductsService } from './products.service';
import { Category } from '@prisma/client';
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
    return this.Prisma.product.findUnique({
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
  @Query(() => [Product], { name: 'relatedProducts' }) // Changed to match query
  relatedProducts(@Args('category', { type: () => String }) term: Category) {
    return this.Prisma.product.findMany({
      where: { Category: term },
      take: 4,
    });
  }
}
