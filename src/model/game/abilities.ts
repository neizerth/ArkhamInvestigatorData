import type { ChaosBagToken } from "./chaosBag";
import type { Stat } from "./entities";

export type LimitType = 'round' | 'turn' | 'phase' | 'ability' | 'test' | 'game';

export type InvestigatorAbility = {
  type: 'reaction' | 'fast' | 'permanent'
  limitPer?: LimitType | LimitType[]
  perInvestigator?: boolean
  limitCount?: number
  enabledIf?: string
  onUse?: InvestigatorAbilityUse[]
}

export type InvestigatorAbilityUse = {
  phase?: 'upkeep'
  script: InvestigatorAbilityScript
}

export type InvestigatorAbilityScript = Partial<Record<Stat, string>> & {
  chaosBag?: ChaosBagScript
}

export type ChaosBagScript = Partial<Record<ChaosBagToken, string>>