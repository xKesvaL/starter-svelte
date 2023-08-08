<script lang="ts">
	import type { ThemeColor, ThemeSize } from '$lib/types';
	import type { MouseEventHandler } from 'svelte/elements';

	export let href: string | undefined = undefined;
	export let classes = '';
	export let scale = true;
	export let color: ThemeColor = 'primary';
	export let rounding: ThemeSize = 'md';
	export let vertical = true;
	export let justify: 'start' | 'center' | 'end' = 'center';
	export let align: 'start' | 'center' | 'end' = 'start';
	export let gap: ThemeSize = 'md';

	let el: HTMLElement;

	$: el?.style.setProperty('--card-drop-color', `rgba(var(--color-${color}-300-rgb), 0.3)`);

	const onHover: MouseEventHandler<HTMLElement> = (ev) => {
		const target = ev.currentTarget;
		const rect = target.getBoundingClientRect();

		const x = ev.clientX - rect.left;
		const y = ev.clientY - rect.top;

		target.style.setProperty('--card-drop-x', `${x}px`);
		target.style.setProperty('--card-drop-y', `${y}px`);
	};
</script>

<svelte:element
	this={href ? 'a' : 'div'}
	{href}
	bind:this={el}
	on:mousemove={onHover}
	class="card rounding-{rounding}"
	class:scale
	role="region"
>
	<div
		class="card-bg-img justify-{justify} align-{align} gap-{gap} {classes} "
		class:horizontal={!vertical}
	>
		<slot />
	</div>
</svelte:element>

<style lang="scss">
	@use '$design' as *;

	.card {
		--card-drop-x: 0;
		--card-drop-y: 0;

		--card-drop-color: rgba(var(--color-primary-300-rgb), 0.3);

		display: inline-flex;
		flex-direction: column;
		border: 1px solid rgba(var(--color-neutral-900-rgb), 0.3);
		background: rgba(var(--color-base-200-rgb), 0.1);
		overflow: hidden;
		transition: 0.3s;
		position: relative;
		box-shadow: var(--box-shadow-3);
		height: 100%;
		width: 100%;

		&.rounding-sm {
			border-radius: var(--border-radius-2);
		}

		&.rounding-md {
			border-radius: var(--border-radius-3);
		}

		&.rounding-lg {
			border-radius: var(--border-radius-4);
		}

		&:hover {
			&.scale {
				transform: scale(1.05);
			}

			border-color: rgba(var(--color-neutral-900-rgb), 0.7);
		}

		&-bg-img {
			padding: 1.5rem;
			transition: 0.2s;
			height: 100%;
			width: 100%;
			display: flex;
			flex-direction: column;

			&.justify {
				&-start {
					justify-content: flex-start;
				}

				&-center {
					justify-content: center;
				}

				&-end {
					justify-content: flex-end;
				}
			}

			&.align {
				&-start {
					align-items: flex-start;
				}

				&-center {
					align-items: center;
				}

				&-end {
					align-items: flex-end;
				}
			}

			&.gap {
				&-sm {
					gap: var(--size-2);
				}

				&-md {
					gap: var(--size-3);
				}

				&-lg {
					gap: var(--size-4);
				}
			}

			&.horizontal {
				flex-direction: row;
			}

			&:hover {
				background-color: rgba(var(--color-base-200-rgb), 0.3);
				background-image: radial-gradient(
					circle at var(--card-drop-x) var(--card-drop-y),
					var(--card-drop-color),
					transparent
				);
			}
		}
	}
</style>
