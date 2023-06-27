import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { Image } from "sanity";

export const client = createClient({
  apiVersion: "2023-06-26",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: true,
  dataset: "production",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: Image) => {
  return builder.image(source).url();
};
