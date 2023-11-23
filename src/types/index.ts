export interface Project {
  name: string;
  url: string;
  image: string;
  figmaUrl: string[];
  owners: { displayName: string }[];
}

export interface FetchedProjects {
  hasNextPage: boolean;
  after: string;
  projects: Project[];
}

interface Node {
  name: string;
  url: string;
  owners: { displayName: string }[];
  covers: { size_404_webp: { url: string } };
  allModules: { originalEmbed: string }[];
}

export interface BehanceResponse {
  data: {
    search: {
      pageInfo: {
        hasNextPage: boolean;
        endCursor: string;
      };
      nodes: Node[];
    };
  };
}

export interface Variables {
  query: string;
  filter: { sort?: string; field?: string };
  first: number;
  after: string;
}
