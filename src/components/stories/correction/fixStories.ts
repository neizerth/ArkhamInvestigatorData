import { pipe } from "ramda";
import { fixWrittenInRock } from "./fixWrittenInRock";

export const fixStories = pipe(fixWrittenInRock);
