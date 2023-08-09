export type Locale = 'en' | 'fr';

export interface Brand {
	name: string;
	url: string;
	logo: BrandLogo;
	color: BrandColor;
}

export interface BrandLogo {
	light: string;
	dark: string;
}

type BrandColor = Record<ThemeColor, string>;

export type ThemeColor = 'primary' | 'secondary' | 'accent';

export type ThemeSize = 'sm' | 'md' | 'lg';
