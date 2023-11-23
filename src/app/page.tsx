import ProjectLoading from "@/components/projects-container/project-loading";
import ProjectsContainer from "@/components/projects-container/projects-container";
import SearchContainer from "@/components/search-container/search-container";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | "" };
}) {
  return (
    <div className="px-3 py-6 flex-grow">
      <div className="max-w-5xl mx-auto space-y-6">
        <SearchContainer />
        <Suspense
          key={`${searchParams.search}, ${searchParams.sort}, ${searchParams.filter}`}
          fallback={<ProjectLoading />}
        >
          <ProjectsContainer searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}
