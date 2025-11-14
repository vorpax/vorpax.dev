import {
  defineConfig,
  defineDocs,
  defineCollections,
  frontmatterSchema,
  
} from "fumadocs-mdx/config";
import { z } from "zod";

export const { docs, meta } = defineDocs({
  dir: "content/docs",
});

export const blog = defineCollections({
  type: "doc",
  dir: "content/blog",
  schema: frontmatterSchema.extend({
    author: z.string().default("Alexandre"),
    date: z.iso.date().optional(),
  }),
});

export default defineConfig({
  mdxOptions: {
    // Shiki syntax highlighting is enabled by default in fumadocs-mdx
  },
});