<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import Button from './Button.svelte';
	import IconMenu from '$lib/icons/IconMenu.svelte';
	import type { ArgTypes } from '@storybook/svelte';
	import type { ComponentProps } from 'svelte';

	type Story = ComponentProps<Button>;

	const metaArgs: Story = {
		color: 'primary',
		href: '',
		type: 'button',
		disabled: false,
		size: 'md',
		style: 'solid'
	};

	const argTypes: ArgTypes<Story> = {
		color: {
			type: 'string',
			control: 'select',
			options: ['primary', 'secondary', 'accent']
		},
		href: {
			type: 'string',
			control: 'text'
		},
		type: {
			type: 'string',
			control: 'select',
			options: ['button', 'submit', 'reset']
		},
		disabled: {
			type: 'boolean',
			control: 'boolean'
		},
		size: {
			type: 'string',
			control: 'select',
			options: ['sm', 'md', 'lg']
		},
		style: {
			type: 'string',
			control: 'select',
			options: ['solid', 'outline']
		}
	};
</script>

<Meta title="Components/Base/Button" component={Button} args={metaArgs} {argTypes} />

<Template args={metaArgs} {argTypes} let:args>
	<Button {...args} />
</Template>

<Story name="Without Icon" let:args>
	<Button {...args}>Button</Button>
</Story>

<Story name="With Icon" let:args>
	<Button {...args}>
		<IconMenu slot="icon" />
		Button
	</Button>
</Story>
