import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UserAvatar } from './UserAvatar';
import { Sizes } from '../../types/enums';

export default {
  title: 'Example/UserAvatar',
  component: UserAvatar,
} as ComponentMeta<typeof UserAvatar>;

const Template: ComponentStory<typeof UserAvatar> = (args) => <UserAvatar {...args} />;

export const EmptyDefault = Template.bind({});

export const EmptyPro = Template.bind({});
EmptyPro.args = {
  pro: true,
};

export const FilledDefault = Template.bind({});
FilledDefault.args = {
  src: 'https://habrastorage.org/getpro/moikrug/uploads/company/100/007/591/5/logo/c4aa78bbfaf44b1504af08e987d0939a.png',
};

export const FilledPro = Template.bind({});
FilledPro.args = {
  src: 'https://habrastorage.org/getpro/moikrug/uploads/company/100/007/591/5/logo/c4aa78bbfaf44b1504af08e987d0939a.png',
  pro: true,
};

export const EmptyDefaultSmall = Template.bind({});
EmptyDefaultSmall.args = {
  size: Sizes.sm,
};

export const EmptySmallPro = Template.bind({});
EmptySmallPro.args = {
  size: Sizes.sm,
  pro: true,
};

export const FilledDefaultSmall = Template.bind({});
FilledDefaultSmall.args = {
  src: 'https://habrastorage.org/getpro/moikrug/uploads/company/100/007/591/5/logo/c4aa78bbfaf44b1504af08e987d0939a.png',
  size: Sizes.sm,
};

export const FilledSmallPro = Template.bind({});
FilledSmallPro.args = {
  src: 'https://habrastorage.org/getpro/moikrug/uploads/company/100/007/591/5/logo/c4aa78bbfaf44b1504af08e987d0939a.png',
  size: Sizes.sm,
  pro: true,
};
