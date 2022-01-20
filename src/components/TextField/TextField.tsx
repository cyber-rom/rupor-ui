import React from 'react';
import { ApproveMarkIcon, ExclamationMarkIcon } from '../../assets/icons';
import { Input } from '../Input';
import { TextFieldHelperText, TextFieldLabel, TextFieldWrapper } from './TextField.style';
import { TextFieldProps } from './TextField.types';

export const TextField = (props: TextFieldProps) => {
  const {
    id,
    label,
    inputProps,
    error,
    approved,
    helperText,
    disabled,
    ...htmlDivProps
  } = props;

  return (
    <TextFieldWrapper disabled={disabled} {...htmlDivProps}>
      {label && (
        <TextFieldLabel htmlFor={id}>
          {label}
        </TextFieldLabel>
      )}
      <Input
        id={id}
        disabled={disabled}
        {...inputProps}
      />
      <TextFieldHelperText error={error} approved={approved}>
        {error && <ExclamationMarkIcon className="RuiTextField-icon RuiTextField-icon_error" size={16} />}
        {approved && <ApproveMarkIcon className="RuiTextField-icon RuiTextField-icon_approved" size={16} />}
        {helperText}
      </TextFieldHelperText>
    </TextFieldWrapper>
  );
};
