import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './Input';
import { SearchIcon, MicrophoneIcon, CrossIcon } from '../../assets/icons';

export default {
  title: 'Example/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'Input',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  placeholder: 'Input',
};

export const DisabledWithAbortment = Template.bind({});
DisabledWithAbortment.args = {
  disabled: true,
  afix: <SearchIcon style={{ cursor: 'pointer' }} />,
  postfix: <MicrophoneIcon />,
  placeholder: 'Input',
};

export const Afix = Template.bind({});
Afix.args = {
  afix: <SearchIcon />,
  placeholder: 'Input',
};

export const Postfix = Template.bind({});
Postfix.args = {
  postfix: <MicrophoneIcon />,
  placeholder: 'Input',
};

export const AfixPostfix = Template.bind({});
AfixPostfix.args = {
  afix: <SearchIcon />,
  postfix: <MicrophoneIcon />,
  placeholder: 'Input',
};

export const ManyAbortment = Template.bind({});
ManyAbortment.args = {
  afix: (
    <>
      <SearchIcon />
      <CrossIcon />
      <MicrophoneIcon />
    </>),
  postfix: (
    <>
      <CrossIcon />
      <CrossIcon />
      <SearchIcon />
      <MicrophoneIcon />
    </>),
  placeholder: 'Input',
};

export const ThinInput = Template.bind({});
ThinInput.args = {
  variant: 'thin',
  placeholder: 'Input',
};

export const ThinInputManyAbortment = Template.bind({});
ThinInputManyAbortment.args = {
  variant: 'thin',
  afix: (
    <>
      <SearchIcon />
      <CrossIcon />
      <MicrophoneIcon />
    </>),
  postfix: (
    <>
      <CrossIcon />
      <CrossIcon />
      <SearchIcon />
      <MicrophoneIcon />
    </>),
  placeholder: 'Input',
};
