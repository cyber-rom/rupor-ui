import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Overlay } from './Overlay';

export default {
  title: 'Example/Overlay',
  component: Overlay,
} as ComponentMeta<typeof Overlay>;

const Template: ComponentStory<typeof Overlay> = (args) => <Overlay {...args} />;

export const Default = Template.bind({});

export const Transparent = Template.bind({});
Transparent.args = {
  transparent: true,
};
