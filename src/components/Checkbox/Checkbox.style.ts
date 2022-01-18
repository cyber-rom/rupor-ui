import styled, { css } from 'styled-components';
import { vars } from '../../styles';
import { tone } from '../../styles/theme/opasity';

const checkboxStyles = css`
  width: 20px;
  height: 20px;
  border: 1px solid ${vars.colorGrey};
  border-radius: 3px;
  transition-property: background-color;
`;

const checkboxCheckedStyles = css`
  background-color: ${vars.colorPrimaryDefault};
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m11 .5-7 7-3-3' stroke='%23212226' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  border: none;
`;

const checkboxHoverStyles = css`
  border-color: ${vars.colorTag};
`;

const toggleStyles = css`
  width: 40px;
  height: 24px;
  border-radius: 20px;
  background-color: ${vars.colorTextDark};
  transition-property: background-color;
  padding: 6px;
  &::before {
    background-color: ${vars.colorTextLight};
    content: '';
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    transition-duration: 200ms;
  }
`;

const toggleCheckedStyles = css`
  background-color: ${vars.colorPrimaryDefault};
  &::before {
    transform: translateX(16px);
  }
`;

const toggleHoverStyles = css`
  background-color: ${vars.colorSecondaryDarkDefault};
`;

export const DefaultCheckbox = styled.input.attrs({
  type: 'checkbox',
})`
  margin: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  cursor: pointer;
`;

export const StyledCheckbox = styled.span<{ toggle?: boolean }>`
  display: block;
  box-sizing: border-box;
  transition-duration: 200ms;
  ${({ toggle }) => (toggle ? toggleStyles : checkboxStyles)}
`;

export const CheckboxWrapper = styled.span<{ toggle?: boolean }>`
  display: inline-block;
  position: relative;
  color: red;
  ${DefaultCheckbox}:checked + ${StyledCheckbox} {
    ${({ toggle }) => (toggle ? toggleCheckedStyles : checkboxCheckedStyles)}
  }
  ${DefaultCheckbox}:disabled {
    cursor: initial;
  }
  ${DefaultCheckbox}:disabled + ${StyledCheckbox} {
    opacity: ${tone.toneHover};
  }
  ${DefaultCheckbox}:focus + ${StyledCheckbox} {
    /* outline: none; */ // TO-DO Спросить у дизайнера
  }
  &:hover ${DefaultCheckbox}:checked + ${StyledCheckbox}:not(${DefaultCheckbox}:disabled + ${StyledCheckbox}) {
    background-color: ${vars.colorPrimaryHover};
  }
  &:hover ${StyledCheckbox}:not(${DefaultCheckbox}:disabled + ${StyledCheckbox}) {
    ${({ toggle }) => (toggle ? toggleHoverStyles : checkboxHoverStyles)}
  }
`;
