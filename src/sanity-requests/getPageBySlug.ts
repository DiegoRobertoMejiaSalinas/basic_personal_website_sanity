import { client } from "@/lib/sanity";
import { Page } from "@/types/Page";

export const getPageBySlug = async (slug: string) => {
  const pageBySlugQuery = `*[_type == 'page' && slug.current == '${slug}'][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        content
    }`;

  const pageBySlug: Page = await client.fetch(pageBySlugQuery);

  return pageBySlug;
};
