import { writable } from 'svelte/store';
import { locale } from 'svelte-i18n';
import { DEFAULT_LOCALE } from '$lib/config';
import { browser } from '$app/environment';
import type { Locale } from '$lib/typings/standard';

const createLangStore = () => {
	let currentLang = DEFAULT_LOCALE;

	if (browser) {
		const lang = localStorage.getItem('lang');
		if (lang) {
			currentLang = lang as Locale;
		}
	}

	const { set, subscribe } = writable(currentLang);

	return {
		set: (lang: Locale) => {
			locale.set(lang);
			if (browser) {
				localStorage.setItem('lang', lang);
			}
			set(lang);
		},
		subscribe
	};
};

export const langStore = createLangStore();
