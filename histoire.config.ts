import { defineConfig, defaultColors } from 'histoire';
import { HstSvelte } from '@histoire/plugin-svelte';
import { BRAND } from './src/lib/config';

export default defineConfig({
	plugins: [HstSvelte()],
	setupFile: './src/lib/histoire/setup.ts',
	theme: {
		title: BRAND.name,
		logo: {
			light: `./static/${BRAND.logo.light}`,
			dark: `./static/${BRAND.logo.dark}`
		},
		logoHref: process.env.DEV ? 'localhost:5173' : BRAND.href,
		colors: {
			primary: defaultColors.violet,
			gray: defaultColors.gray
		},
		defaultColorScheme: 'auto',
		hideColorSchemeSwitch: true
	}
});
