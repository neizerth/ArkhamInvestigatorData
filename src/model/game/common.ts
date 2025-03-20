
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
}

export type LimitType = 'round' | 'investigator' | 'turn' | 'phase' | 'ability' | 'test';

export type InvestigatorAbility = {
  type: 'reaction' | 'fast'
  limitPer?: LimitType | LimitType[],
  limitCount?: number
}