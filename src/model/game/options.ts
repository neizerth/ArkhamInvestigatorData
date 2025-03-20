import type { InvestigatorAbility } from "./common";
import type { InvestigatorImage } from "./image";

export type InvestigatorSkin = {
  id: string;
  name: string
  image: InvestigatorImage
}

export type InvestigatorVariant = InvestigatorVariantIdentity & {
  name: string,
  additionalAction?: boolean
  abilities?: InvestigatorAbility[]
}

export type InvestigatorVariantIdentity = InvestigatorVariantWithPack | InvestigatorCustomVariant;

export type InvestigatorCustomVariant = {
  type: 'custom'
} & (
  {
    code: string
    image?: InvestigatorImage
  } | 
  {
    id: string
    image: InvestigatorImage
  }
)

export type InvestigatorVariantWithPack = 
  {
    code: string
  } & (
    {
      type: 'parallel'
      image?: InvestigatorImage
    } | {
      type: 'book'
      image: InvestigatorImage
    }
  )
