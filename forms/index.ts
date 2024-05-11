import { buildSubgraphSchema } from "@apollo/federation";
import { ApolloServer } from "apollo-server";
import { resolvers } from "./graphql/resolvers.generated";
import { typeDefs } from "./graphql/typeDefs.generated";

const server = new ApolloServer({
  schema: buildSubgraphSchema([{ typeDefs, resolvers }]),
});

server.listen(3001).then(({ url }: { url: string }) => {
  console.log(`🚀 Server ready at ${url}`);
});
