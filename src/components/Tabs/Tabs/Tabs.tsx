import React, {FC, useState} from 'react'
import {TabsHeader} from "../TabsHeader/TabsHeader";
import styled from "styled-components";
import {ITabs} from "../Tabs.types";

const TabsContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .tabs__content-container {
    flex: 1;
    width: 100%;
    box-sizing: border-box;
  }
`

const Tabs: FC<ITabs> = ({tabs}) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const handleTabClick = (index: number) => {
        setActiveIndex(index)
    }
    return (
        <TabsContainer>
            <div className="tabs__header">
                <TabsHeader
                    tabs={tabs}
                    onTabClick={handleTabClick}
                    activeIndex={activeIndex}/>
            </div>
            <div className="tabs__content-container">
                {tabs[activeIndex].renderContent()}
            </div>
        </TabsContainer>
    )
}

export {Tabs}