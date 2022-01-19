import { HTMLAttributes } from 'react';
import { UserAvatarProps } from '../UserAvatar/UserAvatar.types';

export interface ChannelLabelProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  userAvatarProps?: UserAvatarProps;
  htmlSpanProps?: HTMLAttributes<HTMLSpanElement>;
}
