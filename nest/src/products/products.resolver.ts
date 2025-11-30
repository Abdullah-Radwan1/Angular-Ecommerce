import { Resolver, Query, Args } from '@nestjs/graphql';
import { Product } from './entities/product.entity';
import { PrismaService } from '../prisma/prisma.service';
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
  constructor(private Prisma: PrismaService) {}

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

  @Query(() => [Product], { name: 'categoryProducts' })
  categoryProducts(
    @Args('category', { type: () => Category, nullable: true })
    category?: Category,
  ) {
    // لو مبعتش category → رجع أي 8 products
    if (!category) {
      return this.Prisma.product.findMany({
        take: 8,
      });
    }

    // لو category موجودة → رجع حسب الفلترة
    return this.Prisma.product.findMany({
      where: { Category: category },
      take: 8,
    });
  }

  // ✅ Use GraphQL enum type instead of string
  @Query(() => [Product], { name: 'relatedProducts' })
  relatedProducts(
    @Args('category', { type: () => PrismaCategory }) Category: PrismaCategory, // use enum
  ) {
    return this.Prisma.product.findMany({
      where: { Category: Category },
      take: 4,
    });
  }
  @Query(() => [Product], { name: 'filterdProducts' })
  async filterdProducts(
    @Args('minPrice', { type: () => Number, nullable: true }) minPrice?: number,
    @Args('maxPrice', { type: () => Number, nullable: true }) maxPrice?: number,
    @Args('sort', { type: () => String, nullable: true }) sort?: string,
    @Args({ name: 'categories', type: () => [String], nullable: true })
    categories?: string[],
    @Args('search', { type: () => String, nullable: true })
    search?: string, // ✅ correctly placed here
  ) {
    // ✅ Build the WHERE clause dynamically
    const where: any = {};
    // ✅ Add search term (checks both name & description)
    if (search) {
      const lowerCasedTerm = search.toLowerCase();
      where.OR = [
        {
          name: {
            contains: lowerCasedTerm,
            mode: 'insensitive',
          },
        },
        {
          description: {
            contains: lowerCasedTerm,
            mode: 'insensitive',
          },
        },
      ];
    }
    if (minPrice !== undefined || maxPrice !== undefined) {
      where.price = {};
      if (minPrice !== undefined) where.price.gte = minPrice;
      if (maxPrice !== undefined) where.price.lte = maxPrice;
    }

    if (categories && categories.length > 0) {
      where.Category = { in: categories as PrismaCategory[] };
    }

    // ✅ Build ORDER BY clause
    let orderBy: any = {};
    switch (sort) {
      case 'price-low-high':
        orderBy = { price: 'asc' };
        break;
      case 'price-high-low':
        orderBy = { price: 'desc' };
        break;
      case 'name-a-z':
        orderBy = { name: 'asc' };
        break;
      case 'name-z-a':
        orderBy = { name: 'desc' };
        break;
      default:
        orderBy = { price: 'asc' }; // fallback
    }

    // ✅ Run the Prisma query
    return this.Prisma.product.findMany({
      where,
      orderBy,
    });
  }
}
