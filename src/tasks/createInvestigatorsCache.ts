import { APP_VERSION, DIST_DIR } from '@/config';
import data from '@/data';
import { createJSONWriter } from '@/features';
import type { Build } from '@/model';

export const createInvestigatorsCache = async () =>{
  console.log('creating investigators cache');

  const writeJSON = createJSONWriter(DIST_DIR);

  const build: Build = {
    version: APP_VERSION,
    data
  }
  writeJSON('investigators', data);
  writeJSON('build', build);
}