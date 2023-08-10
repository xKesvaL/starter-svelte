import type { Locale, Brand } from './types';

export const DEFAULT_LOCALE: Locale = 'en';

export const BRAND = {
	name: 'Svelte Starter',
	url: 'https://starter.kesval.com',
	author: {
		name: 'Kesval',
		url: 'https://kesval.com'
	},
	logo: {
		light: '/assets/logo/logo.png',
		dark: '/assets/logo/logo.png'
	},
	color: {
		primary: '#6c20df',
		secondary: '#df20b9',
		accent: '#19b357'
	}
} as const satisfies Brand;
