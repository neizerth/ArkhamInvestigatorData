import { ARKHAM_CARDS_GRAPHQL_URL } from "@/config/api";
import { gql, request } from "graphql-request";
import type { ArkhamCardsUpdate } from "../../model";

export const loadArkhamCardsUpdates = async () => {
	console.log("loading Arkham Cards Updates");
	const document = gql`
    query {
      all_card_updated_by_version(
        distinct_on: locale
        order_by: [{ locale: asc }, { version: desc }]
      ) {
        locale
        version
        card_count
        cards_updated_at
        translation_updated_at
      }
    }
  `;

	type Response = {
		all_card_updated_by_version: ArkhamCardsUpdate[];
	};

	const data = await request<Response>(ARKHAM_CARDS_GRAPHQL_URL, document);

	return data.all_card_updated_by_version;
};
