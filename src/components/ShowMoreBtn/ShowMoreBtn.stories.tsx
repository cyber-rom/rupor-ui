import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ShowMoreBtn } from './ShowMoreBtn';
import { DownArrowIcon } from '../../assets/icons';

export default {
  title: 'Example/ShowMoreBtn',
  component: ShowMoreBtn,
} as ComponentMeta<typeof ShowMoreBtn>;

const Template: ComponentStory<typeof ShowMoreBtn> = (args) => (
  <ShowMoreBtn {...args}>Показать больше</ShowMoreBtn>
);

export const ShowMoreTest = Template.bind({});
ShowMoreTest.args = {
  collapsed: false,
  icon: <DownArrowIcon />,
};
