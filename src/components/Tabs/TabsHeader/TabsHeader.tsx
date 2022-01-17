import React, { FC } from 'react';
import uniqid from 'uniqid';
import { TabHeaderItem } from '../TabHeaderItem/TabHeaderItem';
import { TabsHeaderContainer } from '../Tabs.styles';
import { ITabs } from '../Tabs.types';

const TabsHeader: FC<ITabs> = ({ tabs, activeIndex, onTabClick }) => (
  <TabsHeaderContainer>
    {tabs.map((tab, index) => (
      <div className="tabs-header__header-item-container" key={uniqid()}>
        <TabHeaderItem
          text={tab.text}
          onClick={() => onTabClick(index)}
          selected={index === activeIndex}
        />
      </div>
    ))}
  </TabsHeaderContainer>
);

export { TabsHeader };
