import styled, { css } from 'styled-components';
import { ButtonProps } from './Button.types';
import { vars } from '../../styles';

const primaryBtn = css`
        background-color: ${vars.colorPrimaryDefault};
        color: ${vars.colorTextLight};
        font-size: ${vars.x4};
        padding: ${vars.x3_5} ${vars.x6};
        border-radius: ${vars.x2};
        &:hover {
            background-color: ${vars.colorPrimaryHover};
        }
`;

const secondaryBtn = css`
        background-color: ${vars.colorSecondaryLightDefault};
        color: ${vars.colorTextDark};
        font-size: ${vars.x4};
        padding: ${vars.x2_5} ${vars.x4};
        border-radius: ${vars.x2};
        &:hover {
            background-color: ${vars.colorSecondaryLightHover};
        }
`;

const defaultBtn = css`
        background-color: ${vars.colorSecondaryDarkDefault};
        color: ${vars.colorTextDark};
        padding: ${vars.x4} ${vars.x5};
        border-radius: ${vars.x2};
`;

const tagBtn = css`
        font-size: ${vars.x2_5};
        padding: ${vars.x05} ${vars.x1};
        color: ${vars.colorTag};
        border-radius: ${vars.x05};
        background-color: ${vars.colorSecondaryDarkDefault};
        &:hover {
            background-color: ${vars.colorSecondaryDarkHover};
        }
`;

export const ButtonR = styled.button<ButtonProps>`
    ${(props) => {
    switch (props.theme) {
      case 'primary':
        return primaryBtn;
      case 'secondary':
        return secondaryBtn;
      case 'tag':
        return tagBtn;
      default:
        return defaultBtn;
    }
  }}

    font-family: ${vars.fontFamily};
    font-weight: ${(props) => (props.theme === 'tag' ? '500' : '600')};
  }};
    border: 0;
    border-radius: ${(props) => (props.circle && '50%')};;
    color: ${(props) => props.color}};
    background-color: ${(props) => props.backgroundColor}};
    cursor: ${(props) => !props.disabled && 'pointer'};
    display: inline-block;
    line-height: ${(props) => (props.circle && `${vars.x3_5}`)};
    opacity: ${(props) => props.disabled && vars.toneHover};
`;
