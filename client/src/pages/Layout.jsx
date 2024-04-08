import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          clients: {
            merge(existing, incoming) {
              return incoming;
            },
          },
          projects: {
            merge(existing, incoming) {
              return incoming;
            },
          },
        },
      },
    },
  });

  const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    cache,
  });
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <Outlet />
        </div>
      </ApolloProvider>
    </>
  );
};

export default Layout;
