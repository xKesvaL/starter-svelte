<script lang="ts">
	import { navigating } from '$app/stores';
	import nprogress from 'nprogress';

	import '@kesval/design';
	import '$lib/styles/nprogress.scss';
	import '$lib/styles/main.scss';
	import '../app.postcss';

	import { BRAND } from '$lib/config';
	import { locales } from 'svelte-i18n';

	import Navigation from '$lib/components/layout/Navigation.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import BackToTopButton from '$lib/components/layout/BackToTopButton.svelte';

	import { onNavigate } from '$app/navigation';

	nprogress.configure({ minimum: 0.2, easing: 'ease', speed: 600 });
	$: $navigating ? nprogress.start() : nprogress.done();

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<meta name="theme-color" content={BRAND.color.primary} />
	<meta name="copyright" content={BRAND.author.name} />
	<meta name="og:site_name" content={BRAND.name} />

	<!-- Href langs -->
	<link rel="alternate" hreflang="x-default" href={BRAND.url} />
	{#each $locales as locale}
		<link rel="alternate" hreflang={locale} href={BRAND.url + '?lang=' + locale} />
	{/each}
</svelte:head>

<Navigation />

<main>
	<slot />
</main>

<BackToTopButton />
<Footer />
