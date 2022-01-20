import styled, { css } from 'styled-components';
import { NavigationItemProps } from './NavigationItem.props';
import { LinkBase } from '../../LinkBase';
import { vars } from '../../../styles';
import { fonts as ThemeFonts } from '../../../styles/theme/typography';

const TitleCollapsedStyle = css`
  ${{ ...ThemeFonts.fontLabelSmall }}
  margin-top: ${vars.x05};
  display: block;
  `;

const TitleNoCollapsedStyle = css`
  ${{ ...ThemeFonts.fontLabel }}
  margin-left: ${vars.x6};
  `;

export const TitleWrapper = styled.span<NavigationItemProps>`
  &:hover {
    color: ${vars.colorWhite}
  }
  ${({ collapsed }) => (collapsed ? TitleCollapsedStyle : TitleNoCollapsedStyle)};
}
`;

export const Link = styled(LinkBase)<NavigationItemProps>`
  display: flex;
  align-items: center;
  flex-direction: ${({ collapsed }) => (collapsed ? 'column' : 'row')};
  color: ${vars.colorTag};
  &:hover {
    color: ${vars.colorWhite};
    }
  }
`;
