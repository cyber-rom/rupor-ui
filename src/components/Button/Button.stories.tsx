import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';
import { ArrowIcon } from '../../assets/icons';

export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  theme: 'primary',
  title: 'Primary Button',
  // иконка для теста
  loaderIcon: <ArrowIcon />,
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: 'Secondary Button',
  theme: 'secondary',
};

export const Circle = Template.bind({});
Circle.args = {
  title: <ArrowIcon />,
  circle: true,
  backgroundColor: '#27282D',
};

export const Tag = Template.bind({});
Tag.args = {
  title: 'Tag',
  theme: 'tag',
};
