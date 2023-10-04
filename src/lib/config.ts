import type { Locale, Brand } from './typings/standard';

export const DEFAULT_LOCALE: Locale = 'en';

export const BRAND = {
	name: 'Starter',
	url: 'https://starter.kesval.com',
	author: {
		name: 'Kesval',
		url: 'https://kesval.com'
	},
	logo: {
		light: '/images/logos/logo.png',
		dark: '/images/logos/logo.png'
	},

} as const satisfies Brand;

export const ROUTES = {
	home: '/'
} as const satisfies Record<string, string>;
