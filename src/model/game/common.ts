
import type { InvestigatorImage } from "./image"
import type { InvestigatorSkin, InvestigatorVariant } from "./options"

export type Investigator = {
  code: string
  previewId?: string
  variantName?: string
  additionalAction?: boolean
  image: InvestigatorImage
  variants?: InvestigatorVariant[]
  skins?: InvestigatorSkin[]
  multiselect?: boolean
  abilities?: InvestigatorAbility[]
  roles?: InvestigatorFaction[]
}

export type InvestigatorFaction = 'guardian' | 'rogue' | 'seeker' | 'mystic' | 'survivor' | 'neutral';

export type LimitType = 'round' | 'turn' | 'phase' | 'ability' | 'test' | 'game';

export type InvestigatorAbility = {
  type: 'reaction' | 'fast'
  limitPer?: LimitType | LimitType[]
  perInvestigator?: boolean
  limitCount?: number
}