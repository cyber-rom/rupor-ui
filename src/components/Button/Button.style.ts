import styled, { css } from 'styled-components';

import { ButtonElemProps } from './Button.types';
import { vars } from '../../styles';
import { tone } from '../../styles/theme/opasity';

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

const secondaryLightBtn = css`
        background-color: ${vars.colorSecondaryLightDefault};
        color: ${vars.colorTextDark};
        font-size: ${vars.x4};
        padding: ${vars.x2_5} ${vars.x4};
        border-radius: ${vars.x2};
        &:hover {
            background-color: ${vars.colorSecondaryLightHover};
        }
`;

const secondaryDarkBtn = css`
        background-color: ${vars.colorSecondaryDarkDefault};
        color: ${vars.colorTextLight};
        font-size: ${vars.x4};
        padding: ${vars.x2_5} ${vars.x4};
        border-radius: ${vars.x2};
        &:hover {
            background-color: ${vars.colorSecondaryDarkHover};
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

export const ButtonR = styled.button<ButtonElemProps>`
    ${(props) => {
    switch (props.theme) {
      case 'primary':
        return primaryBtn;
      case 'secondary':
        return secondaryLightBtn;
      case 'secondaryDark':
        return secondaryDarkBtn;
      case 'tag':
        return tagBtn;
      default:
        return defaultBtn;
    }
  }}

    font-family: ${vars.fontFamily};
    font-weight: ${(props) => (props.theme === 'tag' ? '500' : '600')};
    border: 0;
    border-radius: ${(props) => (props.circle && '50%')};
    color: ${(props) => props.color};
    background-color: ${(props) => props.backgroundColor};
    cursor: ${(props) => !props.disabled && 'pointer'};
    display: inline-block;
    line-height: ${(props) => (props.circle && `${vars.x3_5}`)};
    opacity: ${(props) => props.disabled && tone.toneHover};
`;

export const IconWrapper = styled.span`
    display: inline-block;
    margin-right: ${vars.x4};
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
`;
