import { langStore } from '$lib/stores/lang';
import '$lib/utils/i18n';

import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ params }) => {
	const lang = params.lang || 'en';

	langStore.set(lang);

	return {
		lang
	};
};
