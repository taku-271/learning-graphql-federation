import type { CodegenConfig } from "@graphql-codegen/cli";
import { defineConfig } from "@eddeee888/gcg-typescript-resolver-files";

const config: CodegenConfig = {
  schema: "./src/schema.graphql",
  generates: {
    "../graphql/": defineConfig({
      resolverRelativeTargetDir: "../../graphql/resolvers",
      typesPluginsConfig: {
        federation: true,
      },
    }),
  },
};

export default config;
