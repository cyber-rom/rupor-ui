import styled from 'styled-components';
import { OverlayProps } from './Overlay.types';
import { vars } from '../../styles';

export const StyledOverlay = styled.div<OverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: ${({ transparent }) => (transparent ? 'transparent' : vars.colorOverlay)};
`;
