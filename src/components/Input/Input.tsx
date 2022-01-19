import React, { FC } from 'react';
import { CustomInputStyled, LabelStyled } from './CustomInput.style';
import { InputTypes } from './Input.types';
import { ExclamationMark, ApproveMark } from '../../assets/icons';

const Input: FC<InputTypes> = (
  {
    afix,
    error,
    approve,
    label,
    isDisabled,
    postfix,
    ...inputProps
  },
) => (
  <div>
    <LabelStyled>{label}</LabelStyled>
    <CustomInputStyled
      afix={afix}
      postfix={postfix}
      disabled={isDisabled}
      isDisabled={isDisabled}
      {...inputProps}
    />
    {error && <ExclamationMark />}
    {approve && <ApproveMark />}
  </div>
);

export { Input };
