import { ARKHAM_CARDS_GRAPHQL_URL } from "@/config/api";
import { gql, request } from "graphql-request";
import { mapLinkedCode } from "../../format";
import type { ArkhamCardsInvestigator } from "../../model";

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
                { taboo_set_id: { _eq: 0 } }
              ]
            }
          ]
        }
      ) {
        id
        alternate_of_code
        real_text
        gender
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
          taboo_original_back_text
          taboo_original_text
          taboo_text_change
          text
        }
        taboo_set {
          name
          date
          id
          code
        }
        real_taboo_original_text
        real_taboo_text_change
        pack {
          real_name
          code
          position
          official
          translations {
            locale
            name
          }
          cycle {
            official
            real_name
            code
            position
            translations {
              locale
              name
            }
          }
        }
      }
    }
  `;

	type Response = {
		all_card: ArkhamCardsInvestigator[];
	};

	const data = await request<Response>(ARKHAM_CARDS_GRAPHQL_URL, document);

	const linked = data.all_card.map(mapLinkedCode);

	return linked;
};
