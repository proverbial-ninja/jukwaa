import { z, defineCollection, reference } from "astro:content";
// Define a `type` and `schema` for each collection
const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    startDate: z.date(),
    description: z.string(),
    tags: z.array(z.string()),
  }),
});

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    startDate: z.date(),
    description: z.string(),
    layout_type: z.string(),
    author: z.string().optional(),
    link: z.string().optional(),
    isthrowback: z.boolean().default(false).optional(),
    project: reference("projects"),
    tags: z.array(z.string()),
  }),
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  projects: projectsCollection,
  posts: postsCollection,
};
