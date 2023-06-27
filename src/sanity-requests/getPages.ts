import { client } from "@/lib/sanity";
import { Page } from "@/types/Page";

export const getPages = async () => {
  const pagesQuery = `*[_type == 'page']{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        content
    }`;

  const pages: Page[] = await client.fetch(pagesQuery);

  return pages;
};
