import React, {FC} from 'react';
import {TabHeaderItem} from "../TabHeaderItem/TabHeaderItem";
import styled from "styled-components";

interface ITabs {
    tabs: ITab[],
    activeIndex: number,
    onTabClick: (index: number) => void
}

interface ITab {
    text: string
}

const TabsHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  & > .tabs-header__header-item-container {
    flex: 1;
  }
`

const TabsHeader: FC<ITabs> = ({tabs, activeIndex, onTabClick}) => {
    const handleClick = (index: number) => {
        onTabClick(index)
    }
    return (
        <TabsHeaderContainer>
            {tabs.map((tab, index) => (
                <div className="tabs-header__header-item-container" key={index}>
                    <TabHeaderItem text={tab.text}
                                   onClick={() => handleClick(index)}
                                   selected={index === activeIndex}/>
                </div>
            ))}
        </TabsHeaderContainer>
    )
}

export {TabsHeader}