import styled from 'styled-components';
import { vars } from '../../../styles';

export const RadioTabButton = styled.div<any>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${vars.fontFamily};
  margin: 0 ${vars.x4} 0 ${vars.x4};
  cursor: pointer;
  width: 100%;
  height: 32px;
  border-radius: 4px;
  background-color: ${(props) => (props.isSelected ? vars.colorLightBlueGrey : vars.colorGrey)};
  color: ${(props) => (props.isSelected ? vars.colorTag : vars.colorTextLight)};
  font-size: ${vars.x3};
  line-height: ${vars.x5};
  :hover {
    background-color: ${vars.colorLightBlueGrey};
    color: ${vars.colorTag};
  }
  &.active {
    background-color: ${vars.colorLightBlueGrey};
    color: ${vars.colorTag};
  }
`;
