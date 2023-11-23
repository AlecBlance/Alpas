import { fetchProjects } from "@/actions/fetch-projects";
import LoadMore from "@/components/projects-container/load-more";
import Project from "@/components/projects-container/project";
import SearchContainer from "@/components/search-container/search-container";
import { FetchedProjects } from "@/types";

export default async function Home() {
  const toFetch = {
    search: "case study",
    sort: "",
    filter: "",
  };
  const projects: FetchedProjects = await fetchProjects(
    toFetch.search,
    toFetch.sort,
    toFetch.filter
  );

  return (
    <div className="px-3 py-6 flex-grow">
      <div className="max-w-5xl mx-auto space-y-6">
        <SearchContainer />
        <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {projects.projects.map((project) => (
            <Project key={project.url} project={project} />
          ))}
          <LoadMore toFetch={toFetch} projects={projects} />
        </div>
      </div>
    </div>
  );
}
