import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header';
import { AddVideoIcon, NotificationIcon } from '../../assets/icons';

import { HeaderProps } from './Header.types';

export default {
  title: 'Example/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args: HeaderProps) => (
  <Header {...args}>Показать больше</Header>
);

export const HeaderStory = Template.bind({});
HeaderStory.args = {
  icons: [
    { icon: <AddVideoIcon />, onClick: () => {} },
    { icon: <NotificationIcon />, onClick: () => {} },
  ],
  isLogged: false,
  buttonTxt: 'Войти',
  logInClick: () => {},
  logoClick: () => {},
};
