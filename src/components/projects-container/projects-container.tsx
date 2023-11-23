import { FetchedProjects } from "@/types";
import Project from "./project";
import { fetchProjects } from "@/actions/fetch-projects";

const ProjectsContainer = async ({
  projects,
}: {
  projects: FetchedProjects;
}) => {
  return (
    <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
      {projects.projects.map((project) => (
        <Project key={project.url} project={project} />
      ))}
    </div>
  );
};
export default ProjectsContainer;
