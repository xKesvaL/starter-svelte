<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import Logo from './Logo.svelte';
	import type { ArgTypes } from '@storybook/svelte';
	import type { ComponentProps } from 'svelte';

	type Story = ComponentProps<Logo>;

	const metaArgs: Story = {};

	const argTypes: ArgTypes<Story> = {};
</script>

<Meta title="Components/Base/Logo" component={Logo} args={metaArgs} {argTypes} />

<Template args={metaArgs} {argTypes} let:args>
	<Logo {...args} />
</Template>

<Story name="Default" let:args>
	<Logo {...args} />
</Story>
