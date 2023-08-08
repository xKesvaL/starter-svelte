import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$design: resolve('./node_modules/@kesval/design/scss/abstracts')
		}
	},

	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "node_modules/@kesval/design/scss/abstracts" as *;'
			}
		}
	}
});
