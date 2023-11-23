/* eslint-disable react/no-unescaped-entities */
"use client";

import { fetchProjects } from "@/actions/fetch-projects";
import { FetchedProjects, Project as ProjectType } from "@/types";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Project from "./project";

const LoadMore = ({
  toFetch: { search, sort, filter },
  projects,
}: {
  toFetch: {
    search: string;
    sort: string;
    filter: string;
  };
  projects: FetchedProjects;
}) => {
  const [projectsList, setProjectsList] = useState<ProjectType[]>([]);
  const [pagesLoaded, setPagesLoaded] = useState(projects.after);
  const [hasNextPage, setHasNextPage] = useState(projects.hasNextPage);
  const { ref, inView } = useInView();

  const loadMoreProjects = useCallback(async () => {
    const newProjects = await fetchProjects(search, sort, filter, pagesLoaded);
    setProjectsList((prevProjects) => [
      ...prevProjects,
      ...newProjects.projects,
    ]);
    setPagesLoaded(newProjects.after);
    setHasNextPage(newProjects.hasNextPage);
  }, [filter, pagesLoaded, search, sort]);

  useEffect(() => {
    if (inView && hasNextPage) {
      loadMoreProjects();
    }
  }, [inView, hasNextPage, loadMoreProjects]);

  return (
    <>
      {projectsList.map((project) => (
        <Project key={project.url} project={project} />
      ))}
      <div
        ref={ref}
        className="flex justify-center items-center w-full col-span-full"
      >
        {hasNextPage ? (
          <div className="h-5 w-5 rounded-full border-solid border-[3px] inline-block border-l-primary animate-spin"></div>
        ) : (
          <p className="text-sm text-muted-foreground">
            You're now free! The chain has been broken. [No more projects]
          </p>
        )}
      </div>
    </>
  );
};
export default LoadMore;
