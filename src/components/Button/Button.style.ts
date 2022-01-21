import styled, { css } from 'styled-components';

import { ButtonElemProps } from './Button.types';
import { vars } from '../../styles';
import { tone } from '../../styles/theme/opasity';
import { fonts as ThemeFonts } from '../../styles/theme/typography';

const primaryBtn = css`
        ${{ ...ThemeFonts.fontLabelPrimary }};
        background-color: ${vars.colorPrimaryDefault};
        color: ${vars.colorTextLight};
        padding: ${vars.x3_5} ${vars.x6};
        border-radius: ${vars.x2};
        &:hover {
            background-color: ${vars.colorPrimaryHover};
        }
`;

const secondaryLightBtn = css`
        ${{ ...ThemeFonts.fontLabelSecondary }};
        background-color: ${vars.colorSecondaryLightDefault};
        color: ${vars.colorTextDark};
        padding: ${vars.x2_5} ${vars.x4};
        border-radius: ${vars.x2};
        &:hover {
            background-color: ${vars.colorSecondaryLightHover};
        }
`;

const secondaryDarkBtn = css`
        ${{ ...ThemeFonts.fontLabelSecondary }};
        background-color: ${vars.colorSecondaryDarkDefault};
        color: ${vars.colorTextLight};
        padding: ${vars.x2_5} ${vars.x4};
        border-radius: ${vars.x2};
        &:hover {
            background-color: ${vars.colorSecondaryDarkHover};
        }
`;

const defaultBtn = css`
        ${{ ...ThemeFonts.fontLabelPrimary }};
        background-color: ${vars.colorSecondaryDarkDefault};
        color: ${vars.colorTextDark};
        padding: ${vars.x4} ${vars.x5};
        border-radius: ${vars.x2};
`;

const tagBtn = css`
        ${{ ...ThemeFonts.fontLabelXSmall }}
        padding: ${vars.x05} ${vars.x1};
        color: ${vars.colorTag};
        border-radius: ${vars.x05};
        background-color: ${vars.colorSecondaryDarkDefault};
        &:hover {
            background-color: ${vars.colorSecondaryDarkHover};
        }
`;

export const ButtonR = styled.button<ButtonElemProps>`
    font-family : inherit;
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
