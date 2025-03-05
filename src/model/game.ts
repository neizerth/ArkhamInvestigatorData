
import type { Box } from "./dimensions"

export type Investigator = {
  code: string
  previewId?: string
  variantName?: string
  additionalAction?: boolean
  image: InvestigatorImage
  variants?: InvestigatorVariant[]
  skins?: InvestigatorSkin[]
  multiselect?: boolean
}

export type InvestigatorImageBox = Box & {
  top: number
  left: number
}

export type InvestigatorImageSource = Box & {
  type: 'mini' | 'full'
  id: string
  face: InvestigatorImageBox
}

export type InvestigatorImageMedia = InvestigatorImageBox & {
  source?: InvestigatorImageSource
  primary?: boolean
  type?: 'face' | 'body'
}

export type InvestigatorImage = Box & {
  id?: string
  face?: InvestigatorImageBox
  media: InvestigatorImageMedia[]
}

export type InvestigatorSkin = {
  id: string;
  name: string
  image: InvestigatorImage
}

export type InvestigatorVariant = InvestigatorVariantIdentity & {
  name: string,
  additionalAction?: boolean
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
