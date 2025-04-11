import type { ArkhamCardsPack } from "@/api/arkhamCards";
import type {
  InvestigatorSignatureCycle,
  InvestigatorSignaturePack,
} from "@/model";
import { getCycleIcon } from "./getCycleIcon";

type Options = {
  code: string;
  real_name: string;
  position: number;
};

export const getEnglishCycle = ({
  code,
  real_name,
  position,
}: ArkhamCardsPack): InvestigatorSignatureCycle => ({
  locale: "en",
  code: code,
  name: real_name,
  position,
  icon: getCycleIcon(code),
});
