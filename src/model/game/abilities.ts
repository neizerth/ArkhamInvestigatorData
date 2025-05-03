import type { ChaosBagToken } from "./chaosBag";
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
    }
  | {
      type: "action" | "special-action";
      icon: string;
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
};
export type InvestigatorAbilityUse = {
  phase?: "upkeep";
  script: InvestigatorAbilityScript;
};

export type InvestigatorAbilityScript = Partial<Record<Stat, string>> & {
  chaosBag?: ChaosBagScript;
};

export type ChaosBagScript = Partial<Record<ChaosBagToken, string>>;
