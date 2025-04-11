import type { Investigator, SignatureCollection } from "./game";

export type Build = {
	version: string;
	minClientVersion: string;
	data: Investigator[];
};

export type SignatureBuild = SignatureCollection;
