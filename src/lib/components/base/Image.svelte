<script lang="ts">
	import IconPhotoOff from '$lib/icons/IconPhotoOff.svelte';
	import type { ThemeSize } from '$lib/types';
	import { Image } from '@kesval/image-svelte';

	export let src: string;
	export let alt: string;

	export let loading: 'lazy' | 'eager' = 'lazy';
	export let figcaption: string;
	export let rounding: ThemeSize = 'md';

	let error = false;
</script>

<Image {src} {alt} let:srcSet>
	{#if error}
		<div class="invalid-source rounding-{rounding}">
			<div class="icon">
				<IconPhotoOff />
			</div>
		</div>
		{#if figcaption}
			<p class="caption">{figcaption}</p>
		{/if}
	{:else}
		<figure>
			<img
				class="rounding-{rounding}"
				{src}
				{alt}
				srcset={srcSet}
				{loading}
				on:error={() => {
					error = true;
				}}
				decoding="async"
			/>
			{#if figcaption}
				<figcaption>{figcaption}</figcaption>
			{/if}
		</figure>
	{/if}
</Image>

<style lang="scss">
	figure img,
	.invalid-source {
		&.rounding-sm {
			border-radius: var(--border-radius-2);
		}

		&.rounding-md {
			border-radius: var(--border-radius-3);
		}

		&.rounding-lg {
			border-radius: var(--border-radius-4);
		}
	}

	figure figcaption,
	.caption {
		text-align: center;
		margin-top: var(--size-1);
		font-size: var(--fs-300);
		font-style: italic;
		color: var(--color-neutral-800);
		letter-spacing: 0.025em;
	}

	figure {
		width: 100%;
		height: 100%;
		overflow: hidden;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.invalid-source {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		aspect-ratio: 1;
		width: 100%;
		background-color: var(--color-base-200);
		color: var(--color-neutral-500);

		.icon {
			height: 4rem;
			width: 4rem;
		}
	}
</style>
