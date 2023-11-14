<script>
	import '@kesval/design';
	import '../app.postcss';
	import '$lib/styles/fonts.scss';
	import '$lib/styles/main.scss';

	import { setupViewTransition } from 'sveltekit-view-transition';
	import { onMount } from 'svelte';

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

	<!-- Theme -->
	<!-- Theme -->
	<script>
		const theme = localStorage.getItem('theme') || 'auto';
		document.firstElementChild?.setAttribute('data-theme', theme);
	</script>
</svelte:head>

<slot />
