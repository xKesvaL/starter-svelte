<script lang="ts">
	import { BRAND } from '$lib/config';

	export let animated = true;

	export let size: 'normal' | 'semi-large' | 'large' = 'normal';

	export let scaleOrigin: 'center' | 'left' = 'center';

	export let repeat = false;
</script>

<div class="logo {size} {scaleOrigin}" class:animated class:repeat>
	<svg
		class="flex h-full max-h-7 w-auto justify-center text-center"
		width="800"
		height="116"
		viewBox="0 0 723.84009 116.720269"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<text transform="translate(-300,-206)" class="text"
			><tspan x="275" y="292"
				><tspan class="tspan">
					{BRAND.name}
				</tspan></tspan
			></text
		>
	</svg>
</div>

<style lang="scss">
	.logo {
		--logo-text-color: var(--color-neutral-600);
		--logo-text-color-end: var(--color-neutral-900);
		display: flex;
		height: 100%;
		width: auto;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		transform-origin: center;

		&.semi-large {
			scale: 1.5;
		}

		&.large {
			scale: 2;
		}

		&.left {
			transform-origin: left;
		}

		svg {
			.text {
				fill: var(--logo-text-color-end);
				transition: 0.3s ease-in-out;

				.tspan {
					font-family: var(--ft-title);
					font-size: 107px;
				}
			}
		}

		&.animated {
			svg {
				.text {
					stroke-width: 2;
					animation: svg-text-stroke 2s;
				}
			}
		}

		&.animated.repeat {
			svg {
				.text {
					animation-iteration-count: infinite;
					animation-direction: alternate;
				}
			}
		}
	}

	@keyframes svg-text-stroke {
		0% {
			fill: transparent;
			stroke: var(--logo-text-color);
			stroke-dashoffset: 25%;
			stroke-dasharray: 0 50%;
			stroke-width: 2;
		}
		70% {
			fill: transparent;
			stroke: var(--logo-text-color);
		}
		80% {
			fill: transparent;
			stroke: var(--logo-text-color);
			stroke-width: 3;
		}
		100% {
			fill: var(--logo-text-color-end);
			stroke: transparent;
			stroke-dashoffset: -25%;
			stroke-dasharray: 50% 0;
			stroke-width: 0;
		}
	}
</style>
