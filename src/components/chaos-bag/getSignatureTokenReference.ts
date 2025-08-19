import { getChaosBagTokenReference } from "./getChaosBagTokenReference";

type Options = {
	code: string;
	text: string;
};

export const getSignatureTokenReference = ({ text }: Options) => {
	const reference = getChaosBagTokenReference([text]);

	return reference;
};
