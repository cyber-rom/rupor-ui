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
  size?: ButtonSize;
  theme: 'primary' | 'secondary';
  /**
     * Optional click handler
     */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  title?: string | JSX.Element
  loaderIcon?: string
  isLoading?: boolean
  disabled?: boolean
  circle?: boolean
}

export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  Tag = 'tag',
}
