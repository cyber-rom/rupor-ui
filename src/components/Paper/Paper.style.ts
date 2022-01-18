import styled from 'styled-components';
import { PaperProps, PaperVariants } from './Paper.types';
import { vars } from '../../styles';

export const PaperWrapper = styled.div<PaperProps>`
  border-radius: ${({ square, borderRadius = 8 }) => (square ? 0 : `${borderRadius}px`)};
  border: ${({ variant }) => {
    switch (variant) {
      case PaperVariants.outlined:
        return `1px solid ${vars.colorGrey}`;
      default:
        return 'none';
    }
  }};
  box-shadow: ${({ elevation, variant }) => {
    if (variant === PaperVariants.outlined) {
      return 'none';
    }
    switch (elevation) {
      case 0:
        return 'none';
      case 1:
        return '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)';
      case 2:
        return '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)';
      case 3:
        return '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)';
      case 4:
        return '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)';
      case 5:
        return '0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)';
      case 6:
        return '0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)';
      case 7:
        return '0px 7px 8px -4px rgb(0 0 0 / 20%), 0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 12%)';
      default:
        return '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)';
    }
  }}
`;
