import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Notification } from './Notification';
import { ArrowIcon } from '../../assets/icons';

export default {
  title: 'Example/Notification',
  component: Notification,
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (args) => <Notification {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isNotified: false,
};

export const Custom = Template.bind({});
Custom.args = {
  isNotified: false,
  customIcon: <ArrowIcon />,
};
