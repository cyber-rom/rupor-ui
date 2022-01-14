import React from 'react';
import { ButtonR } from './Button.style';
import { ButtonProps } from './Button.types';

export const Button = ({
  color,
  size,
  backgroundColor,
  title,
  onClick,
  loaderIcon,
  isLoading,
  disabled,
  circle,
  theme,
}: ButtonProps) => (
  <ButtonR
    backgroundColor={backgroundColor}
    size={size}
    color={color}
    theme={theme}
    onClick={onClick}
    disabled={disabled}
    circle={circle}
  >
    {isLoading ? loaderIcon : title}
  </ButtonR>
);
