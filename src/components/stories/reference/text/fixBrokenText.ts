import { pipe } from "ramda";
import { fixBrokenIcons } from "./fixBrokenIcons";
import { fixBrokenTags } from "./fixBrokenTags";

export const fixBrokenText = pipe(fixBrokenIcons, fixBrokenTags);
