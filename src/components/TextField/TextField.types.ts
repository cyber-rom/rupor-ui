import { ReactNode, HTMLAttributes } from 'react';
import { InputProps } from '../Input/Input.types';

export interface TextFieldProps extends HTMLAttributes<HTMLDivElement> {
  id?: string;
  label?: string;
  inputProps?: InputProps;
  error?: boolean;
  approved?: boolean;
  helperText?: ReactNode;
  disabled?: boolean;
}
