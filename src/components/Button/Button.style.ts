import styled, { CSSObject } from 'styled-components';

export const ButtonR = styled.button<any>`
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: ${(props: CSSObject) => {
        switch(props.size){
            case 'small':
                return '12px'
            case 'medium':
                return '14px'
            case 'large':
                return '16px'
        }
    }};
    padding: ${(props: CSSObject) => {
        switch(props.size){
            case 'small':
                return '10px 16px'
            case 'medium':
                return '11px 20px'
            case 'large':
                return '12px 24px'
        }
    }};
    width: ${(props: CSSObject) => props.size === 'large' && '384px'};
    height: ${(props: CSSObject) => props.size === 'large' && '48px'};
    text-transform: uppercase;
    border: 0;
    border-radius: 8px;
    background-color: ${(props) => {
        if (props.backgroundColor) return props.backgroundColor
        else if(props.primary) return '#FC203C'
        else if (props.secondary) return 'transparent'
    }};
    color: ${(props) => {
        if(props.color) return props.color
        else if(props.primary) return '#fff'
        else if (props.secondary) return '#333'
    }};
    box-shadow: ${(props: CSSObject) => props.secondary && 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset'};
    cursor: pointer;
    display: inline-block;
    line-height: 24px;
`