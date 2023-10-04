import { DEFAULT_LOCALE } from '$lib/config';
import type { ParamMatcher } from '@sveltejs/kit';

import { locales as localesStore } from 'svelte-i18n';

export const match: ParamMatcher = (param) => {
	let isMatching = false;

	if (param === DEFAULT_LOCALE) return true;

	localesStore.subscribe((locales) => {
		if (locales.includes(param)) {
			isMatching = true;
		}
	});

	return isMatching;
};
