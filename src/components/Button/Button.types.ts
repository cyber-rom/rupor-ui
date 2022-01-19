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
  theme: 'primary' | 'secondary' | 'tag' | 'secondaryDark';
  /**
     * Optional click handler
     */
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  title?: string | JSX.Element
  loaderIcon?: JSX.Element
  icon?: JSX.Element
  isLoading?: boolean
  disabled?: boolean
  circle?: boolean
}

export type ButtonElemProps = Omit<ButtonProps, 'onClick' >;

export enum ButtonSize {
  Tag = 'tag',
}
