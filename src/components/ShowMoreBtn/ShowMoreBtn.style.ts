import styled from 'styled-components';
import { fonts as ThemeFonts } from '../../styles/theme/typography';
import { vars } from '../../styles';

export const BtnWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: ${vars.x4} ${vars.x6};
`;

export const IconWrapper = styled.span`
    margin: auto;
    display: inline-block;
`;

export const IconContainer = styled.div<{ collapsed?: boolean }>`
    display: flex;
    margin-right: ${vars.x8};
    width: ${vars.x6};
    height: ${vars.x6};
    cursor: pointer;
    // margin: ${(collapsed) => (collapsed && 'auto')};
`;

export const TitleWrapper = styled.span`
    ${{ ...ThemeFonts.fontLabel }}
    color: ${vars.colorSecondaryLightDefault};
    cursor: pointer;
`;
