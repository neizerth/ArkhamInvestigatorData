
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
  } | 
  {
    image: InvestigatorImage
  }
)

export type InvestigatorVariantWithPack = 
  {
    code: string
  } & (
    {
      type: 'parallel'
    } | {
      type: 'book'
      image?: InvestigatorImage
    }
  )
