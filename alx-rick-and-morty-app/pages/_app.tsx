import "@/styles/globals.css";
import type { AppProps } from "next/app";
// Import Apollo Provider to wrap your whole app
//import { ApolloProvider } from "@apollo/client";

// Import the Apollo client you just created
//import client from "@/graphql/apolloClient";

import ErrorBoundary from "@/components/ErrorBoundary";

// Main app component
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>  
       <Component {...pageProps} />
       
       </ErrorBoundary>
    // Make Apollo client available throughout the app
   //  <ApolloProvider client={client}>
      // <Component {...pageProps} />  
    // </ApolloProvider>
    
  );
}
