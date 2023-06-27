import { client } from "@/lib/sanity";
import { Project } from "@/types/Project";

export const getProjectsSlug = async () => {
  const projectsSlugQuery = `*[_type == 'project']{
        "slug" : slug.current 
    }`;

  const projectsSlug: Project[] = await client.fetch(projectsSlugQuery);

  return projectsSlug;
};
