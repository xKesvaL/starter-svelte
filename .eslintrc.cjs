module.exports = {
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'plugin:perfectionist/recommended-natural',
		'prettier',
	],
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
			},
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte'],
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'perfectionist'],
	root: true,
};
