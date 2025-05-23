import { getArkhamCardsReferenceCards } from "@/components/meta";
import type { ReferenceCard } from "@/model";
import type { ArkhamDivider } from "arkham-divider-data";
import { ascend, isNotNil, prop } from "ramda";
import { getEncounterSetIcon } from "../icons";

type Story = ArkhamDivider.Core["stories"][number];

export const getReferenceCards = (story: Story): ReferenceCard[] => {
  const { pack_code, pack_codes = [] } = story;
  const packCodes = [...pack_codes, pack_code].filter(isNotNil);

  const cards = getArkhamCardsReferenceCards();

  return cards
    .filter(({ pack_code }) => packCodes.includes(pack_code))
    .map((card): ReferenceCard => {
      return {
        code: card.code,
        encounter_code: card.encounter_code,
        position: card.position,
        name: card.real_name,
        text: card.real_text,
        back_text: card.real_back_text,
        locale: "en",
        icon: getEncounterSetIcon(card.encounter_code),
      };
    })
    .filter((ref) => {
      if (!ref.text || !ref.back_text) {
        return false;
      }
      const { text, back_text } = ref;
      const [title] = text.split("\n");
      const [back_title] = back_text.split("\n");

      const includeMode = (text: string) =>
        ["Easy", "Standard", "Hard", "Expert"].some((mode) =>
          text.includes(mode)
        );

      return includeMode(title) || includeMode(back_title);
    })
    .sort(ascend(prop("position")));
};
