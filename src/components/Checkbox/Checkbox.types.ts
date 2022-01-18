import { HTMLAttributes } from 'react';

export interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  checked?: boolean;
  toggle?: boolean;
}
