export type ArkhamCardsRulesItem = {
  id: string;
  title: string;
  text: string;
  cycle?: string[];
  scenarios?: string[];
  rules?: ArkhamCardsRulesItem[];
  table?: ArkhamCardsRulesItemTableRow[];
};

export type ArkhamCardsRulesItemTableRow = {
  row: ArkhamCardsRulesItemTableCell[];
};

export type ArkhamCardsRulesItemTableCell = {
  text: string;
  color?: string;
};
