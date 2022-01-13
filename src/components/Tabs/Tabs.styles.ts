import styled from "styled-components";

export const TabHeaderItemContainer = styled.div`
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

export const TabLayoutContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #3b3d42;
`

export const TabsContainer = styled.div`
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

export const TabsHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  & > .tabs-header__header-item-container {
    flex: 1;
  }
`
