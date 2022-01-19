import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { RadioTabGroup } from './RadioTabGroup';

const tabs = [
  { id: 1, children: <span>1st</span> },
  { id: 2, children: <>2nd</> },
  { id: 3, children: <div>Third</div> },
  { id: 4, children: '🥇' },
];

export default {
  title: 'Example/RadioTabGroup',
  component: RadioTabGroup,
} as ComponentMeta<typeof RadioTabGroup>;

export const ExampleRadioTab = () => (
  <div style={{ width: '500px' }}>
    <RadioTabGroup
      tabs={tabs}
      onSelectHandler={() => {}}
    />
  </div>

);
