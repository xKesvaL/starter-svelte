import type { Locale } from '$lib/typings/standard';

import { DEFAULT_LOCALE } from '$lib/config';
import { langStore } from '$lib/stores/lang';
import '$lib/utils/i18n';

import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ params }) => {
	const lang = params.lang || DEFAULT_LOCALE;

	langStore.set(lang as Locale);

	return {
		lang
	};
};
