import styled from 'styled-components';
import { vars } from '../../../styles';
import { fonts as ThemeFonts } from '../../../styles/theme/typography';
import { TabHeaderItemContentDivType } from './TabHeaderItem.types';

export const TabHeaderItemContainer = styled.div`
  display: flex;
  align-items: flex-end;
  height: 76px;
  width: 100%;
  background-color: transparent;
`;

export const TabHeaderItemContentContainer = styled.div<TabHeaderItemContentDivType>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.isSelected ? vars.colorGrey : 'transparent')};
  flex: 1;
  border-radius: ${vars.x2} ${vars.x2} 0 0;
  cursor: pointer;
  text-transform: none;
`;

export const TabHeaderItemTitle = styled.div`
  ${{ ...ThemeFonts.fontTabHeaderItem }}
  color: white;
`;
