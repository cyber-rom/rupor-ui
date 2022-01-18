import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Paper } from './Paper';
import { PaperVariants } from './Paper.types';

export default {
  title: 'Example/Paper',
  component: Paper,
} as ComponentMeta<typeof Paper>;

const Template: ComponentStory<typeof Paper> = (args) => (
  <Paper {...args}><div style={{ height: 100 }} /></Paper> // div for example
);

export const Default = Template.bind({});

export const Outlined = Template.bind({});
Outlined.args = {
  variant: PaperVariants.outlined,
};

export const OutlinedSquare = Template.bind({});
OutlinedSquare.args = {
  variant: PaperVariants.outlined,
  square: true,
};

export const Elevation0 = Template.bind({});
Elevation0.args = {
  elevation: 0,
};

export const Elevation1 = Template.bind({});
Elevation1.args = {
  elevation: 1,
};

export const Elevation2 = Template.bind({});
Elevation2.args = {
  elevation: 2,
};

export const Elevation3 = Template.bind({});
Elevation3.args = {
  elevation: 3,
};
