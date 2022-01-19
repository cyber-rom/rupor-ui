import React from 'react';
import {
  UserAvatarDefaultSvg, UserAvatarImage, UserAvatarProSvg, UserAvatarWrapper,
} from './UserAvatar.style';
import { UserAvatarProps } from './UserAvatar.types';

export const UserAvatar = (props: UserAvatarProps) => {
  const {
    src,
    size,
    htmlImageProps,
    htmlDefaultAvatarSvgProps,
    srcBase64,
    htmlProIconSvgProps,
    pro,
    className,
  } = props;

  const isSrc = src || srcBase64;

  return (
    <UserAvatarWrapper size={size} className={className}>
      {isSrc
        ? (
          <UserAvatarImage
            src={srcBase64 ? `data:image/png;base64,${srcBase64}` : src}
            {...htmlImageProps}
          />
        )
        : <UserAvatarDefaultSvg {...htmlDefaultAvatarSvgProps} />}
      {pro && <UserAvatarProSvg size={size} {...htmlProIconSvgProps} />}
    </UserAvatarWrapper>
  );
};
