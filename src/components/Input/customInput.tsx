import React, { FC } from 'react';
import { CustomInputTypes } from './customInput.types';

const CustomInput: FC<CustomInputTypes> = (
  {
    afix,
    postfix,
    className,
    ...customInputProps
  },

) => (
  <div className={className}>
    {afix}
    <input
      {...customInputProps}
    />
    {postfix}
  </div>
);

export { CustomInput };
