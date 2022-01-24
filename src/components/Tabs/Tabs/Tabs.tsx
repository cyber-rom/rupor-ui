import React, { FC, useState } from 'react';
import { TabsHeader } from '../TabsHeader/TabsHeader';
import { ITabs } from '../Tabs.types';
import { TabsContainer, TabsContentContainer } from '../Tabs.styles';

const Tabs: FC<ITabs> = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <TabsContainer>
      <TabsHeader
        tabs={tabs}
        onTabClick={handleTabClick}
        activeIndex={activeIndex}
      />
      <TabsContentContainer>
        {tabs[activeIndex].renderContent()}
      </TabsContentContainer>
    </TabsContainer>
  );
};

export { Tabs };
