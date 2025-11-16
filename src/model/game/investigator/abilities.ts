export type LimitType =
	| "round"
	| "action"
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
			effectType?: "permanent" | "instant";
			effect?: string;
	  }
	| {
			type: "counter";
			direction: "increase" | "decrease";
			name: string;
			icon?: string;
			defaultValue?: number;
			min?: number;
			max?: number;
	  };
export type InvestigatorAbility = InvestigatorAbilityType & {
	id: string;
	minVersion?: string;
	maxVersion?: string;
	visible?: boolean;
	toggle?: boolean;
	limitPer?: LimitType | LimitType[];
	perInvestigator?: boolean;
	additionalAction?: boolean;
	personalUse?: boolean;
	limitCount?: number;
	disabled?: boolean;
};
