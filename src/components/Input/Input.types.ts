import React, { InputHTMLAttributes } from 'react';

export interface InputTypes extends InputHTMLAttributes<HTMLInputElement> {
  afix?: React.ReactElement;
  postfix?: React.ReactElement;
  error?: boolean;
  approve?: boolean;
  label?: string;
  isDisabled?: boolean;
}
