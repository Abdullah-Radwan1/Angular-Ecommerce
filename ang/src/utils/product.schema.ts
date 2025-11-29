import { z } from 'zod';

const ProductCategory = z.enum(['PERFUMES', 'BODY_SPRAY', 'AIR_FRESHENER']);

const ProductSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  price: z.number(),
  image: z.string().url(),
  description: z.string(),
  isFeatured: z.boolean(),
  stripePriceId: z.string().optional(),
  Category: ProductCategory,
  tags: z.array(z.string()), // ✅ this is the correct tags type
});

const featuredSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  image: z.string().url(),
});

export type ProductDto = z.infer<typeof ProductSchema>;
export type featuredDto = z.infer<typeof featuredSchema>;
