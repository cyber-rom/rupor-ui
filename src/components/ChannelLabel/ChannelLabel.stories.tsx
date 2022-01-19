import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ChannelLabel } from './ChannelLabel';
import { Sizes } from '../../types/enums';

export default {
  title: 'Example/ChannelLabel',
  component: ChannelLabel,
} as ComponentMeta<typeof ChannelLabel>;

const Template: ComponentStory<typeof ChannelLabel> = (args) => <ChannelLabel {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Channel Label',
};

export const WithImage = Template.bind({});
WithImage.args = {
  label: 'Channel Label',
  userAvatarProps: {
    src: 'https://habrastorage.org/getpro/moikrug/uploads/company/100/007/591/5/logo/c4aa78bbfaf44b1504af08e987d0939a.png',
  },
};

export const WithLargeImage = Template.bind({});
WithLargeImage.args = {
  label: 'Channel Label',
  userAvatarProps: {
    src: 'https://habrastorage.org/getpro/moikrug/uploads/company/100/007/591/5/logo/c4aa78bbfaf44b1504af08e987d0939a.png',
    size: Sizes.lg,
  },
};
