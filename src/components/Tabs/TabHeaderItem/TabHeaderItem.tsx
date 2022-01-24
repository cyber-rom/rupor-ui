import React, { FC } from 'react';
import { ITabHeaderItemProps } from './TabHeaderItem.types';
import { TabHeaderItemContainer } from '../Tabs.styles';
import { TabHeaderItemContentContainer, TabHeaderItemTitle } from './TabHeaderItem.styles';

const TabHeaderItem: FC<ITabHeaderItemProps> = ({ text, selected, onClick }) => (
  <TabHeaderItemContainer onClick={onClick}>
    <TabHeaderItemContentContainer isSelected={selected}>
      <TabHeaderItemTitle>{text}</TabHeaderItemTitle>
    </TabHeaderItemContentContainer>
  </TabHeaderItemContainer>
);

export { TabHeaderItem };
