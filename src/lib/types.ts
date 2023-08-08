export type Locale = 'en' | 'fr';

export interface Brand {
	name: string;
	href: string;
	logo: BrandLogo;
}

export interface BrandLogo {
	light: string;
	dark: string;
}

export type ThemeColor = 'primary' | 'secondary' | 'accent';

export type ThemeSize = 'sm' | 'md' | 'lg';
