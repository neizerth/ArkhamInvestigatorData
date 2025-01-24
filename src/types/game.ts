
import type { Box } from "./dimensions"

export type Investigator = {
  code: string
  previewId?: string
  image?: InvestigatorImage
  variants?: InvestigatorVariant[]
  skins?: InvestigatorSkin[]
}

export type InvestigatorImageBox = Box & {
  top: number
  left: number
}

export type InvestigatorImageSource = Box & {
  type: 'mini' | 'full'
  id: string
}

export type InvestigatorImageMedia = InvestigatorImageBox & {
  source?: InvestigatorImageSource
}

export type InvestigatorImage = Box & {
  media?: InvestigatorImageMedia[]
}

export type InvestigatorSkin = {
  id: string;
  name: string
  image: InvestigatorImage
}

export type InvestigatorVariant = InvestigatorVariantIdentity & {
  name: string
}

export type InvestigatorVariantIdentity = InvestigatorCodeTypeWithPack |
  {
    type: 'custom'
    image?: InvestigatorImage
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
      image?: InvestigatorImage
    }
  )
