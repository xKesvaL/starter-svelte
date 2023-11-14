<script>
	import '@kesval/design';
	import '../app.postcss';
	import '$lib/styles/fonts.scss';
	import '$lib/styles/main.scss';
	import '$lib/styles/nprogress.scss';

	import { navigating, page } from '$app/stores';
	import nprogress from 'nprogress';
	import { isLoading, locales } from 'svelte-i18n';
	import { setupViewTransition } from 'sveltekit-view-transition';

	nprogress.configure({ easing: 'ease', minimum: 0.2, speed: 600 });
	$: $navigating ? nprogress.start() : nprogress.done();

	setupViewTransition();
</script>

<svelte:head>
	<!-- Manifest -->
	<link rel="manifest" href="/manifest.webmanifest" />

	<!-- Preload fonts -->
	<link
		rel="preload"
		href="/fonts/Inter-300-Lat.woff2"
		as="font"
		crossorigin="anonymous"
		type="font/woff2"
	/>
	<link
		rel="preload"
		href="/fonts/Inter-400-Lat.woff2"
		as="font"
		crossorigin="anonymous"
		type="font/woff2"
	/>
	<link
		rel="preload"
		href="/fonts/Inter-700-Lat.woff2"
		as="font"
		crossorigin="anonymous"
		type="font/woff2"
	/>
	<link
		rel="preload"
		href="/fonts/Poppins-900-Lat.woff2"
		as="font"
		crossorigin="anonymous"
		type="font/woff2"
	/>

	<!-- Href langs -->
	<link href={$page.url.pathname} hreflang="x-default" rel="alternate" />
	{#each $locales as locale}
		<link href={`/${locale}${$page.url.pathname}?owlang=true`} hreflang={locale} rel="alternate" />
	{/each}

	<script>
		const theme = localStorage.getItem('theme') || 'auto';
		document.firstElementChild?.setAttribute('data-theme', theme);
	</script>
</svelte:head>

{#if $isLoading}
	...
{:else}
	<slot />
{/if}
