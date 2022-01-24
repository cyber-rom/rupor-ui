import styled, { keyframes } from 'styled-components';
import { vars } from '../../styles';
import { TextFieldProps } from './TextField.types';
import { tone } from '../../styles/theme/opasity';
import { fonts as ThemeFonts } from '../../styles/theme/typography';

const errorAnimation = keyframes`
  0% {
    transform: translateX(0px);
  }
  20% {
    transform: translateX(2px);
  }
  100% {
    transform: translateX(0px);
  }
`;

const succesAnimation = keyframes`
  0% {
    opacity: 0.5;
    transform: scale(0);
  }
  30% {
    transform: scale(0.8);
  }
  60% {
    transform: scale(0.6);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const TextFieldLabel = styled.label`
  ${{ ...ThemeFonts.fontLabel }}
  display: inline-block;
  margin-bottom: ${vars.x4};
`;

export const TextFieldHelperText = styled.span<Pick<TextFieldProps, 'error' | 'approved'>>`
  ${{ ...ThemeFonts.fontHelperText }}
  display: flex;
  align-items: center;
  margin-top: ${vars.x3};
  color: ${({ error, approved }) => {
    if (error) return vars.colorPrimaryDefault;
    if (approved) return vars.colorPrimarySucces;
    return 'currentColor';
  }};
  .RuiTextField-icon {
    margin-right: ${vars.x2};
    &_error {
      animation: ${errorAnimation} 100ms ease-in-out 3 forwards;
    }
    &_approved {
      animation: ${succesAnimation} 600ms ease-in-out forwards;
    }
  }
`;

export const TextFieldWrapper = styled.div<{ disabled?: boolean }>`
  ${TextFieldLabel}, ${TextFieldHelperText} {
    opacity: ${({ disabled }) => disabled && tone.toneHover};
  }
`;
