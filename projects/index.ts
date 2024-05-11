import { ApolloServer } from "apollo-server";
import { typeDefs } from "./interface/src/schema/typeDefs.generated";
import { resolvers } from "./interface/src/schema/resolvers.generated";
import { buildSubgraphSchema } from "@apollo/federation";

const server = new ApolloServer({
  schema: buildSubgraphSchema([{ typeDefs, resolvers }]),
});

server
  .listen(3000)
  .then(({ url }: { url: string }) => console.log(`Server ready at ${url}`));
