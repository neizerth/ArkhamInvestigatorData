import type { ArkhamDivider } from "arkham-divider-data";
import type { Investigator, SignatureCollection } from "./game";

export type Build = {
  version: string;
  minClientVersion: string;
  data: Investigator[];
  icons: ArkhamDivider.Core["icons"];
};

export type SignatureBuild = SignatureCollection;
