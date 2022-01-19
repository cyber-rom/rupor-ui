import styled from 'styled-components';
import { vars } from '../../../styles';
import { RadioTabDivType } from '../RadioTabGroup.types';

export const RadioTabButton = styled.div<RadioTabDivType>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${vars.fontFamily};
  font-size: ${vars.x3};
  line-height: ${vars.x5};
  margin: 0 ${vars.x4};
  cursor: pointer;
  width: 100%;
  height: 32px;
  border-radius: ${vars.x1};
  background-color: ${(props) => (props.isSelected ? vars.colorLightBlueGrey : vars.colorGrey)};
  color: ${(props) => (props.isSelected ? vars.colorTag : vars.colorTextLight)};
  :hover {
    background-color: ${vars.colorLightBlueGrey};
    color: ${vars.colorTag};
  }
  &.active {
    background-color: ${vars.colorLightBlueGrey};
    color: ${vars.colorTag};
  }
`;
