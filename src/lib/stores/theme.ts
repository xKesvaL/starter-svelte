import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const createTheme = () => {
	let currentTheme;
	if (browser) {
		currentTheme = localStorage.getItem('theme') || 'auto';
	}

	const { subscribe, set, update } = writable<string>(currentTheme);

	const setTheme = (theme: string) => {
		if (browser) {
			localStorage.setItem('theme', theme);
			document.firstElementChild?.setAttribute('data-theme', theme);
		}
		set(theme);

		return theme;
	};

	return {
		subscribe,
		set: (value: string) => {
			setTheme(value);
		},
		toggle: () => {
			update((t) => {
				if (t === 'dark') {
					return setTheme('light');
				} else if (t === 'light') {
					return setTheme('auto');
				} else {
					return setTheme('dark');
				}
			});
		}
	};
};

export const theme = createTheme();
