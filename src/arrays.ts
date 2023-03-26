import { z } from 'zod';

export const stringArray = z.array(z.string());

// equivalent
// const stringArray = z.string().array();

const optionalArray = z.string().optional().array();
type OptionalArray = z.infer<typeof optionalArray>; // (string | undefined)[]

const arrayOptional = z.string().array().optional();
type ArrayOptional = z.infer<typeof arrayOptional>; // string[] | undefined

// .element
export const strArrElement = stringArray.element;

// .nonempty
export const strArrNonempty = stringArray.nonempty({
  message: "Can't be empty!",
});

// .min/.max/.length
const numArray = z.array(z.number());
export const minFive = numArray.min(5);
export const maxFive = numArray.max(5);
export const lenFive = numArray.length(5);
