import { z } from 'zod';

const person = z.object({
  name: z.string(),
});
const employee = z.object({
  role: z.string(),
});
export const employedPerson = z.intersection(person, employee);

// equivalent to:
// const employedPerson = person.and(employee);
