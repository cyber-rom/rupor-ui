import React from 'react';

import uniqid from 'uniqid';
import { Button } from '../index';
import { UserAvatar } from '../UserAvatar';
import {
  HeaderWrapper, HeaderContainer, LogoIcon, ButtonContainer, SvgItem,
} from './Header.style';
import { RuporLogoIcon, ProfileIcon } from '../../assets/icons';
import { vars } from '../../styles';

import { HeaderProps } from './Header.types';
import { Sizes } from '../../types/enums';

export const Header = ({
  className, icons, isLogged, avatarSrc, buttonTxt, logInClick, logoClick,
}: HeaderProps) => (
  <HeaderWrapper className={className}>
    <HeaderContainer>
      <LogoIcon onClick={logoClick}><RuporLogoIcon /></LogoIcon>
      <div>Search Panel</div>
    </HeaderContainer>
    <HeaderContainer>
      {icons?.map((item) => <SvgItem key={uniqid()} onClick={item.onClick}>{item.icon}</SvgItem>)}
      <ButtonContainer>
        {isLogged ? <UserAvatar size={Sizes.sm} src={avatarSrc} /> : (
          <Button
            title={buttonTxt}
            theme="secondaryDark"
            backgroundColor={vars.colorDarkGrey}
            icon={<ProfileIcon />}
            onClick={logInClick}
          />
        )}
      </ButtonContainer>
    </HeaderContainer>
  </HeaderWrapper>
);
