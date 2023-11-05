import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      priority: z.number(),
      name: z.string(),
      image: image(),
      imageAlt: z.string(),
      description: z.string(),
      technologies: z.array(z.string()),
      links: z.array(z.object({ name: z.string(), url: z.string() })),
    }),
});

const workplaces = defineCollection({
  type: "data",
  schema: z.object({
    priority: z.number(),
    companyName: z.string(),
    title: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    startDate: z.string().regex(/\d{2}.\d{4}/),
    endDate: z.string().regex(/\d{2}.\d{4}/),
  }),
});

export const collections = {
  projects,
  workplaces,
};
