import { 
  GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL, 
  GOOGLE_SERVICE_ACCOUNT_CLIENT_ID, 
  GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY 
} from '@/config';

import * as google from '@googleapis/drive';
import type { drive_v3 } from "@googleapis/drive";

let service: drive_v3.Drive;

export const getGoogleDriveService = async () => {
  if (service) {
    return service;
  }
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL,
      client_id: GOOGLE_SERVICE_ACCOUNT_CLIENT_ID,
      private_key: GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/g, "\n")
    },
    scopes: [
      'https://www.googleapis.com/auth/drive',
    ],
  });
  
  service = google.drive({
    version: 'v3',
    auth
  });

  return service;
}