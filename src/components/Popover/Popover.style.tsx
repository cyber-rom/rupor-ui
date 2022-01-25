import styled from 'styled-components';
import { PopoverWrapperProps } from './Popover.types';
import { vars } from '../../styles';

export const PopoverWrapper = styled.div<PopoverWrapperProps>`
  display: inline-block;
  position: sticky;
  transition-property: opacity, transform;
  transition-duration: 200ms;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
  transform-origin: ${({ transitionOrigin }) => transitionOrigin};
  opacity: 0;
  margin: ${vars.x2};
  transform: scale(0.1);
  &.RuiPopover-animation {
    opacity: 1;
    transform: scale(1);
  }
`;
