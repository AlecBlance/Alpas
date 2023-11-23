import ProjectsContainer from "@/components/projects-container/projects-container";
import SearchContainer from "@/components/search-container/search-container";

export default function Home() {
  return (
    <div className="px-3 py-6 flex-grow">
      <div className="max-w-5xl mx-auto space-y-6">
        <SearchContainer />
        <ProjectsContainer />
      </div>
    </div>
  );
}
