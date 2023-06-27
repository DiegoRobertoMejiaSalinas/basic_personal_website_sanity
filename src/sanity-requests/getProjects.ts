import { client } from "@/lib/sanity";
import { Project } from "@/types/Project";

export const getProjects = async () => {
  const projectsQuery = `
        *[_type == 'project']{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            image,
            url,
            content
        }
    `;

  const projects: Project[] = await client.fetch(projectsQuery);

  return projects;
};
