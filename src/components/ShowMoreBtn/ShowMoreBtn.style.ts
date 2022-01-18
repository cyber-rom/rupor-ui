import styled from 'styled-components';

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

export const IconContainer = styled.div<any>`
    margin-right: ${vars.x8};
    display: flex;
    width: ${vars.x6};
    height: ${vars.x6};
    cursor: pointer;
    margin: ${(props) => (props.collapsed && 'auto')};
`;

export const TitleWrapper = styled.span`
    color: ${vars.colorSecondaryLightDefault};
    cursor: pointer;
    font-family: ${vars.fontFamily};
    font-weight: 400;
    font-size: 14px;
`;
