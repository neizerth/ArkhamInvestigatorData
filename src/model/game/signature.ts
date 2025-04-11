import type { ArkhamCardsInvestigator } from "@/api/arkhamCards";
import type { Investigator } from "./common";

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
  Investigator & {
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
  };

export type InvestigatorSignaturePack = {
  locale: string;
  code: string;
  name: string;
};

export type SignatureCollection = {
  cards: InvestigatorSignature[];
  taboo: InvestigatorSignature[];
};
