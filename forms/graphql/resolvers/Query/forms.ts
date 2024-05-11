import type { QueryResolvers } from "./../../types.generated";
export const forms: NonNullable<QueryResolvers["forms"]> = async (
  _parent,
  _arg,
  _ctx
) => {
  /* Implement Query.forms resolver logic here */
  return [{ id: "1", name: "Form 1", description: "Form 1 description" }];
};
