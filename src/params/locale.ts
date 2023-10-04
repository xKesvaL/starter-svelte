import type { ParamMatcher } from '@sveltejs/kit';
import { locales as localesStore } from 'svelte-i18n';

export const match: ParamMatcher = (param) => {
	let isMatching = false;

	if (param === 'en') return true;

	localesStore.subscribe((locales) => {
		if (locales.includes(param)) {
			isMatching = true;
		}
	});

	return isMatching;
};
