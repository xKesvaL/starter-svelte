import type { Brand, Locale } from './typings/standard';

export const DEFAULT_LOCALE: Locale = 'en';

export const BRAND = {
	author: {
		name: 'Kesval',
		url: 'https://kesval.com'
	},
	logo: {
		dark: '/images/logos/logo.png',
		light: '/images/logos/logo.png'
	},
	name: 'Starter',
	url: 'https://starter.kesval.com'
} as const satisfies Brand;

export const ROUTES = {
	home: '/'
} as const satisfies Record<string, string>;
