import React from 'react';
import { RadioTabButton } from './RadioTab.styles';
import { RadioTabProps } from '../RadioTabGroup.types';

export const RadioTab = ({
  children,
  selected,
  onChange,
  id,
} : RadioTabProps) => (
  <RadioTabButton onClick={() => onChange(id)} isSelected={selected}>{children}</RadioTabButton>
);
