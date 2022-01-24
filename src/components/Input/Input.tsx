import React, { FocusEvent, useState } from 'react';
import { BaseInput } from './BaseInput';
import { AbortmentContainer, InputWrapper } from './Input.style';
import { InputProps } from './Input.types';

export const Input = (props: InputProps) => {
  const { afix, postfix, disabled } = props;
  const { onFocus = () => {}, onBlur = () => {}, ...baseInputProps } = props;
  const [focused, setFocused] = useState(false);

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    onFocus(event);
    setFocused(true);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    onBlur(event);
    setFocused(false);
  };

  return (
    <InputWrapper
      afix={afix}
      postfix={postfix}
      disabled={disabled}
      className={`${focused ? 'RuiInput-focused' : ''} ${disabled ? 'RuiInput-disabled' : ''}`}
    >
      <AbortmentContainer disabled={disabled}>
        {afix}
      </AbortmentContainer>
      <BaseInput
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...baseInputProps}
      />
      <AbortmentContainer disabled={disabled}>
        {postfix}
      </AbortmentContainer>
    </InputWrapper>
  );
};
