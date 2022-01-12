import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Далее</Button>;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  onClick: () => console.log('clicked'),
  title: 'button'
};

export const Secondary = Template.bind({});
Secondary.args = {
 size: 'large',
 title: 'button',
 secondary: true,
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  title: 'button'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  title: 'button'
};
