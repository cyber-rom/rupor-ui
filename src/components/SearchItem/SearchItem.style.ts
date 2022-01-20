import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { vars } from '../../styles';

export const StyledSearchItem = styled.a<HTMLAttributes<HTMLLinkElement>>`
  padding-left: ${vars.x4};
  padding-right: ${vars.x4};
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 518px;
  max-height: 48px;
  width: 100%;
  background: ${vars.colorWhite};
  order: 3;
  text-decoration: none;
  flex-grow: 0;
  &:hover{
    background: ${vars.colorLightBlueGrey};
  };
  &:focus-within{
    background: ${vars.colorLightBlueGrey};
  }
`;

export const StyledText = styled.p<HTMLAttributes<HTMLParagraphElement>>`
  margin-right: ${vars.x3};
  margin-left: ${vars.x3};
  width: 446px;
  height: ${vars.x5};
  left: 52px;
  top: ${vars.x3_5};
  font-size: ${vars.x3_5};
  line-height: ${vars.x5};
  color: ${vars.colorBlack};
`;

export const StyledSpan = styled.span<HTMLAttributes<HTMLSpanElement>>`
  height: ${vars.x5};
  top: ${vars.x3_5};
  opacity: 50%;
  font-size: ${vars.x3_5};
  line-height: ${vars.x5};
  color: ${vars.colorRed};
`;
