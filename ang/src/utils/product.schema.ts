// libs/shared/product.schema.ts
import { z } from 'zod';

export const ProductSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  price: z.number(), // Prisma uses Int but API returns it as JS number
  image: z.string().url(),
  description: z.string(),
  isFeatured: z.boolean(),
  stripePriceId: z.string().optional(),
});

export type ProductDto = z.infer<typeof ProductSchema>;
