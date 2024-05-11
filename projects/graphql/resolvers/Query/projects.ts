import type { QueryResolvers } from "./../../types.generated";
export const projects: NonNullable<QueryResolvers["projects"]> = async (
  _parent,
  _arg,
  _ctx
) => {
  /* Implement Query.projects resolver logic here */
  return [{ id: "1", name: "Project 1", description: "Project 1 description" }];
};
