import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";
import { getPosts } from "../notion";

const blog = defineCollection({
  loader: async () => {
    // const response = await getPosts();
    // return response.map((post) => ({
    //   id: post?.id || "",
    //   title: post?.title || "",
    //   date: post?.date || "",
    //   content: post?.content || "",
    //   url: post?.url || "",
    // }));
    return [];
  },

  schema: z.object({
    id: z.string(),
    title: z.string(),
    date: z.string(),
    content: z.string(),
    url: z.string(),
  }),
});

export const collections = { blog };
