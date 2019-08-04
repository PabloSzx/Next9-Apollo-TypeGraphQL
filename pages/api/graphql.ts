import "reflect-metadata";

import { ApolloServer } from "apollo-server-micro";
import { buildSchemaSync, Query, Resolver } from "type-graphql";

import { Book } from "../../src/graphql";

const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton",
  },
];

@Resolver(_of => Book)
class BookResolver {
  @Query(_returns => [Book])
  books() {
    return books;
  }
}

const apolloServer = new ApolloServer({
  schema: buildSchemaSync({
    resolvers: [BookResolver],
    validate: false,
    globalMiddlewares: [],
  }),
  playground:
    process.env.NODE_ENV !== "production"
      ? {
          settings: {
            "request.credentials": "include",
          },
        }
      : false,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
