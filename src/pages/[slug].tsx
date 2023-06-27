import { getPageBySlug } from "@/sanity-requests/getPageBySlug";
import { getPagesSlug } from "@/sanity-requests/getPagesSlug";
import { Page } from "@/types/Page";
import { PortableText } from "@portabletext/react";

const PageSlug = ({ page }: { page: Page }) => {
  return (
    <div>
      <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">
        {page && page.title}
      </h1>

      <div className="text-lg text-gray-700 mt-10">
        <PortableText value={page && page.content} />
      </div>
    </div>
  );
};

export default PageSlug;

export const getStaticPaths = async () => {
  const pagesSlug = await getPagesSlug();

  const paths = pagesSlug.map((page) => ({
    params: {
      slug: page.slug,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const page = await getPageBySlug(slug);

  return {
    props: {
      page,
    },
  };
};
