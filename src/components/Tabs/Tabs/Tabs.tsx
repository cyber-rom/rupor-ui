import React, {FC, useState} from 'react'
import {TabsHeader} from "../TabsHeader/TabsHeader";
import {ITabs} from "../Tabs.types";
import {TabsContainer} from "../Tabs.styles";

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