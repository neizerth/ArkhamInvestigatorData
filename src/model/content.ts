import type { Platform } from "./common";

export type NotificationTranslation = {
	id: string;
	language: string;
	title: string;
	image?: string;
	url?: string;
	progressUnit?: string;
};

export type Notification = {
	id: string;
	title: string;
	expiresAt?: string;
	image?: string;
	url?: string;
	progress?: {
		current: number;
		total: number;
	};
	progressUnit?: string;
	platform?: Platform;
	translations: NotificationTranslation[];
};
