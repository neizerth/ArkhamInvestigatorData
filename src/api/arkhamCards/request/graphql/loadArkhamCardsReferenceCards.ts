import { ARKHAM_CARDS_GRAPHQL_URL } from "@/config/api";
import { gql, request } from "graphql-request";
import type { ArkhamCardsReference } from "../../model";

export const loadArkhamCardsReferenceCards = async () => {
	console.log("loading Arkham Cards Reference Cards");
	const document = gql`
    {
      all_card(where: { type_code: { _eq: scenario } }) {
        id
        position
        code
        encounter_code
        pack_code
        real_name
        real_text
        real_back_text
        position
        translations {
          locale
          name
          text
          back_text
        }
      }
    }
  `;

	type Response = {
		all_card: ArkhamCardsReference[];
	};

	const data = await request<Response>(ARKHAM_CARDS_GRAPHQL_URL, document);

	return data.all_card;
};
