import React from 'react';
import { ButtonR } from './Button.style';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  secondary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  color?: string;
  /**
   * How large should the button be?
   */
  size: 'small' | 'medium' | 'large';
  /**
   * Optional click handler
   */
  onClick?: () => void;
  title?: string
  loaderIcon?: string
  isLoading?: boolean
  isDisabled?: boolean
}

export const Button = ({
  primary,
  secondary,
  color,
  size = 'medium',
  backgroundColor,
  title,
  onClick,
  loaderIcon,
  isLoading,
  isDisabled
}: ButtonProps) => {

  return (
    <ButtonR
      backgroundColor={backgroundColor}
      size={size}
      primary={primary}
      secondary={secondary}
      color={color}
      onClick={!isDisabled ? onClick : undefined}
      isDisabled={isDisabled}
    >
      {isLoading ? loaderIcon : title}
    </ButtonR>
  );
};