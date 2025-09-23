import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      title: z.string().min(5, "El título debe tener al menos 5 caracteres"),
      description: z
        .string()
        .min(20, "La descripción debe tener al menos 20 caracteres"),
      publishDate: z.date(),
      updatedDate: z.date().optional(),
      author: z.string().default("Vladimir Azpeitia"),
      lang: z.enum(["es", "en"]).default("es"),
      tags: z.array(z.string()).default([]),
      heroImage: z.string().optional(),
      draft: z.boolean().default(false),
      readingTime: z.number().int().positive().optional(),
      canonical: z.string().url().optional(),
    }),
});

export const collections = {
  blog,
};
