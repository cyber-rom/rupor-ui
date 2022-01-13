import React from 'react';
import { ButtonR } from './Button.style';
import { ButtonProps } from './Button.types';

export const Button = ({
  primary,
  secondary,
  color,
  size,
  backgroundColor,
  title,
  onClick,
  loaderIcon,
  isLoading,
  isDisabled,
  circle,
}: ButtonProps) => (
  <ButtonR
    backgroundColor={backgroundColor}
    size={size}
    primary={primary}
    secondary={secondary}
    color={color}
    onClick={!isDisabled ? onClick : undefined}
    isDisabled={isDisabled}
    circle={circle}
  >
    {isLoading ? loaderIcon : title}
  </ButtonR>
);
