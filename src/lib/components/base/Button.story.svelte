<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	import Button from './Button.svelte';
	import type { ComponentProps } from 'svelte';
	import IconMenu from '$lib/icons/IconMenu.svelte';
	export let Hst: Hst;

	let props: ComponentProps<Button> = {
		color: 'primary',
		disabled: false,
		size: 'md',
		style: 'solid'
	};

	let content = 'Button';
</script>

<Hst.Story title="Base/Button" layout={{ type: 'grid' }}>
	<svelte:fragment slot="controls">
		<Hst.Select
			title="Color"
			bind:value={props.color}
			options={['primary', 'secondary', 'accent']}
		/>
		<Hst.Checkbox title="Disabled" bind:value={props.disabled} />
		<Hst.Select title="Size" bind:value={props.size} options={['sm', 'md', 'lg']} />
		<Hst.Select title="Style" bind:value={props.style} options={['solid', 'outline']} />
		<Hst.Text title="Content" bind:value={content} />
	</svelte:fragment>

	<Hst.Variant title="Without Icon">
		<Button {...props}>{content}</Button>
	</Hst.Variant>
	<Hst.Variant title="With Icon">
		<Button {...props}>
			<IconMenu slot="icon" />
			{content}
		</Button>
	</Hst.Variant>
</Hst.Story>
