import React, { FC } from "react";
import {ITabHeaderItemProps} from "../Tabs.types";
import {TabHeaderItemContainer} from "../Tabs.styles";

const TabHeaderItem: FC<ITabHeaderItemProps> = ({text, selected, onClick}) => {

    return (
        <TabHeaderItemContainer onClick={onClick}>
            <div className={`tab-header-item__content-container 
        ${selected ? "tab-header-item__content-container--active" : ''}`}>
                <span className="tab-header-item__title">{text}</span>
            </div>
        </TabHeaderItemContainer>
    )
}

export {TabHeaderItem}