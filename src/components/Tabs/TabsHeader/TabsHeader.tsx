import React, { FC } from 'react';
import { TabHeaderItem } from '../TabHeaderItem/TabHeaderItem';
import { TabsHeaderContainer } from '../Tabs.styles';
import { ITabs } from '../Tabs.types';

const TabsHeader: FC<ITabs> = ({ tabs, activeIndex, onTabClick }) => (
  <TabsHeaderContainer>
    {tabs.map((tab, index) => (
      <div className="tabs-header__header-item-container" key={tab.text}>
        {/* TO-DO Так как ESlint ругается на использование индекса массива для key,
            на данный момент используется название таба, но нужно установить
            пакет для генерации уникадльных id и использовать их */}
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
