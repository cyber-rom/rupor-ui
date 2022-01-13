import React, {FC} from 'react';
import {TabHeaderItem} from "../TabHeaderItem/TabHeaderItem";
import styled from "styled-components";

interface ITabs {
    tabs: Array<ITab>,
    activeIndex: number,
    onTabClick: any
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
        console.log('TabsHeader')
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