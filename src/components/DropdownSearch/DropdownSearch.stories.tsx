import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DropdownSearch } from './DropdownSearch';

export default {
  title: 'Example/DropdownSearch',
  component: DropdownSearch,
} as ComponentMeta<typeof DropdownSearch>;

const Template: ComponentStory<typeof DropdownSearch> = (args) => <DropdownSearch {...args} />;

export const Default = Template.bind({});

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  inputProps: {
    placeholder: 'Введите видео, канал, интерес',
  },
};

export const WithDropdown = Template.bind({});
WithDropdown.args = {
  dropdownContent: <div style={{ height: 200, border: '1px solid gray' }}>Dropdown</div>,
  inputProps: {
    placeholder: 'Введите видео, канал, интерес',
  },
};

export const WithDebounceQueryCallback = Template.bind({});
WithDebounceQueryCallback.args = {
  queryCallback: (value) => console.log(value),
  debounceTime: 500,
  inputProps: {
    placeholder: 'Введите видео, канал, интерес',
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  inputProps: {
    disabled: true,
    placeholder: 'Введите видео, канал, интерес',
  },
};
