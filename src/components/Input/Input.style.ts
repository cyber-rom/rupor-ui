import styled from 'styled-components';
import { InputProps } from './Input.types';
import { vars } from '../../styles';
import { tone } from '../../styles/theme/opasity';
import { fonts as ThemeFonts } from '../../styles/theme/typography';

export const InputWrapper = styled.div<Pick<InputProps, 'variant' | 'afix' | 'postfix' | 'disabled'>>`
  ${({ variant }) => {
    switch (variant) {
      case 'thin': {
        return { ...ThemeFonts.fontInputThin };
      }
      default: {
        return { ...ThemeFonts.fontLabel };
      }
    }
  }}
  display: flex;
  align-items: center;
  background-color: ${vars.colorBlack};
  border-radius: ${vars.x2};
  padding: ${({ variant, afix, postfix }) => {
    switch (variant) {
      case 'thin': {
        const paddingRight = postfix ? vars.x4 : 0;
        const paddingLeft = afix ? vars.x4 : 0;
        return `0 ${paddingRight} 0 ${paddingLeft}`;
      }
      default: {
        const paddingRight = postfix ? vars.x4 : 0;
        const paddingLeft = afix ? vars.x4 : 0;
        return `0 ${paddingRight} 0 ${paddingLeft}`;
      }
    }
  }};
  &:hover {
    background-color: ${({ disabled }) => (!disabled && vars.colorSecondaryDarkDefault)};
  }
  &.RuiInput-focused {
    background-color: ${vars.colorSecondaryDarkDefault};
  }
  &.RuiInput-disabled {
    opacity: ${tone.toneHover};
  }
`;

export const AbortmentContainer = styled.div<Pick<InputProps, 'disabled'>>`
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  white-space: nowrap;
  flex-wrap: nowrap;
  &::before {
    display: ${({ disabled }) => (disabled ? 'block' : 'none')};;
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;
