import styled, { css } from 'styled-components';
import { NavigationItemProps } from './NavigationItem.props';
import { LinkBase } from '../../LinkBase';
import { vars } from '../../../styles';

const TitleCollapsedStyle = css`
  font-size: 9px;
  margin-top: ${vars.x05};
  display: block;
  `;

const TitleNoCollapsedStyle = css`
  font-size: 14px;
  margin-left: ${vars.x6};
  `;

export const TitleWrapper = styled.span<NavigationItemProps>`
  font-family: ${vars.fontFamily};
  font-weight: 400;
  &:hover {
    color: ${vars.colorWhite}
  }
  ${({ collapsed }) => {
    return collapsed ? TitleCollapsedStyle : TitleNoCollapsedStyle;
  }
}
`;

export const Link = styled(LinkBase)<NavigationItemProps>`
  display: flex;
  align-items: center;
  flex-direction: ${({ collapsed }) => {
    return collapsed ? 'column' : 'row';
  }};
  color: ${vars.colorTag};
  &:hover {
    color: ${vars.colorWhite};
    }
  }
`;
