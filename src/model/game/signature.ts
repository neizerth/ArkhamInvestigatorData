import type { ArkhamCardsInvestigator } from "@/api/arkhamCards";
import type { Investigator } from "./common";
import type { InvestigatorSkin } from "./options";

export type InvestigatorSignature = Omit<
  ArkhamCardsInvestigator,
  | "real_name"
  | "real_subname"
  | "real_text"
  | "real_flavor"
  | "real_traits"
  | "real_taboo_original_text"
  | "real_taboo_text_change"
  | "translations"
  | "pack"
> &
  Omit<Investigator, "variants" | "skins"> & {
    type: InvestigatorSignatureType;
    locale: string;
    text: string;
    name: string;
    subname: string;
    flavor: string;
    traits: string;
    taboo_original_text: string | null;
    taboo_text_change: string | null;
    official: boolean;
    pack: InvestigatorSignaturePack;
    cycle: InvestigatorSignatureCycle;
  };

export type InvestigatorSignatureType =
  | "original"
  | "custom"
  | "parallel"
  | "book";

export type InvestigatorSignaturePack = {
  locale: string;
  code: string;
  name: string;
  position: number;
  icon: string;
};

export type InvestigatorSignatureCycle = {
  locale: string;
  code: string;
  name: string;
  position: number;
  icon: string;
};

export type InvestigatorSignatureGroup = {
  locale: string;
  code: string;
  name: string;
  subname: string;
  signatures: InvestigatorSignature[];
  skins: InvestigatorSkin[];
  official: boolean;
};

export type SignatureCollection = {
  groups: InvestigatorSignatureGroup[];
  taboo: InvestigatorSignature[];
};
