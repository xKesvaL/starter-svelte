import { writable } from 'svelte/store';
import { locale } from 'svelte-i18n';

const createLangStore = () => {
	const { set, subscribe, update } = writable('en');

	return {
		set: (lang: string) => {
			locale.set(lang);
			set(lang);
		},
		subscribe,
		update
	};
};

export const langStore = createLangStore();
