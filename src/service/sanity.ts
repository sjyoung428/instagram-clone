import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: false, // set to `true` to fetch from edge cache
  apiVersion: "2023-04-17", // use current date (YYYY-MM-DD) to target the latest API version
  token: process.env.SANITY_SECRET_TOKEN, // Only if you want to update content with the client
});

// https://www.sanity.io/docs/image-url

const builder = ImageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source).width(800).url();
};
