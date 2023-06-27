import { client } from "@/lib/sanity";
import { Project } from "@/types/Project";

export const getProjectBySlug = async (slug: string) => {
  const projectQuery = `*[_type == 'project' && slug.current == '${slug}'][0]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    image,
    url,
    content
  }`;

  const project: Project = await client.fetch(projectQuery);

  return project;
};
