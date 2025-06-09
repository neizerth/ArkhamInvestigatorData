import { getChaosBagTokenReference } from "@/components/chaos-bag";
import { getArkhamCardsReferenceCards } from "@/components/meta";
import type { ReferenceCard } from "@/model";
import type { ArkhamDivider } from "arkham-divider-data";
import { ascend, isNotNil, prop } from "ramda";
import { getEncounterSetIcon } from "../../icons";
import { getReferenceCardChaosTokens } from "./getReferenceCardChaosTokens";
import { getReferenceCardDifficulty } from "./getReferenceCardDifficulty";

type Story = ArkhamDivider.Core["stories"][number];

export const getReferenceCards = (story: Story): ReferenceCard[] => {
	const { pack_code, pack_codes = [] } = story;
	const packCodes = [...pack_codes, pack_code].filter(isNotNil);

	const cards = getArkhamCardsReferenceCards();

	return cards
		.filter(({ pack_code }) => packCodes.includes(pack_code))
		.map((card): ReferenceCard => {
			const realText = card.real_text || "";
			const realBackText = card.real_back_text || "";
			return {
				code: card.code,
				encounter_code: card.encounter_code,
				position: card.position,
				name: card.real_name,
				text: realText,
				back_text: realBackText,
				locale: "en",
				reference: getChaosBagTokenReference([realText]),
				back_reference: getChaosBagTokenReference([realBackText]),
				icon: getEncounterSetIcon(card.encounter_code),
				difficulty: getReferenceCardDifficulty(realText),
				back_difficulty: getReferenceCardDifficulty(realBackText),
				...getReferenceCardChaosTokens(card),
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
					text.includes(mode),
				);

			return includeMode(title) || includeMode(back_title);
		})
		.sort(ascend(prop("position")));
};
