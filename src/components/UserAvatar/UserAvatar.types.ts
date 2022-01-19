import { HTMLAttributes, SVGAttributes } from 'react';
import { Sizes } from '../../types/enums';

export interface UserAvatarProps {
  pro?: boolean;
  size?: Sizes;
  src?: string;
  srcBase64?: string;
  htmlImageProps?: HTMLAttributes<HTMLImageElement>;
  htmlDefaultAvatarSvgProps?: SVGAttributes<SVGElement>;
  htmlProIconSvgProps?: SVGAttributes<SVGElement>;
  className?: string;
}

export type UserAvatarWrapperProps = Pick<UserAvatarProps, 'size'>;
export type UserAvatarProIconProps = Pick<UserAvatarProps, 'size'>;
