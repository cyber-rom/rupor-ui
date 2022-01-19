import styled from 'styled-components';
import { LinkBaseProps } from './LinkBase.type';

export const Link = styled.a<LinkBaseProps>`
  font: inherit;
  color: inherit;
  text-decoration: inherit;
  cursor: pointer;
`;
