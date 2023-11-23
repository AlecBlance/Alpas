import { fetchProjects } from "@/actions/fetch-projects";
import ProjectsContainer from "@/components/projects-container/projects-container";
import SearchContainer from "@/components/search-container/search-container";
import { FetchedProjects } from "@/types";

export default async function Home() {
  const projects: FetchedProjects = await fetchProjects("case study", "", "");

  return (
    <div className="px-3 py-6 flex-grow">
      <div className="max-w-5xl mx-auto space-y-6">
        <SearchContainer />
        <ProjectsContainer projects={projects} />
      </div>
    </div>
  );
}
