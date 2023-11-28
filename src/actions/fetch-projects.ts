"use server";

import { headers, query, endpoint } from "./projects-query";
import { BehanceResponse, FetchedProjects, Project, Variables } from "@/types";

const fetchProjects = async (
  search: string,
  sort: string,
  filter: string,
  after = ""
): Promise<FetchedProjects> => {
  let hasNextPage: boolean = true;
  let projects: Project[] = [];
  let previousProjectsLength = 0;
  let pages = 0;
  let startTime = Date.now();

  const getProjects = async () => {
    const variables: Variables = {
      query: search,
      filter: {
        sort: sort || "recommended",
      },
      first: 48,
      after,
    };
    if (filter) variables.filter.field = filter;

    const res = await fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify({ query, variables }),
    });

    const data: BehanceResponse = await res.json();

    return data.data.search;
  };

  do {
    pages += 1;
    const results = await getProjects();
    hasNextPage = results.pageInfo.hasNextPage;
    after = results.pageInfo.endCursor;
    const nodes = results.nodes;
    for (let i = 0; i < nodes.length; ++i) {
      const project = nodes[i];
      const moduleSet = nodes[i].allModules;
      const filteredModules = [];
      for (let j = 0; j < moduleSet.length; ++j) {
        const indivModule = moduleSet[j];
        if (
          indivModule.originalEmbed &&
          indivModule.originalEmbed.includes("figma.com")
        ) {
          const matchResult = indivModule.originalEmbed.match(/url=([^"]*)"/);
          if (matchResult && matchResult[1]) {
            const decodedUrl = decodeURIComponent(
              decodeURIComponent(matchResult[1])
            );
            filteredModules.push(decodedUrl);
          }
        }
      }
      const isWithFigma = filteredModules.length;
      if (!isWithFigma) continue;
      const {
        name,
        url,
        owners,
        covers: { size_max_808_webp },
      } = project;
      previousProjectsLength += 1;
      pages = 0;
      projects.push({
        name,
        url,
        owners,
        image: size_max_808_webp.url,
        figmaUrl: filteredModules,
      });
    }
    if (pages == 5 && projects.length == previousProjectsLength) {
      hasNextPage = false;
      break;
    }
  } while (hasNextPage && Date.now() - startTime < 9000);
  return {
    hasNextPage,
    after,
    projects,
  };
};

export { fetchProjects };
