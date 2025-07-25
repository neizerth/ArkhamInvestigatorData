export type ChaosBagToken =
	| "+1"
	| "0"
	| "-1"
	| "-2"
	| "-3"
	| "-4"
	| "-5"
	| "-6"
	| "-7"
	| "-8"
	| "bless"
	| "curse"
	| "elderSign"
	| "skull"
	| "cultist"
	| "autoFail"
	| "tablet"
	| "frost"
	| "elderThing";

export type ScenarioChaosBag = {
	scenario_id: string;
	tokens: ChaosBagToken[];
};
