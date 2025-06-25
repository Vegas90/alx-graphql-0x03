// Import the gql function from Apollo to define GraphQL queries
import { gql } from "@apollo/client";

// Create a query to get episodes, possibly filtered and paginated
export const GET_EPISODES = gql`
  query getEpisodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      info {
        pages       // Total number of pages available
        next        // The next page number
        prev        // The previous page number
        count       // Total number of episodes
      }
      results {
        id          // Unique ID of the episode
        name        // Title of the episode
        air_date    // When it aired
        episode     // The episode code (e.g., S01E01)
      }
    }
  }
`;
// 🧠 Layman Explanation
// This is like saying: "Give me a list of episodes, including names, dates, and how many pages of results exist."
// It's reusable, and you can ask for different pages or apply filters.