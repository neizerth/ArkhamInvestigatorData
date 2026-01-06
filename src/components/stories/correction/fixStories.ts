import { fixWrittenInRock } from "./fixWrittenInRock";
import { pipe } from "ramda";

export const fixStories = pipe(fixWrittenInRock);