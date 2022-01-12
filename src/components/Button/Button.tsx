import React from 'react';
import { ButtonR } from './Button.style';

interface ButtonProps {
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
}

export const Button = ({
  primary,
  secondary,
  color,
  size = 'medium',
  backgroundColor,
  title,
}: ButtonProps) => {
  return (
    <ButtonR
      backgroundColor={backgroundColor}
      size={size}
      primary={primary}
      secondary={secondary}
      color={color}
    >
      {title}
    </ButtonR>
  );
};