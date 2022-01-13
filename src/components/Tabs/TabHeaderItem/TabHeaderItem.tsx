import React, { FC } from "react";
import styled from "styled-components";
import {ITabHeaderItemProps} from "../Tabs.types";

const TabHeaderItemContainer = styled.div`
  display: flex;
  align-items: flex-end;
  height: 76px;
  width: 100%;
  background-color: transparent;
  .tab-header-item__content-container {
    width: 240px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    height: 100%;
    flex: 1;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    cursor: pointer;
  }
  .tab-header-item__content-container--active {
    background-color: #3b3d42;
  }
  .tab-header-item__title {
    color: white;
    font-size: 20px;
    line-height: 28px;

  }
`

const TabHeaderItem: FC<ITabHeaderItemProps> = ({text, selected, onClick}) => {


    const handleClick = () => {
        if (onClick) {
            onClick()
        }
    }

    return (
        <TabHeaderItemContainer onClick={handleClick}>
            <div className={`tab-header-item__content-container 
        ${selected ? "tab-header-item__content-container--active" : ''}`}>
                <span className="tab-header-item__title">{text}</span>
            </div>
        </TabHeaderItemContainer>
    )
}

export {TabHeaderItem}