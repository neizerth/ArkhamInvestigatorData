import type {
  InvestigatorFaction,
  InvestigatorSignature,
  SignatureCollection,
} from "@/model";
import { ascend, groupBy, sortBy, sortWith, toPairs } from "ramda";
import { getCollectionSkins } from "./getCollectionSkins";

const hasTaboo = ({ taboo_set }: InvestigatorSignature) => taboo_set !== null;
const getGroupKey = ({ code, alternate_of_code }: InvestigatorSignature) =>
  alternate_of_code || code;

export const FACTION_ORDER: Record<InvestigatorFaction, number> = {
  guardian: 1,
  seeker: 2,
  rogue: 3,
  mystic: 4,
  survivor: 5,
  neutral: 6,
};

export const getSignatureCollection = (
  data: InvestigatorSignature[]
): SignatureCollection => {
  const taboo = data.filter(hasTaboo);

  const groupPairs = toPairs(groupBy(getGroupKey, data));
  const unsortedGroups = groupPairs.map(([code, values]) => {
    const signatures = sortBy(({ pack }) => pack.position, values);
    const [firstSignature] = signatures;
    const { id, name, subname, locale, official, spoiler, faction_code } =
      firstSignature;
    const skins = getCollectionSkins(code);

    return {
      id,
      locale,
      code,
      name,
      subname,
      signatures,
      skins,
      official,
      spoiler,
      faction_code,
    };
  });

  const groups = sortWith(
    [
      ascend(({ signatures }) => signatures[0].cycle.position),
      ascend(({ signatures }) => FACTION_ORDER[signatures[0].faction_code]),
    ],
    unsortedGroups
  );

  return {
    groups,
    taboo,
  };
};
