<script lang="ts">
	import { Image } from '@kesval/image-svelte';

	export let src: string;
	export let alt: string;

	export let loading: 'lazy' | 'eager' = 'lazy';

	let error = false;
</script>

<Image {src} {alt} let:srcSet>
	{#if error}
		<div>placeholder</div>
	{:else}
		<img
			{src}
			{alt}
			srcset={srcSet}
			{loading}
			on:error={() => {
				error = true;
			}}
			decoding="async"
		/>
	{/if}
</Image>

<style lang="scss">
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
