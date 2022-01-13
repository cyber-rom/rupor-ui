import styled from 'styled-components';
import { ButtonProps } from './Button.types';

export const ButtonR = styled.button<ButtonProps>`
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: ${(props) => (props.size === 'tag' ? '500' : '600')};;
    font-size: ${(props) => {
    switch (props.size) {
      case 'small':
        return '12px';
      case 'medium':
        return '14px';
      case 'large':
        return '16px';
      case 'tag':
        return '10x';
      default:
        return '12px';
    }
  }};
    padding: ${(props) => {
    switch (props.size) {
      case 'small':
        return '10px 16px';
      case 'medium':
        return '11px 20px';
      case 'large':
        return '13px 24px';
      case 'tag':
        return '1.5px 4px 2.5px';
      default:
        return '16px 20px';
    }
  }};
    border: 0;
    border-radius: ${(props) => (props.circle ? '50%' : '8px')};;
    background-color: ${(props) => {
    if (props.backgroundColor) return props.backgroundColor;
    if (props.primary) return '#FC203C';
    if (props.secondary) return '#E7EAF2';
    if (props.size === 'tag') return '#27282D';
    return '#FC203C';
  }};
    color: ${(props) => {
    if (props.color) return props.color;
    if (props.primary) return '#fff';
    if (props.secondary) return '#333';
    if (props.size === 'tag') return '#80838C';
    return '#fff';
  }};
    cursor: ${(props) => !props.isDisabled && 'pointer'};
    display: inline-block;
    line-height: ${(props) => (props.circle ? '14px' : '20px')};
    opacity: ${(props) => props.isDisabled && '0.4'};
    &:hover {
        background-color: ${(props) => {
    if (props.size === 'tag') return '#2F3136';
    if (props.backgroundColor) return '';
    if (!props.isDisabled) {
      if (props.primary) return '#FF334D';
      return '#DBE0EC';
    }
    return '';
  }};
    }
`;
