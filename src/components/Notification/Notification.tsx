import React from 'react';
import { NotificationIconType } from './Notification.types';
import { NotificationIcon } from '../../assets/icons';
import { NotificationR } from './Notification.style';

export const Notification = ({ isNotified, customIcon }:NotificationIconType) => (
  <NotificationR isNotified={isNotified}>
    { customIcon || <NotificationIcon />}
  </NotificationR>
);
