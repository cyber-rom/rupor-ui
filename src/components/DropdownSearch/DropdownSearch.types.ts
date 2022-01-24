import { ReactNode } from 'react';
import { InputProps } from '../Input/Input.types';

export interface DropdownSearchProps {
  dropdownContent?: ReactNode;
  queryCallback?: (value: string) => unknown;
  inputProps?: Omit<InputProps, 'onChange' | 'onKeyDown'>;
  onChange?: (event: React.FormEvent) => void;
  onKeyDown?: (event: React.FormEvent) => void;
  debounceTime?: number;
}
