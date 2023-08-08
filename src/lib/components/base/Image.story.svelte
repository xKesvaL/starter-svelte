<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	import type { ComponentProps } from 'svelte';
	import Image from './Image.svelte';
	export let Hst: Hst;

	let props: ComponentProps<Image> = {
		src: 'https://via.placeholder.com/150',
		alt: 'Placeholder',
		loading: 'lazy',
		figcaption: 'Placeholder Caption',
		rounding: 'md'
	};
</script>

<Hst.Story title="Base/Image" layout={{ type: 'grid' }}>
	<svelte:fragment slot="controls">
		<Hst.Text title="Alt Text" bind:value={props.alt} />
		<Hst.Select title="Loading" bind:value={props.loading} options={['lazy', 'eager']} />
		<Hst.Select title="Rounding" bind:value={props.rounding} options={['sm', 'md', 'lg']} />
	</svelte:fragment>

	<Hst.Variant title="Valid Source">
		<svelte:fragment slot="controls">
			<Hst.Text title="Source" bind:value={props.src} />
		</svelte:fragment>
		<Image {...props} />
	</Hst.Variant>
	<Hst.Variant title="Invalid Source">
		<Image
			{...{
				...props,
				...{
					src: './invalid.png'
				}
			}}
		/>
	</Hst.Variant>
</Hst.Story>
