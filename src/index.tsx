import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import App from "./App";
import theme from "./theme";

const httpLink = createHttpLink({
  uri: "/api",
  // credentials: "same-origin",
  // fetchOptions: {
  // mode: "no-cors",
  // },
});

//
// const authMiddleware = new ApolloLink((operation, forward) => {
//   // add the authorization to the headers
//   operation.setContext(({ headers = {} }) => ({
//     headers: {
//       // "Access-Control-Allow-Credentials": true,
//       // "Access-Control-Allow-Origin": "*",
//       // "Access-Control-Allow-Methods": "GET,POST,OPTIONS,DELETE,PUT",
//       ...headers,
//       authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xNTIuMjI4LjIxNS45NDo4MVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2NTUwMjc0MzAsImV4cCI6MTY1NzYxOTQzMCwibmJmIjoxNjU1MDI3NDMwLCJqdGkiOiJrN3l5dzFDTXRqSjdGdlRIIiwic3ViIjoyLCJwcnYiOiJjYjc4YjVlMWZmY2UwZjgzMWQwMjMxZGYyYzhiZDdjODA2NDc3NzYyIn0.ARCCjK0yHFfLYxmDaK4R0Hcf3ItNcYdrA3VeDVZ4k2A`,
//     },
//   }));
//   console.log(operation);
//   return forward(operation);
// });

const authLink = setContext((_, { headers }) =>
  // get the authentication token from local storage if it exists
  ({
    headers: {
      ...headers,
      authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xNTIuMjI4LjIxNS45NDo4MVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2NTU2NDE2NTMsImV4cCI6MTY1ODIzMzY1MywibmJmIjoxNjU1NjQxNjUzLCJqdGkiOiIxZFJBTTQ2SUpUdG1rRWNWIiwic3ViIjoyLCJwcnYiOiJjYjc4YjVlMWZmY2UwZjgzMWQwMjMxZGYyYzhiZDdjODA2NDc3NzYyIn0.jUKh9u6_nT8KqYj3Ii7gHaPSFOM-LTNRliVqdfg83Fo`,
    },
  })
);

// const authLink = setContext((_, previousContext) => {
//   // get the authentication token from local storage if it exists
//   // const token = localStorage.getItem("token");
//   console.log(previousContext);
//   // return the headers to the context so httpLink can read them
//   return {
//
//   };
// });

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// const client = new ApolloClient({
//   link: httpLink.concat(authMiddleware),
//   cache: new InMemoryCache(),
// });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>
);
