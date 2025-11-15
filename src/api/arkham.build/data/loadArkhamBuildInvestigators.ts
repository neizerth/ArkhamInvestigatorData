import { ArkhamCardsInvestigator } from "@/api/arkhamCards";
import { isNotNil, pick, prop } from "ramda";
import { getArkhamBuildProjects } from "../lib/getArkhamBuildProjects";
import { loadArkhamBuildPacks } from "./loadArkhamBuildPacks";

export const loadArkhamBuildInvestigators = () => {
	const projects = getArkhamBuildProjects();
	const packs = loadArkhamBuildPacks();
	return projects
		.flatMap((project) =>
			project.data.cards.filter((card) => card.type_code === "investigator"),
		)
		.map((card): ArkhamCardsInvestigator => {
			const pack = packs.find((pack) => pack.code === card.pack_code);

			if (!pack) {
				return null;
			}
			return {
				...pick(
					[
						"code",
						"name",
						"subname",
						"flavor",
						"traits",
						"text",
						"health",
						"sanity",
						"skill_agility",
						"skill_combat",
						"skill_intellect",
						"skill_willpower",
						"faction_code",
					],
					card,
				),
				id: card.code,
				real_name: card.name,
				real_subname: card.subname,
				real_flavor: card.flavor,
				real_traits: card.traits,
				real_text: card.text,
				alternate_of_code: null,
				linked_code: null,
				taboo_set: null,
				real_taboo_original_text: null,
				real_taboo_text_change: null,
				gender: "nb",
				translations: [],
				spoiler: false,
				pack,
			};
		})
		.filter(isNotNil);
};
