import { client, urlFor } from "@/lib/sanity";
import { getProjectBySlug } from "@/sanity-requests/getProjectBySlug";
import { getProjectsSlug } from "@/sanity-requests/getProjectsSlug";
import { Project } from "@/types/Project";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

const ProjectSlug = ({ project }: { project: Project }) => {
  return (
    <div >
      <header className="flex justify-between items-center">
        <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">
          {project.name}
        </h1>
        <Link href={project.url}>
          <p className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition">
            View Project
          </p>
        </Link>
      </header>

      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={project.content} />
      </div>

      <Image
        src={urlFor(project.image)}
        alt={project.name}
        width={1920}
        height={1080}
        className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
      />
    </div>
  );
};

export default ProjectSlug;

export const getStaticPaths = async () => {
  const projects = await getProjectsSlug();

  const paths = projects.map((project) => ({
    params: {
      slug: project.slug,
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
  const project = await getProjectBySlug(slug);

  return {
    props: {
      project,
    },
  };
};
