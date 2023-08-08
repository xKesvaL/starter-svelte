<script lang="ts">
	import type { ThemeColor, ThemeSize } from '$lib/types';

	export let color: ThemeColor = 'primary';
	export let href: string | null = null;
	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let disabled: boolean = false;
	export let size: ThemeSize = 'md';
	export let style: 'solid' | 'outline' = 'solid';
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	class="btn btn-{color} btn-{size} btn-{style}"
	{type}
	{disabled}
>
	{#if $$slots.icon}
		<span>
			<slot name="icon" />
		</span>
	{/if}

	<slot />
</svelte:element>

<style lang="scss">
	.btn {
		gap: var(--size-2);

		span {
			height: 24px;
			width: 24px;
		}
	}
</style>
