import styled from 'styled-components';
import { vars } from '../../styles';

export const TabHeaderItemContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  flex: 1;
  border-radius: ${vars.x2} ${vars.x2} 0 0;
  cursor: pointer;
  text-transform: none;
`;
export const TabHeaderItemContainer = styled.div`
  display: flex;
  align-items: flex-end;
  height: 76px;
  width: 100%;
  background-color: transparent;
  .tab-header-item__content-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    flex: 1;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    cursor: pointer;
    text-transform: none;
  }
  .tab-header-item__content-container--active {
    background-color: #3b3d42;
  }
  .tab-header-item__title {
    color: white;
    font-size: 20px;
    line-height: 28px;

  }
`;

export const TabsContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const TabsContentContainer = styled.div`
  flex: 1;
  width: 100%;
  box-sizing: border-box;
`;

export const TabsHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  & > .tabs-header__header-item-container {
    flex: 1;
  }
`;
