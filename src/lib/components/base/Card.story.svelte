<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	import type { ComponentProps } from 'svelte';
	import Card from './Card.svelte';
	export let Hst: Hst;

	let props: ComponentProps<Card> = {
		color: 'primary',
		rounding: 'md',
		scale: true,
		align: 'start',
		justify: 'center',
		gap: 'md',
		vertical: true
	};
</script>

<Hst.Story title="Base/Card" layout={{ type: 'grid', width: '400px' }}>
	<svelte:fragment slot="controls">
		<Hst.Select
			title="Color"
			bind:value={props.color}
			options={['primary', 'secondary', 'accent']}
		/>
		<Hst.Select title="Rounding" bind:value={props.rounding} options={['sm', 'md', 'lg']} />
		<Hst.Checkbox title="Scale" bind:value={props.scale} />
		<Hst.Select title="Align" bind:value={props.align} options={['start', 'center', 'end']} />
		<Hst.Select title="Justify" bind:value={props.justify} options={['start', 'center', 'end']} />
		<Hst.Select title="Gap" bind:value={props.gap} options={['sm', 'md', 'lg']} />
		<Hst.Checkbox title="Vertical" bind:value={props.vertical} />
	</svelte:fragment>

	<Hst.Variant title="Card Vertical">
		<div style="margin: 8px;">
			<Card {...props}>
				<div>hi I am a card</div>
				<div>and the content in here stacks vertically</div>
				<div>just like that</div>
			</Card>
		</div>
	</Hst.Variant>
	<Hst.Variant title="Card Horizontal">
		<div style="margin: 8px;">
			<Card {...props} vertical={false}
				><div>hi I am a card</div>
				<div>and the content in here stacks horizontally</div>
				<div>just like that</div></Card
			>
		</div>
	</Hst.Variant>
</Hst.Story>
