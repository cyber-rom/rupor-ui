import styled, { css } from 'styled-components';
import { vars } from '../../styles';
import { tone } from '../../styles/theme/opasity';
import { spacing } from '../../styles/theme/spacing';
import { CrossIcon, MicrophoneIcon, SearchIcon } from '../../assets/icons';

const iconsStyle = css`
  cursor: pointer;
  &:hover {
    opacity: ${tone.toneHover};
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
`;

export const SearchDropdown = styled.div`
  position: absolute;
  bottom: ${-1 * spacing.x2}px;
  left: 0;
  width: 100%;
  transform: translateY(100%);
`;

export const StyledSearchIcon = styled(SearchIcon)`
  ${iconsStyle}
`;

export const StyledCrossIcon = styled(CrossIcon)`
  margin-right: ${vars.x2};
  ${iconsStyle}
`;

export const StyledMicrophoneIcon = styled(MicrophoneIcon)`
  ${iconsStyle}
`;
