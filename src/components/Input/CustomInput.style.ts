import { LabelHTMLAttributes } from 'react';
import styled from 'styled-components';
import { InputTypes } from './Input.types';
import { CustomInput } from './customInput';
import { vars } from '../../styles';

export const CustomInputStyled = styled(CustomInput)<InputTypes>`
    font-family: ${vars.fontFamily};
    font-weight: normal;
    font-size: ${vars.x3_5};
    padding: 0 ${vars.x6};
    line-height: 20px;
    display: flex;
    flex-direction: row;
    margin: ${vars.x4} 0px;
    align-items: center;
    border: none;
    color: ${vars.colorWhite};
    background: ${vars.colorBlack};
    opacity: ${(props) => props.isDisabled && '0.4'};
    width: 250px;
    height: 48px;
    left: 0px;
    outline: 0;
    outline-offset: 0;
    border-radius: 8px;
    &:hover{
        input{
            background: ${vars.colorSecondaryDarkDefault};
        }
        background: ${vars.colorSecondaryDarkDefault};
    };
    
    &:focus-within{
        background: ${vars.colorSecondaryDarkDefault};
    }
input{
    font-family: ${vars.fontFamily};
    font-size: ${vars.x3_5};
    padding: 0 ${vars.x4};
    line-height: 20px;
    display: flex;
    flex-direction: row;
    margin: ${vars.x4} 0px;
    align-items: center;
    border: none;
    color: ${vars.colorWhite};
    background: ${vars.colorBlack};
    opacity: ${(props) => props.isDisabled && '50%'};
    width: 250px;
    height: 48px;
    left: 0px;
    outline: 0;
    border-radius: 8px;  
    &:focus {
        background: ${vars.colorSecondaryDarkDefault};
        &::placeholder {
            color: transparent;
          }
        background: ${vars.colorSecondaryDarkDefault};   
    };    
}    
`;

export const LabelStyled = styled.label<LabelHTMLAttributes<HTMLLabelElement>>`
    font-family: ${vars.fontFamily};
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
`;
