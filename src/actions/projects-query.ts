import { v1 as uuid } from "uuid";

const endpoint = "https://www.behance.net/v3/graphql";
const bcp = uuid();
const headers = new Headers({
  "Content-Type": "application/json",
  "X-BCP": bcp,
  "X-Requested-With": "XMLHttpRequest",
  Cookie: `bcp=${bcp}`,
});
const query = `
query GetProjectSearchResults($query: query, $filter: SearchResultFilter, $first: Int!, $after: String) {
  search(query: $query, type: PROJECT, filter: $filter, first: $first, after: $after) {
    pageInfo {
      hasNextPage
      endCursor
    }
    nodes {
      ... on Project {
        name
        url
        owners {
          displayName
        }
        covers {
          size_max_808_webp {
            url
          }
        }
        allModules {
          ... on EmbedModule {
            originalEmbed
          }
        }
      }
    }
  }
}`;

export { headers, endpoint, query };
