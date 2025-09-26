import {
  defineConfig,
  defineDocs,
  defineCollections,
  frontmatterSchema,
} from "fumadocs-mdx/config";
import { z } from "zod";

// Justification : Conforme à l'extrait "Configure Multiple Content Types".
// On utilise defineDocs pour la documentation afin de bénéficier de la gestion des `meta.json`.
export const { docs, meta } = defineDocs({
  dir: "content/docs",
});

// Justification : Conforme au même extrait.
// On utilise defineCollections pour le blog, avec un schéma étendu pour inclure l'auteur et la date.
export const blog = defineCollections({
  type: "doc",
  dir: "content/blog",
  schema: frontmatterSchema.extend({
    author: z.string().default("Alexandre"),
    date: z.string().date().or(z.date()).optional(),
  }),
});

export default defineConfig({
  mdxOptions: {
    // Options MDX
  },
});