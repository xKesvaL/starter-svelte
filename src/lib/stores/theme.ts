import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const createTheme = () => {
	let currentTheme;
	if (browser) {
		currentTheme = localStorage.getItem('theme') || 'auto';
	}

	const { subscribe, set, update } = writable<string>(currentTheme);

	return {
		subscribe,
		set: (value: string) => {
			if (browser) {
				localStorage.setItem('theme', value);
				document.firstElementChild?.setAttribute('data-theme', value);
			}
			set(value);
		},
		toggle: () => {
			update((t) => {
				if (t === 'dark') {
					return 'light';
				} else if (t === 'light') {
					return 'auto';
				} else {
					return 'dark';
				}
			});
		}
	};
};

export const theme = createTheme();
