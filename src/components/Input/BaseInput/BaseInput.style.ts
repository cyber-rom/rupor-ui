import styled from 'styled-components';
import { BaseInputProps } from './BaseInput.types';
import { vars } from '../../../styles';

export const StyledBaseInput = styled.input<Pick<BaseInputProps, 'variant' | 'afix' | 'postfix'>>`
  font: inherit;
  color: currentColor;
  background: none;
  border: none;
  display: block;
  width: 100%;
  padding: ${({ variant, afix, postfix }) => {
    switch (variant) {
      case 'thin': {
        const paddingTop = vars.x2;
        const paddingRight = postfix ? vars.x3 : vars.x4;
        const paddingBottom = vars.x2;
        const paddingLeft = afix ? vars.x3 : vars.x4;
        return `${paddingTop} ${paddingRight} ${paddingBottom} ${paddingLeft}`;
      }
      default: {
        const paddingTop = vars.x3_5;
        const paddingRight = postfix ? vars.x3 : vars.x6;
        const paddingBottom = vars.x3_5;
        const paddingLeft = afix ? vars.x3 : vars.x6;
        return `${paddingTop} ${paddingRight} ${paddingBottom} ${paddingLeft}`;
      }
    }
  }};
  &:focus {
    outline: none;  
  }
`;
