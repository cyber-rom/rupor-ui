import styled from 'styled-components';

import { vars } from '../../styles';

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${vars.x4} ${vars.x6};
    background-color: ${vars.colorGrey};
`;

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const LogoIcon = styled.span`
    margin-right: ${vars.x8};
    cursor: pointer;
`;

export const ButtonContainer = styled.div`
    margin-left: ${vars.x6};
`;

export const SvgItem = styled.span`
    display: inline-block;
    margin-left: ${vars.x8};
    cursor: pointer;
`;
