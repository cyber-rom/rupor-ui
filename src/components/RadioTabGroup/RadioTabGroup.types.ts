import React from 'react';

export interface RadioTabGroupProps {
  tabs: RadioTabType[],
  onSelectHandler: () => void
}

export interface RadioTabType {
  children?: React.ReactNode,
  id: number
}

export interface RadioTabProps extends RadioTabType {
  selected: boolean,
  onChange: (id: number) => void,
}
