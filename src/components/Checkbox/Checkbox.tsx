import React from 'react';
import { DefaultCheckbox, StyledCheckbox, CheckboxWrapper } from './Checkbox.style';
import { CheckboxProps } from './Checkbox.types';

export const Checkbox = (props: CheckboxProps) => {
  const { className, toggle } = props;
  return (
    <CheckboxWrapper className={className} toggle={toggle}>
      <DefaultCheckbox {...props} />
      <StyledCheckbox toggle={toggle} />
    </CheckboxWrapper>
  );
};
