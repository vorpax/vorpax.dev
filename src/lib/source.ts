import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";
import { docs, meta, blog as blogPosts } from ".source";
import type { InferPageType } from "fumadocs-core/source";


export const docsSource = loader({
  baseUrl: "/docs",
  source: createMDXSource(docs, meta),
});

export const blogSource = loader({
  baseUrl: "/blog",
  source: createMDXSource(blogPosts),
});


export type Page = InferPageType<typeof docsSource>;
export type BlogPage = InferPageType<typeof blogSource>;