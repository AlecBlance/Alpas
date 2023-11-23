import { FetchedProjects } from "@/types";
import LoadMore from "./load-more";
import Project from "./project";
import { fetchProjects } from "@/actions/fetch-projects";

const ProjectsContainer = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | "" };
}) => {
  const toFetch = {
    search: searchParams.search || "case study",
    sort: searchParams.sort || "",
    filter: searchParams.filter || "",
  };

  const projects: FetchedProjects = await fetchProjects(
    toFetch.search,
    toFetch.sort,
    toFetch.filter
  );

  return (
    <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
      {projects.projects.map((project) => (
        <Project key={project.url} project={project} />
      ))}
      <LoadMore toFetch={toFetch} projects={projects} />
    </div>
  );
};
export default ProjectsContainer;
