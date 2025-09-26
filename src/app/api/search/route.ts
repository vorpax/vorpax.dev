import { createFromSource } from "fumadocs-core/search/server";
import { docSource } from "@/lib/source";

export const { GET } = createFromSource(docSource, {
  // https://docs.orama.com/docs/orama-js/supported-languages
  language: "english",
});
