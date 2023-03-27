import { z } from 'zod';

const baseCategorySchema = z.object({
  name: z.string(),
});

export type Category = z.infer<typeof baseCategorySchema> & {
  subcategories: Category[];
};

export const categorySchema: z.ZodType<Category> = baseCategorySchema.extend({
  subcategories: z.lazy(() => categorySchema.array()),
});
