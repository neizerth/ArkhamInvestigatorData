import { CACHE_DIR } from "@/config";
import { createJSONReader } from "@/features";

const read = createJSONReader(CACHE_DIR);

export const getCachedMetadata = <T>(key: string, defaultValue?: T) => {
	let init = false;
	let data: T = defaultValue;
	return () => {
		if (init) {
			return data || defaultValue;
		}
		init = true;
		data = read(key);
		return data || defaultValue;
	};
};
