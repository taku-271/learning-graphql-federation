const forms = [
  {
    id: "1",
    name: "Form 1",
    description: "Form 1 description",
  },
  {
    id: "2",
    name: "Form 2",
    description: "Form 2 description",
  },
  {
    id: "3",
    name: "Form 3",
    description: "Form 3 description",
  },
];

import type { FormResolvers } from "./../types.generated";
export const Form: FormResolvers = {
  /* Implement Form resolver logic here */
  __resolveReference(form) {
    return forms.find((f) => f.id === form.id);
  },
};
