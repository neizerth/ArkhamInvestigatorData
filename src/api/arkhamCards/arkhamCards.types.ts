import type { InvestigatorFaction } from "@/model";

export type ArkhamCardsInvestigator = {
  id: string;
  alternate_of_code: string | null;
  linked_code: string | null;
  code: string;
  real_text: string;
  real_name: string;
  real_subname: string;
  real_flavor: string;
  real_traits: string;
  real_taboo_original_text: string | null;
  real_taboo_text_change: string | null;
  faction_code: InvestigatorFaction;
  sanity: number;
  health: number;
  skill_agility: number;
  skill_combat: number;
  skill_intellect: number;
  skill_willpower: number;
  translations: ArkhamCardsInvestigatorTranslation[];
  taboo_set: ArkhamCardsTabooSet | null;
  pack: ArkhamCardsPack;
  spoiler: boolean;
};

export type ArkhamCardsPack = {
  code: string;
  position: number;
  real_name: string;
  official: boolean;
  translations: ArkhamCardsPackTranslation[];
  cycle: ArkhamCardsCycle;
};

export type ArkhamCardsCycle = {
  code: string;
  position: number;
  real_name: string;
  official: boolean;
  translations: ArkhamCardsPackTranslation[];
};

export type ArkhamCardsPackTranslation = {
  locale: string;
  name: string;
};

export type ArkhamCardsCycleTranslation = {
  locale: string;
  name: string;
};

export type ArkhamCardsInvestigatorTranslation = {
  locale: string;
  name: string;
  subname: string;
  text: string;
  traits: string;
  flavor: string;

  taboo_original_text: string;
  taboo_text_change: string;
};

export type ArkhamCardsTabooSet = {
  id: number;
  date: string;
  code: string;
  name: string;
};
