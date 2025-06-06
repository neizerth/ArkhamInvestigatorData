import { ARKHAM_CARDS_GRAPHQL_URL } from "@/config/api";
import { gql, request } from "graphql-request";
import type { ArkhamCardsFullPack } from "../../model";

export const loadArkhamCardsPacks = async () => {
	const document = gql`
    {
      pack {
        code
        official
        position
        real_name
        translations {
          locale
          name
        }
      }
    }
  `;

	type Response = {
		pack: ArkhamCardsFullPack[];
	};

	const data = await request<Response>(ARKHAM_CARDS_GRAPHQL_URL, document);

	return data.pack;
};
