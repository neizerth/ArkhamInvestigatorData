import { DIST_DIR } from '@/config';
import data from '@/data';
import { createJSONWriter } from '@/features';

export const createInvestigatorsCache = async () =>{
  console.log('creating investigators cache');

  const writeJSON = createJSONWriter(DIST_DIR);

  writeJSON('investigators', data);
}