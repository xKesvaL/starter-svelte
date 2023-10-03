<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import BackTopTopButton from './BackToTopButton.svelte';
	import type { ArgTypes } from '@storybook/svelte';
	import type { ComponentProps } from 'svelte';

	type Story = ComponentProps<BackTopTopButton>;

	const metaArgs: Story = {};

	const argTypes: ArgTypes<Story> = {};
</script>

<Meta
	title="Components/Layout/BackToTopButton"
	component={BackTopTopButton}
	args={metaArgs}
	{argTypes}
/>

<Template args={metaArgs} {argTypes} let:args>
	<BackTopTopButton {...args} />
</Template>

<Story name="Default" let:args>
	<BackTopTopButton {...args} />
</Story>
