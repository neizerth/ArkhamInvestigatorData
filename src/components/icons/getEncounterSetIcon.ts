import { propEq } from "ramda";
import { getEncounterSets } from "../meta";

export const getEncounterSetIcon = (code: string) => {
	const encounters = getEncounterSets();

	const encounter = encounters.find(propEq(code, "code"));

	return encounter?.icon;
};
