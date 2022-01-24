import { InputHTMLAttributes } from 'react';

export interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'thin' | 'default';
  afix?: React.ReactElement;
  postfix?: React.ReactElement;
}
