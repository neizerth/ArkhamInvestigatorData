import type { ArkhamCardsReferenceTranslation } from "@/api/arkhamCards";

export type ReferenceCard = ArkhamCardsReferenceTranslation & {
  code: string;
  encounter_code: string;
  icon?: string;
  position: number;
};
