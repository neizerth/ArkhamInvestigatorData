import type { Box } from "../../dimensions";

export type InvestigatorImageBox = Box & {
	top: number;
	left: number;
};

export type InvestigatorImageSource = Box & {
	type: "mini" | "full";
	id: string;
	face: InvestigatorImageBox;
};

export type InvestigatorImageMedia = InvestigatorImageBox & {
	source?: InvestigatorImageSource;
	primary?: boolean;
	type?: "face" | "body";
};

export type InvestigatorImage = Box & {
	id?: string;
	light?: boolean;
	version?: number;
	face: InvestigatorImageBox;
	media?: InvestigatorImageMedia[];
};
