export interface SourceType {
	icon: string;
	name: string;
	url: string;
	colors: {
		borders: string[];
		backgrounds: string[];
		text: string[];
		primaries?: string[];
	};
}
