export type Locale = 'en' | 'fr';

export interface Brand {
	name: string;
	url: string;
	logo: BrandLogo;
	author: BrandAuthor;
}

export interface BrandLogo {
	light: string;
	dark: string;
}


export interface BrandAuthor {
	name: string;
	url: string;
}

export type ThemeColor =
	| 'background'
	| 'muted'
	| 'popover'
	| 'card'
	| 'primary'
	| 'secondary'
	| 'accent'
	| 'destructive'
	| 'info'
	| 'success';

export type ThemeSize = 'sm' | 'md' | 'lg';

export interface FormattedZodError {
	[key: string]: {
		message: string;
	};
}
