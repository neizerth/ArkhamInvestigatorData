import { ARKHAM_CARDS_GRAPHQL_URL } from "@/config/api";
import type { InvestigatorFaction } from "@/model";
import { gql, request } from "graphql-request";

export type ArkhamCardsInvestigator = {
	id: string;
	code: string;
	real_text: string;
	real_name: string;
	real_subname: string;
	real_flavor: string;
	real_traits: string;
	real_taboo_original_text: string | null;
	real_taboo_text_change: string | null;
	faction_code: InvestigatorFaction;
	sanity: number;
	health: number;
	skill_agility: number;
	skill_combat: number;
	skill_intellect: number;
	skill_willpower: number;
	translations: ArkhamCardsInvestigatorTranslation[];
	taboo_set: ArkhamCardsTabooSet | null;
	spoiler: boolean;
};

export type ArkhamCardsInvestigatorTranslation = {
	locale: string;
	name: string;
	subname: string;
	text: string;
	traits: string;
	flavor: string;

	taboo_original_text: string;
	taboo_text_change: string;
};

export type ArkhamCardsTabooSet = {
	id: number;
	date: string;
	code: string;
	name: string;
};

export const loadArkhamCardsInvestigators = async () => {
	const document = gql`
    {
      all_card(
        where: {
          _and: [
            { type_code: { _eq: investigator } }
            {
              _or: [
                { taboo_set: { current: { _eq: true } } }
                { taboo_set_id: { _is_null: true } }
              ]
            }
          ]
        }
      ) {
        id
        real_text
        code
        real_name
        real_subname
        real_flavor
        real_traits
        faction_code
        sanity
        health
        skill_agility
        skill_combat
        skill_intellect
        skill_willpower
        translations {
          traits
          flavor
          subname
          name
          locale
          taboo_original_text
          taboo_text_change
          text
        }
        taboo_set {
          id
          code
          name
          date
        }
        real_taboo_original_text
        real_taboo_text_change
      }
    }
  `;

	type Response = {
		all_card: ArkhamCardsInvestigator[];
	};

	const data = await request<Response>(ARKHAM_CARDS_GRAPHQL_URL, document);

	return data.all_card;
};
