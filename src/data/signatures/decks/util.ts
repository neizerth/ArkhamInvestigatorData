import type { InvestigatorImage } from "@/model";

const faceSize = 400;
const center = 650;

const offset = center - faceSize / 2;

export const splashImage: InvestigatorImage = {
	width: 1300,
	height: 1300,
	face: {
		width: faceSize,
		height: faceSize,
		left: offset,
		top: offset,
	},
};
