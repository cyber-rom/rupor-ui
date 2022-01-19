import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NavigationItem } from './NavigationItem';
import { HouseIcon } from '../../../assets/icons';

export default {
  title: 'Example/NavigationItem',
  component: NavigationItem,
} as ComponentMeta<typeof NavigationItem>;

const Template: ComponentStory<typeof NavigationItem> = (args) => <div style={{ width: '100px' }}><NavigationItem {...args} /></div>;

export const Primary = Template.bind({});
Primary.args = {
  icon: <HouseIcon />,
  title: 'Главная',
  collapsed: false,
  href: '/main',
  external: true,
};
