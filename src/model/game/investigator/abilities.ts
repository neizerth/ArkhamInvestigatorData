import type { ChaosBagToken } from "../chaosBag";
import type { Stat } from "./entities";

export type LimitType =
	| "round"
	| "turn"
	| "phase"
	| "ability"
	| "test"
	| "game";

export type InvestigatorAbilityType =
	| {
			type: "reaction" | "fast" | "permanent";
			icon?: string;
			effectType?: "permanent" | "instant";
			effect?: string;
	  }
	| {
			type: "action" | "special-action";
			icon: string;
	  }
	| {
			type: "counter";
			name: string;
			icon?: string;
			defaultValue?: number;
			min?: number;
			max?: number;
	  };
export type InvestigatorAbility = InvestigatorAbilityType & {
	id: string;
	limitPer?: LimitType | LimitType[];
	perInvestigator?: boolean;
	additionalAction?: boolean;
	personalUse?: boolean;
	limitCount?: number;
	enabledIf?: string;
	onUse?: InvestigatorAbilityUse[];
	disabled?: boolean;
};
export type InvestigatorAbilityUse = {
	phase?: "upkeep";
	script: InvestigatorAbilityScript;
};

export type InvestigatorAbilityScript = Partial<Record<Stat, string>> & {
	chaosBag?: ChaosBagScript;
};

export type ChaosBagScript = Partial<Record<ChaosBagToken, string>>;
