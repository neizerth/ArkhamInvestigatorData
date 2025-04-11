import { getIcons, getStories } from "@/components/meta";
import { propEq } from "ramda";

export const getCycleIcon = (code: string) => {
  const fromStory = getStories().find(({ cycle_code }) => code === cycle_code);

  if (fromStory?.icon) {
    return fromStory.icon;
  }

  const icon = getIcons().find(propEq(code, "icon"));

  if (icon) {
    return code;
  }

  const fromStoryInvestigators = getStories().find(({ investigators }) =>
    investigators.some(propEq(code, "cycle_code"))
  );

  if (fromStoryInvestigators?.icon) {
    return fromStoryInvestigators.icon;
  }

  console.log(`cycle icon ${code} not found`);

  return code;
};
