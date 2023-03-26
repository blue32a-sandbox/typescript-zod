import { z } from 'zod';

export const dog = z.object({
  name: z.string(),
  age: z.number(),
});
type Dog = z.infer<typeof dog>; // { name: string; age: number; }

// .keyof
export const dogKey = dog.keyof();

// .extend
export const dogWithBreed = dog.extend({
  breed: z.string(),
});

// .merge
const baseTeacher = z.object({ students: z.array(z.string()) });
const hasID = z.object({ id: z.string() });
export const teacher = baseTeacher.merge(hasID);
type Teacher = z.infer<typeof teacher>; // { students: string[], id: string }

// .pick/.omit
const recipe = z.object({
  id: z.string(),
  name: z.string(),
  ingredients: z.array(z.string()),
});
export const justTheName = recipe.pick({ name: true });
type JustTheName = z.infer<typeof justTheName>; // { name: string }

export const noIDRecipe = recipe.omit({ id: true });
type NoIDRecipe = z.infer<typeof noIDRecipe>; // { name: string, ingredients: string[] }

// .partial
const user = z.object({
  email: z.string(),
  username: z.string(),
  deep: z.object({
    str: z.string(),
  }),
});
export const partialUser = user.partial();
type PartialUser = z.infer<typeof partialUser>;

// .deepPartial
const dpuser = z.object({
  username: z.string(),
  location: z.object({
    latitude: z.number(),
    longitude: z.number(),
  }),
  strings: z.array(z.object({ value: z.string() })),
});
export const deepPartialUser = dpuser.deepPartial();
type DeepPartialUser = z.infer<typeof deepPartialUser>;

// .required
export const requiredUser = partialUser.required();
type RequiredUser = z.infer<typeof requiredUser>;

// .passthrough
const person = z.object({
  name: z.string(),
});
export const passthroughPerson = person.passthrough();

// .strict
export const strictPerson = person.strict();

// .strip
export const stripPerson = strictPerson.strip();

// .catchall
export const catchallPerson = person.catchall(z.number());
