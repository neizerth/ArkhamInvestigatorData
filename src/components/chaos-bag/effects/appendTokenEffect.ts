import { ReferencePart } from "@/model";
import { ChaosBagToken } from "@/model/game/chaosBag";
import { getReferencePartTokens } from "../getReferencePartTokens";

type Item = {
	token: ChaosBagToken;
	effect: string;
};
type Options = {
	items: Item[];
	data: ReferencePart[];
};
export const appendTokenEffect = ({ data, items }: Options) => {
	return items.reduce((total, { token, effect }) => {
		return total.map((item) => {
			const tokens = getReferencePartTokens(item);

			if (!tokens.includes(token)) {
				return item;
			}

			return {
				...item,
				effect: `${item.effect}\n${effect}`,
			};
		});
	}, data);
};
