import pkg from '../../package.json'
import path from "node:path";

export const ROOT_DIR = path.join(__dirname, '/../..');

export const DIST_DIR = path.join(ROOT_DIR, 'dist');
export const CACHE_DIR = path.join(ROOT_DIR, 'cache');

export const DOWNLOADS_DIR = path.join(CACHE_DIR, 'downloads');
export const CACHED_IMAGES_DIR = path.join(CACHE_DIR, 'images');

export const DEVELOPMENT_MODE = process.env.NODE_ENV === 'development';
export const APP_VERSION = pkg.version