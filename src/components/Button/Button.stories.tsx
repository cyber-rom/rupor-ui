import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';
// import ArrowIcon from '../../assets/icons/arrowIcon';

import { ButtonSize } from './Button.types';

export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  title: 'Primary Button',
  size: ButtonSize.Large,
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: ButtonSize.Large,
  title: 'Secondary Button',
  secondary: true,
};

export const Circle = Template.bind({});
Circle.args = {
  title: '',
  circle: true,
  backgroundColor: '#27282D',
};

export const Tag = Template.bind({});
Tag.args = {
  title: 'Tag',
  size: ButtonSize.Tag,
};
