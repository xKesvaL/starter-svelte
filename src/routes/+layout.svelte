<script>
	import '@kesval/design';
	import '../app.postcss';
	import '$lib/styles/fonts.scss';
	import '$lib/styles/main.scss';

	import { pwaInfo } from 'virtual:pwa-info';
	import { setupViewTransition } from 'sveltekit-view-transition';
	import { onMount } from 'svelte';

	setupViewTransition();

	onMount(async () => {
		if (pwaInfo) {
			const { registerSW } = await import('virtual:pwa-register');
			registerSW({
				immediate: true,
				onRegistered(r) {
					// uncomment following code if you want check for updates
					// r && setInterval(() => {
					//    console.log('Checking for sw update')
					//    r.update()
					// }, 20000 /* 20s for testing purposes */)
					console.log(`SW Registered: `, r);
				},
				onRegisterError(error) {
					console.log('SW registration error', error);
				},
			});
		}
	});
</script>

<svelte:head>
	<!-- Link to manifest -->
	<link rel="manifest" href="/manifest.webmanifest" />
</svelte:head>

<slot />
