import { InvestigatorCode } from "@/config/codes";
import { propEq, reject } from "ramda";
import { appendTokenEffect } from "./effects";
import { getChaosBagTokenReference } from "./getChaosBagTokenReference";

type Options = {
	code: string;
	text: string;
};

export const getSignatureTokenReference = ({ code, text }: Options) => {
	const reference = getChaosBagTokenReference([text]);
	const lines = text.split("\n");

	if (code === InvestigatorCode.JimCulver.base) {
		const elderSignEffect = lines[1];

		const data = appendTokenEffect({
			items: [
				{
					token: "elderSign",
					effect: elderSignEffect,
				},
			],
			data: reference,
		});

		return reject(propEq("group", "type"), data);
	}

	return reference;
};
