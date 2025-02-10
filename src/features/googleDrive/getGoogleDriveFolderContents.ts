import * as C from '@/config/app';
import { delay } from '@/features';
import type { drive_v3 } from '@googleapis/drive';
import { getGoogleDriveService } from './getGoogleDriveService';

export const getGoogleDriveFolderContents = async (parentId: string) => {

  console.log(`downloading folder ${parentId}`);

  const service = await getGoogleDriveService();
  const contents: drive_v3.Schema$File[] = [];
  let pageToken: string | null = null;

  do {
    console.log(`parsing GDrive /${pageToken || 'root'}...`);

    await delay(100);
    const response = await service.files.list({
      q: `'${parentId}' in parents`,
      pageToken
    });
    const { data } = response;
    const { files = [] } = data;
    contents.push(...files);

    pageToken = data.nextPageToken;

  } while (pageToken);

  return contents;
}