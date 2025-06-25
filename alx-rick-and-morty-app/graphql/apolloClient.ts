// Import necessary modules from Apollo Client
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

// Create the Apollo Client instance to communicate with the Rick & Morty API
const client = new ApolloClient({
  // The GraphQL API endpoint
  link: new HttpLink({
    uri: "https://rickandmortyapi.com/graphql"
  }),
  // Set up caching strategy using Apollo's in-memory cache
  cache: new InMemoryCache()
});

// Export the client so it can be used in the app
export default client;

// Explanation
// This sets up a connection between your app and the Rick & Morty API.
// Like a phone 📞 to call the Rick & Morty server and ask for data.
// It uses Apollo Client, which makes it easy to work with GraphQL in React/Next.js.