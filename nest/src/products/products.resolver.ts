import { Resolver, Query, Args } from '@nestjs/graphql';
import { Product } from './entities/product.entity';
import { PrismaService } from '../prisma/prisma.service';
import { ProductsService } from './products.service';
import { Category } from '@prisma/client';
import { Category as PrismaCategory } from '@prisma/client';
import { registerEnumType } from '@nestjs/graphql';

// Register enum for GraphQL
registerEnumType(PrismaCategory, {
  name: 'Category',
  description: 'Product category enum',
});

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
      where: { id },
    });
  }

  @Query(() => [Product], { name: 'searchProducts' })
  searchProducts(@Args('term', { type: () => String }) term: string) {
    return this.productsService.SearchFunction(term);
  }

  @Query(() => [Product], { name: 'featuredProducts' })
  featuredProducts() {
    return this.Prisma.product.findMany({
      where: { Category: Category.PERFUMES }, // ✅ use enum
      take: 4,
    });
  }

  // ✅ Use GraphQL enum type instead of string
  @Query(() => [Product], { name: 'relatedProducts' })
  relatedProducts(
    @Args('Category', { type: () => PrismaCategory }) Category: PrismaCategory, // use enum
  ) {
    return this.Prisma.product.findMany({
      where: { Category: Category },
      take: 4,
    });
  }
}
