import React, {FC} from 'react';
import {TabHeaderItem} from "../TabHeaderItem/TabHeaderItem";
import {TabsHeaderContainer} from "../Tabs.styles";
import {ITabs} from "../Tabs.types";


const TabsHeader: FC<ITabs> = ({tabs, activeIndex, onTabClick}) => {

    return (
        <TabsHeaderContainer>
            {tabs.map((tab, index) => (
                <div className="tabs-header__header-item-container" key={index}>
                    <TabHeaderItem text={tab.text}
                                   onClick={() => onTabClick(index)}
                                   selected={index === activeIndex}/>
                </div>
            ))}
        </TabsHeaderContainer>
    )
}

export {TabsHeader}