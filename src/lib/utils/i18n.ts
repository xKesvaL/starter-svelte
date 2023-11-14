import { DEFAULT_LOCALE } from '$lib/CONFIG';
import { getLocaleFromNavigator, getLocaleFromPathname, init, register } from 'svelte-i18n';

register('en', () => import('../lang/en.json'));
register('fr', () => import('../lang/fr.json'));

init({
	fallbackLocale: DEFAULT_LOCALE,
	initialLocale: getLocaleFromPathname(/^\/(.*?)\//) || getLocaleFromNavigator() || DEFAULT_LOCALE,
});
