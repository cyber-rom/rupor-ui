import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchItem } from './searchItem';

export default {
  title: 'Example/SearchItem',
  component: SearchItem,
} as ComponentMeta<typeof SearchItem>;

const Template: ComponentStory<typeof SearchItem> = (args) => <SearchItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: 'https://habrastorage.org/getpro/moikrug/uploads/company/100/007/591/5/logo/c4aa78bbfaf44b1504af08e987d0939a.png',
  searchText: 'Как собрать',
  predictText: ' кубик рубика?',
  href: 'https://s01.yapfiles.ru/files/2178261/gandalf.gif',
};
