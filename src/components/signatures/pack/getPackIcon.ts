import { getIcons, getPacks, getStories } from "@/components/meta";
import { propEq } from "ramda";

export const getPackIcon = (code: string) => {
  const fromStory = getStories().find(
    ({ pack_code, pack_codes = [] }) =>
      pack_code === code || pack_codes.includes(code)
  );

  if (fromStory?.icon) {
    return fromStory?.icon;
  }

  const fromStoryCode = getStories().find(propEq(code, "code"));

  if (fromStoryCode?.icon) {
    return fromStoryCode?.icon;
  }

  const icon = getIcons().find(propEq(code, "icon"));

  if (icon) {
    return code;
  }

  const fromStoryInvestigators = getStories().find(({ investigators }) =>
    investigators.some(propEq(code, "pack_code"))
  );

  if (fromStoryInvestigators?.icon) {
    return fromStoryInvestigators.icon;
  }

  console.log(`pack icon ${code} not found`);

  return code;
};
