import { HTMLAttributes } from 'react';
import { UserAvatarProps } from '../UserAvatar/UserAvatar.types';

export interface ChannelLabelProps {
  label: string;
  userAvatarProps?: UserAvatarProps;
  htmlSpanProps?: HTMLAttributes<HTMLSpanElement>;
  className?: string;
}
