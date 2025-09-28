// libs/shared/product.schema.ts
import { z } from 'zod';

const ProductSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  price: z.number(), // Prisma uses Int but API returns it as JS number
  image: z.string().url(),
  description: z.string(),
  isFeatured: z.boolean(),
  stripePriceId: z.string().optional(),
});

const featuredSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  price: z.number(), // Prisma uses Int but API returns it as JS number
  image: z.string().url(),
});

export type ProductDto = z.infer<typeof ProductSchema>;
export type featuredDto = z.infer<typeof featuredSchema>;
