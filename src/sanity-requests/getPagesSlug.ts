import { client } from "@/lib/sanity";
import { Page } from "@/types/Page";

export const getPagesSlug = async () => {
  const pagesSlugQuery = `*[_type == "page"]{
        "slug": slug.current
    }`;

  const pagesSlug: Page[] = await client.fetch(pagesSlugQuery);

  return pagesSlug;
};
