import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from './Checkbox';

export default {
  title: 'Example/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = {
  disabled: true,
  checked: true,
};

export const Toggle = Template.bind({});
Toggle.args = {
  toggle: true,
};

export const ToggleChecked = Template.bind({});
ToggleChecked.args = {
  checked: true,
  toggle: true,
};

export const ToggleDisabled = Template.bind({});
ToggleDisabled.args = {
  disabled: true,
  toggle: true,
};

export const ToggleCheckedDisabled = Template.bind({});
ToggleCheckedDisabled.args = {
  disabled: true,
  checked: true,
  toggle: true,
};
