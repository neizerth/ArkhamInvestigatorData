
import type { Box } from "./dimensions"

export type Investigator = {
  code: string
  image?: Box
  variants?: InvestigatorVariant[]
  skins?: InvestigatorSkin[]
}

export type InvestigatorSkin = {
  id: string;
  name: string
  image: Box
}

export type InvestigatorVariant = InvestigatorVariantIdentity & {
  name: string
}

export type InvestigatorVariantIdentity = InvestigatorCodeTypeWithPack |
  {
    type: 'custom'
    image?: Box
  }

export type InvestigatorCodeTypeWithPack = 
  {
    code: string
    pack_code: string
  } & (
    {
      type: 'parallel'
    } | {
      type: 'book'
      image: Box
    }
  )
