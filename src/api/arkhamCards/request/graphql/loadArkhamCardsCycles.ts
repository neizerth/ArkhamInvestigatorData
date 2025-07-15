import { ARKHAM_CARDS_GRAPHQL_URL } from "@/config/api";
import { gql, request } from "graphql-request";
import type { ArkhamCardsCycle } from "../../model";

export const loadArkhamCardsCycles = async () => {
	console.log("loading Arkham Cards Cycles");
	const document = gql`
    {
      cycle {
        code
        official
        position
        real_name
        packs {
          code
          real_name
          position
          translations {
            locale
            name
          }
        }
        translations {
          locale
          name
        }
      }
    }
  `;

	type Response = {
		cycle: ArkhamCardsCycle[];
	};

	const data = await request<Response>(ARKHAM_CARDS_GRAPHQL_URL, document);

	return data.cycle;
};
