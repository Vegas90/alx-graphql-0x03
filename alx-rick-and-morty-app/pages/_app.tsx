import "@/styles/globals.css";
import type { AppProps } from "next/app";
// Import Apollo Provider to wrap your whole app
//import { ApolloProvider } from "@apollo/client";

// Import the Apollo client you just created
//import client from "@/graphql/apolloClient";

import ErrorBoundary from "@/components/ErrorBoundary";

// _app.tsx or a config file
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'https://3fd8d512ab1d02e88cb40d0de78943a6@o4509604597923840.ingest.de.sentry.io/4509604740333648', // Copy this from your Sentry project dashboard
  tracesSampleRate: 1.0,
});

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
