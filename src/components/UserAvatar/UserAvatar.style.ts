import styled, { css } from 'styled-components';
import ProIcon from '../../assets/icons/proIcon';
import DefaultUserAvatarIcon from '../../assets/icons/defaultUserAvatarIcon';
import { UserAvatarProIconProps, UserAvatarWrapperProps } from './UserAvatar.types';
import { Sizes } from '../../types/enums';

const defaultImageSize = css`width: 100%; height: 100%;`;

const defaultWrapperSize = css`width: 96px; height: 96px;`;
const smallWrapperSize = css`width: 40px; height: 40px;`;

const defaultProIconSize = css`width: 29px; height: 36px;`;
const smallProIconSize = css`width: 16px; height: 20px;`;

export const UserAvatarWrapper = styled.div<UserAvatarWrapperProps>`
  position: relative;
  ${({ size }) => {
    switch (size) {
      case Sizes.sm:
        return smallWrapperSize;
      default:
        return defaultWrapperSize;
    }
  }}
`;

export const UserAvatarDefaultSvg = styled(DefaultUserAvatarIcon)`${defaultImageSize}`;

export const UserAvatarImage = styled.img`
  display: block;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  overflow: hidden;
  ${defaultImageSize}
`;

export const UserAvatarProSvg = styled(ProIcon)<UserAvatarProIconProps>`
  position: absolute;
  right: 0;
  bottom: 0;
  ${({ size }) => {
    switch (size) {
      case Sizes.sm:
        return smallProIconSize;
      default:
        return defaultProIconSize;
    }
  }}
`;
