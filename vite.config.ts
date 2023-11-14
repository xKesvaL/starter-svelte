import type { KIT_ROUTES } from '$lib/ROUTES';

import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';
import { defineConfig } from 'vite';
import { kitRoutes } from 'vite-plugin-kit-routes';

export default defineConfig({
	define: {
		'process.env.NODE_ENV':
			process.env.NODE_ENV === 'production' ? '"production"' : '"development"',
	},
	plugins: [
		sveltekit(),
		enhancedImages(),
		kitRoutes<KIT_ROUTES>(),
		SvelteKitPWA({
			strategies: 'injectManifest',
		}),
	],
});
