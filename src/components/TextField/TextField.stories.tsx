import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextField } from './TextField';

export default {
  title: 'Example/TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

export const Default = Template.bind({});

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Label',
  id: 'WithLabel',
  inputProps: {
    placeholder: 'TextField',
  },
};

export const Error = Template.bind({});
Error.args = {
  label: 'Label',
  id: 'WithLabel',
  error: true,
  helperText: 'Error',
  inputProps: {
    placeholder: 'TextField',
  },
};

export const Approved = Template.bind({});
Approved.args = {
  label: 'Label',
  id: 'WithLabel',
  approved: true,
  helperText: 'Approved',
  inputProps: {
    placeholder: 'TextField',
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Label',
  id: 'WithLabel',
  disabled: true,
  inputProps: {
    placeholder: 'TextField',
  },
};

export const DisabledError = Template.bind({});
DisabledError.args = {
  label: 'Label',
  id: 'WithLabel',
  disabled: true,
  error: true,
  helperText: 'Im Disabled Error',
  inputProps: {
    placeholder: 'TextField',
  },
};
