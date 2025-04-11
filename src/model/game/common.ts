import type { InvestigatorAbility } from "./abilities";
import type { InvestigatorImage } from "./image";
import type { InvestigatorSkin, InvestigatorVariant } from "./options";

export type Investigator = {
  code: string;
  previewId?: string;
  variantName?: string;
  additionalAction?: boolean;
  image: InvestigatorImage;
  variants?: InvestigatorVariant[];
  skins?: InvestigatorSkin[];
  multiselect?: boolean;
  abilities?: InvestigatorAbility[];
  roles?: InvestigatorFaction[];
  spoiler?: boolean;
};

export type InvestigatorFaction =
  | "guardian"
  | "rogue"
  | "seeker"
  | "mystic"
  | "survivor"
  | "neutral";
