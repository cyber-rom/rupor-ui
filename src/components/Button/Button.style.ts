import styled from 'styled-components';
import { ButtonProps } from './Button'


enum BtnSize {
    Height = '48px',
    Width = '384px',
}

export const ButtonR = styled.button<ButtonProps>`
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: ${(props) => {
        switch(props.size){
            case 'small':
                return '12px'
            case 'medium':
                return '14px'
            case 'large':
                return '16px'
        }
    }};
    padding: ${(props) => {
        switch(props.size){
            case 'small':
                return '10px 16px'
            case 'medium':
                return '11px 20px'
            case 'large':
                return '12px 24px'
        }
    }};
    width: ${(props) => props.size === 'large' && BtnSize.Width};
    height: ${(props) => props.size === 'large' && BtnSize.Height};
    text-transform: uppercase;
    border: 0;
    border-radius: 8px;
    background-color: ${(props) => {
        if (props.backgroundColor) return props.backgroundColor
        else if(props.primary) return '#FC203C'
        else if (props.secondary) return '#E7EAF2'
    }};
    color: ${(props) => {
        if(props.color) return props.color
        else if(props.primary) return '#fff'
        else if (props.secondary) return '#333'
    }};
    cursor: ${(props) => !props.isDisabled && 'pointer'};
    display: inline-block;
    line-height: 24px;
    opacity: ${(props) => props.isDisabled && '0.4'};
    &:hover {
        background-color: ${(props) => {
            if(!props.isDisabled){
                if(props.primary) return '#FF334D'
                else return '#DBE0EC'
            }
        }};
    }
`